<template>
  <div class="column">
    <h1
      class="text-h6 text-weight-900 no-letter-spacing q-mt-xl"
      :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md'"
    >
      محاسبه لگاریتم
    </h1>
    <q-card bordered class="no-shadow q-mb-xl">
      <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-lg'">
        <div class="row items-center">
          <div class="col column">
            <q-item-label
              class="text-grey-7 text-body1 no-letter-spacing q-mb-sm"
            >
              یک عدد صحیح مثبت وارد کنید
            </q-item-label>
            <div class="col row justify-start q-gutter-sm">
              <q-input
                class="text-body1"
                dense
                outlined
                v-model="inputValue"
                :style="$q.screen.gt.sm ? 'width: 200px;' : 'width: 100%;'"
              />
              <q-input
                class="text-body1"
                dense
                outlined
                v-model="baseValue"
                :style="$q.screen.gt.sm ? 'width: 200px;' : 'width: 100%;'"
                :label="$q.screen.gt.sm ? 'مبنا' : ''"
              />
              <q-btn
                class="text-body1"
                :class="$q.screen.gt.sm ? 'q-ml-sm' : ''"
                unelevated
                color="primary"
                @click="calculateLogarithm"
                >محاسبه</q-btn
              >
            </div>
          </div>
        </div>

        <div class="row q-my-lg">
          <q-item-label
            class="q-mb-sm text-grey-7 text-body1 no-letter-spacing"
          >
            نتیجه:
          </q-item-label>
          <q-input
            readonly
            autogrow
            class="text-body1 full-width"
            outlined
            v-model="formattedResult"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const inputValue = ref("");
const baseValue = ref("");
const result = ref("");

const calculateLogarithm = () => {
  const number = parseFloat(inputValue.value);
  const base = parseFloat(baseValue.value);

  if (!isNaN(number) && !isNaN(base) && number > 0 && base > 0 && base !== 1) {
    const logarithmResult = Math.log(number) / Math.log(base);
    result.value = formatResult(logarithmResult);
  }
};

const formatResult = (value) => {
  const integerPart = Math.floor(value);
  const decimalPart = value - integerPart;


  if (decimalPart !== 0 && decimalPart.toString().split(".")[1].length !== 0) {
    return value.toFixed(10);
  } else {
    return integerPart.toLocaleString();
  }
};

const formattedResult = computed(() => {
  return result.value ? result.value.toLocaleString() : "";
});
</script>
