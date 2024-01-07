<template>
  <q-card bordered class="no-shadow">
    <q-card-section class="q-pa-xl">
      <h2 class="text-dark text-weight-900 text-h3 no-letter-spacing no-line-height q-pb-md">سوالات
        متداول</h2>
      <div class="column">
        <q-list v-for="(faq, index) in data" :key="index" class="bg-white rounded-borders">
          <q-expansion-item :default-opened="shouldOpen(index)" group="faq">
            <template v-slot:header>
              <q-item-section>
                <h3 class="q-py-sm text-h6 text-weight-700 no-letter-spacing line-height-sm no-margin text-dark">
                  {{ faq.title }}
                </h3>
              </q-item-section>
            </template>
            <q-card>
              <q-card-section class="text-dark text-body1 no-letter-spacing line-height-sm">
                <p>
                  {{ faq.description }}
                </p>
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  data: Array
})

const shouldOpen = computed(() => {
  return (index) => index === 0;
});

</script>
