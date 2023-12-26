<template>
  <div class="container">
    <q-card bordered class="no-shadow q-pa-xl q-my-xl">
      <q-card-section>
        <h1 class="text-h6 no-letter-spacing">
          محاسبه فاکتوریل
        </h1>
        <div class="row">
          <q-input class="text-body1" dense outlined v-model="inputValue" style="width: 400px;" />
          <q-btn class="text-body1 q-ml-sm" unelevated color="primary" @click="calculateFactorial">محاسبه</q-btn>
        </div>

        <div class="row q-my-lg">
          <q-item-label class="q-mb-sm text-grey-7 text-h6 no-letter-spacing">
            نتیجه:
          </q-item-label>
          <q-input readonly autogrow class="text-body1 full-width" outlined v-model="formattedResult" />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const inputValue = ref('');
const result = ref('');

const calculateFactorial = () => {
  const input = parseInt(inputValue.value);

  if (!isNaN(input) && input >= 0) {
    const factorialResult = calculateBigIntFactorial(input);
    result.value = factorialResult;
  }
};

const calculateBigIntFactorial = (number) => {
  if (number <= 1) {
    return 1n;
  } else {
    return BigInt(number) * calculateBigIntFactorial(number - 1);
  }
};

const formattedResult = computed(() => {
  return result.value ? result.value.toLocaleString() : '';
});

</script>
