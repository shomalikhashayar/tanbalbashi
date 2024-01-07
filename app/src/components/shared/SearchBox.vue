<template>
  <div class="full-width">
    <q-input ref="searchInput" v-model="searchQuery" @keyup.enter.prevent="showMenuOnEnter"
      placeholder="جستجو برای ابزارها" rounded outlined bg-color="white" color="secondary" class="text-h6">
      <template v-slot:prepend>
        <q-icon v-if="searchQuery === ''" name="search" size="md" />
        <q-icon size="md" v-else name="clear" class="cursor-pointer" @click="clearSearch" />
      </template>
      <template v-if="$q.screen.gt.sm" #append>
        <q-chip class="text-caption text-white bg-primary text-bold text-dark no-pointer-events">
          CTRL + K
        </q-chip>
      </template>
    </q-input>
    <q-menu :offset="[0, 20]" no-parent-event v-model="isPopupOpen" transition-show="jump-down" transition-hide="jump-up"
      fit no-focus no-refocus>
      <q-list padding v-if="isPopupOpen">
        <div v-for="(parent, index) in filteredItems" :key="index">

          <div class="text-dark">
            <q-item :to="parent.address" class="no-focus-helper">
              <q-item-section class="text-body2 text-weight-700 no-letter-spacing">{{ parent.name }}</q-item-section>
            </q-item>
          </div>

          <div v-if="parent.filteredSubItem.length > 0" class="text-dark">
            <q-item v-for="(subItem, subIndex) in parent.filteredSubItem" :key="'sub_' + subIndex" :to="`/tools/${subItem.address}`">
              <q-item-section class="text-body2 no-letter-spacing">{{ subItem.name }}</q-item-section>
            </q-item>
          </div>

        </div>

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
import NothingFound from 'src/components/shared/NothingFound.vue';

const tools = helper.getTools();

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
