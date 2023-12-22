<template>
  <div class="full-width">
    <q-input v-model="searchQuery" @update:model-value="filterItems" placeholder="جستجو برای ابزارها" rounded outlined
      bg-color="white" color="secondary" class="text-h6">
      <template v-slot:prepend>
        <q-icon v-if="searchQuery === ''" name="search" size="md" />
        <q-icon size="md" v-else name="clear" class="cursor-pointer" @click="searchQuery = ''" />
      </template>
    </q-input>
    <q-menu v-if="filteredItems.length > 0">
      <q-list>
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
  'Apple',
  'Banana',
  'Orange',
  'Strawberry',
  // Add more items as needed
]);

const searchQuery = ref('');
const filteredItems = computed(() => {
  return items.value.filter(item =>
    item.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

function filterItems() {
  // Filtering logic can be added here, but in this case, it uses computed property
}
</script>
