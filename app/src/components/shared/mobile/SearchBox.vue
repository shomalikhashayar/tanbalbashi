<template>
  <div>
    <div v-if="$q.screen.lt.md">
      <q-btn round unelevated>
        <q-icon name="o_search" size="32px" />
      </q-btn>
    </div>

    <q-menu :offset="[0, 20]" anchor="bottom middle" self="top middle" class="full-width bordered" transition-show="jump-down"
      transition-hide="jump-up" min-height="500px">
      <q-card>
        <q-card-section>
          <q-input ref="searchInput" v-model="searchQuery" @keyup.enter.prevent="showMenuOnEnter"
            placeholder="جستجو برای ابزارها" rounded outlined bg-color="white" color="secondary" class="full-width text-h6">
            <template v-slot:prepend>
              <q-icon v-if="searchQuery === ''" name="search" size="md" />
              <q-icon size="md" v-else name="clear" class="cursor-pointer" @click="clearSearch" />
            </template>
          </q-input>

          <q-list class="q-py-md" v-if="isPopupOpen">
            <q-item clickable :to="item.link" v-for="(item, index) in filteredItems" :key="index">
              <q-item-section class="text-body1 no-letter-spacing">{{ item.name }}</q-item-section>
            </q-item>

            <q-item v-if="filteredItems.length === 0">
              <q-item-section>
                <nothing-found />
              </q-item-section>
            </q-item>
          </q-list>

        </q-card-section>
      </q-card>
    </q-menu>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { helper } from 'src/helpers/helpers.js';
import NothingFound from 'src/components/shared/NothingFound.vue';

const tools = helper.getTools();

const searchInput = ref(null);
const searchQuery = ref('');
const isPopupOpen = ref(false);

const filteredItems = computed(() => {
  return tools.filter(item =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function showMenuOnEnter(event) {
  if (event.key === 'Enter') {
    isPopupOpen.value = true;
  }
}

function clearSearch() {
  searchQuery.value = '';
  isPopupOpen.value = false;
  focusOnSearch();
}

function focusOnSearch() {
  if (searchInput.value) {
    searchInput.value.focus();
  }
}

function setupEventListeners() {
  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault();
      if (searchInput.value) {
        searchInput.value.focus();
      }
    }
  });
}


onMounted(() => {
  setupEventListeners();
});

</script>
