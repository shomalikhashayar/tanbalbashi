<template>
  <div class="column">
    <h1 class="text-h6 text-weight-900 no-letter-spacing q-mt-xl" :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md'">
      محاسبه فاکتوریل
    </h1>
    <q-card bordered class="no-shadow q-mb-xl">
      <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-lg'">

        <div class="row items-center">
          <div class="col column">
            <q-item-label class="text-grey-7 text-body1 no-letter-spacing q-mb-sm">
              یک عدد صحیح مثبت وارد کنید
            </q-item-label>
            <div class="col row justify-start q-gutter-md">
              <q-input class="text-body1" dense outlined v-model="inputValue"
                :style="$q.screen.gt.sm ? 'width: 400px;' : 'width: 100%;'" />
              <q-btn class="text-body1 no-letter-spacing" :class="$q.screen.gt.sm ? 'q-ml-sm' : ''" unelevated color="primary"
                @click="calculateFactorial">محاسبه</q-btn>
            </div>
          </div>
        </div>

        <div class="row q-my-lg">
          <q-item-label class="q-mb-sm text-grey-7 text-body1 no-letter-spacing">
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
