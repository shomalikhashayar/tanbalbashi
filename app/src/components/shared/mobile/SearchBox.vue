<template>
  <div>
    <div v-if="$q.screen.lt.md">
      <q-btn @click="dialog = true" round unelevated>
        <q-icon name="o_search" size="32px" />
      </q-btn>
    </div>

    <q-dialog v-model="dialog" persistent maximized transition-show="slide-up" transition-hide="slide-down">
      <q-card class="bg-white text-dark">

        <q-card-section>

          <q-input ref="searchInput" v-model="searchQuery" @keyup.enter.prevent="showMenuOnEnter"
            placeholder="جستجو برای ابزارها" rounded outlined bg-color="white" color="secondary"
            class="full-width text-h6">
            <template v-slot:prepend>
              <q-icon v-if="searchQuery === ''" name="search" size="md" />
              <q-icon size="md" v-else name="clear" class="cursor-pointer" @click="clearSearch" />
            </template>

            <template v-slot:append>
              <q-btn color="primary" class="text-dark text-body3 no-letter-spacing" rounded unelevated
                @click="dialog = false">پایان جستجو</q-btn>
            </template>
          </q-input>

          <q-scroll-area class="no-scroll q-mt-lg" style="height: calc(100vh - 120px);" :bar-style="{ opacity: 0 }"
            :thumb-style="{ opacity: 0 }">

            <q-list padding v-if="isPopupOpen" class="column q-gutter-lg">
              <div v-for="(parent, index) in filteredItems" :key="index">

                <div class="text-dark">
                  <q-item :to="parent.address" class="no-focus-helper">
                    <q-item-section class="text-h6 text-weight-700 no-letter-spacing">
                      <div class="row items-center">
                        <span class="text-weight-700 q-mr-sm">#</span>
                        <h2 class="text-h6 decoration-on-hover no-margin text-center text-dark text-weight-900">
                          {{ parent.name }}</h2>
                      </div>
                    </q-item-section>
                  </q-item>
                </div>

                <div v-if="parent.filteredSubItem.length > 0" class="text-dark">
                  <q-item v-for="(subItem, subIndex) in parent.filteredSubItem" :key="'sub_' + subIndex"
                    :to="`/tools/${subItem.address}`">
                    <q-item-section class="text-body1 no-letter-spacing q-py-sm">
                      <div class="row items-center">
                        <q-icon :name="subItem.icon" size="sm" color="green" class="q-mr-sm" />
                        {{ subItem.name }}
                      </div>
                    </q-item-section>
                  </q-item>
                </div>

              </div>

              <q-item v-if="filteredItems.length === 0">
                <q-item-section>
                  <nothing-found />
                </q-item-section>
              </q-item>
            </q-list>

          </q-scroll-area>

        </q-card-section>


      </q-card>
    </q-dialog>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { helper } from 'src/helpers/helpers.js';
import NothingFound from 'src/components/shared/NothingFound.vue';

const tools = helper.getTools();

const dialog = ref(false)

const searchInput = ref(null);
const searchQuery = ref('');
const isPopupOpen = ref(false);

const filteredItems = computed(() => {
  return tools.map(parent => {
    const filteredSubItem = parent.subItem.filter(sub =>
      sub.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
    return {
      ...parent,
      filteredSubItem
    };
  }).filter(item =>
    item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || item.filteredSubItem.length > 0
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
