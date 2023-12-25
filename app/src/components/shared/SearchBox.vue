<template>
  <div class="full-width">
    <q-input id="search" ref="search" v-model="searchQuery" @update:model-value="handleSearchInput"
      @keydown.enter="showMenuOnEnter" placeholder="جستجو برای ابزارها" rounded outlined bg-color="white"
      color="secondary" class="text-h6">
      <template v-slot:prepend>
        <q-icon v-if="searchQuery === ''" name="search" size="md" />
        <q-icon size="md" v-else name="clear" class="cursor-pointer" @click="clearSearch" />
      </template>
      <template #append>
        <q-chip class="text-caption text-bold text-dark no-pointer-events">
          CTRL + K
        </q-chip>
      </template>
    </q-input>
    <q-menu :offset="[0, 20]" no-parent-event v-model="isPopupOpen" transition-show="jump-down" transition-hide="jump-up"
      fit no-focus no-refocus>
      <q-list v-if="isPopupOpen">
        <q-item :to="item.link" v-for="(item, index) in filteredItems" :key="index">
          <q-item-section class="text-body1 no-letter-spacing">{{ item.name }}</q-item-section>
        </q-item>

        <q-item v-if="filteredItems.length === 0">
          <q-item-section>
            <nothing-found />
          </q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { helper } from 'src/helpers/helpers.js';
import nothingFound from 'src/components/shared/NothingFound.vue'

const tools = helper.getTools()

const search = ref(null)

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
}

function focusOnSearch() {
  search.value.select()
}

onMounted(() => {

  document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'k') {
      event.preventDefault()
      focusOnSearch()
    }
  });

  focusOnSearch()

})
</script>