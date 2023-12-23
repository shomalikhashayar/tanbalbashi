<template>
  <div class="full-width">
    <q-input ref="search" v-model="searchQuery" @input="handleSearchInput" @keyup.enter="showMenuOnEnter" placeholder="جستجو برای ابزارها" rounded outlined
      bg-color="white" color="secondary" class="text-h6">
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
    <q-menu  :offset="[0, 20]" no-parent-event v-model="isPopupOpen" transition-show="jump-down" transition-hide="jump-up" fit no-focus no-refocus>
      <q-list v-if="isPopupOpen && filteredItems.length > 0">
        <q-item v-for="(item, index) in filteredItems" :key="index">
          <q-item-section>{{ item }}</q-item-section>
        </q-item>
      </q-list>
    </q-menu>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const items = ref([
  'محسابه فاکتور',
  'محاسبه لگاریتم',
  'محاسبه جذر',
  'تولید متن تصادفی',
  'تولید رمز قوی',
  'محاسبه درصد',
]);

const searchQuery = ref('');
const isPopupOpen = ref(false);

const filteredItems = computed(() => {
  return items.value.filter(item =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function handleSearchInput() {
  if (searchQuery.value.toLowerCase() === 'stop') {
    isPopupOpen.value = true;
  } else {
    isPopupOpen.value = false;
  }
}

function showMenuOnEnter(event) {
  if (event.key === 'Enter') {
    isPopupOpen.value = true;
  }
}

function clearSearch() {
  searchQuery.value = '';
  isPopupOpen.value = false;
}
</script>
