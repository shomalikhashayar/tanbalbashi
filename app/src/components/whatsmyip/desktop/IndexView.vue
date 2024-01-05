<template>
  <div class="column">
    <q-card bordered class="no-shadow q-mt-xl">
      <q-card-section>

        <div>
          <q-item-label class="text-grey-7 q-mb-sm no-letter-spacing">
            آدرس آی پی شما
          </q-item-label>
          <div class="text-h4">
            {{ ipInfo.ipAddress }}
          </div>
        </div>

        <div>
          <q-item-label class="text-grey-7 q-mb-sm no-letter-spacing">
            کشور
          </q-item-label>
          <div class="text-h4">
            {{ ipInfo.countryName }}
          </div>
        </div>

        <div>
          <q-item-label class="text-grey-7 q-mb-sm no-letter-spacing">
            شهر
          </q-item-label>
          <div class="text-h4">
            {{ ipInfo.cityName }}
          </div>
        </div>

        <div>
          <q-item-label class="text-grey-7 q-mb-sm no-letter-spacing">
            باقی دیتا
          </q-item-label>
          <div class="text-h4">
            {{ ipInfo }}
          </div>
        </div>

      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const url = `https://freeipapi.com/api/json`;
const ipInfo = ref('');

onMounted(() => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      ipInfo.value = data;
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching IP info:', error);
    });
});
</script>
