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
        <div class="row q-col-gutter-md">
          <div class="col-md-4 col-sm-12 col-xs-12">
            <q-item-label
              class="text-grey-7 text-body1 no-letter-spacing q-mb-sm"
            >
              یک عدد وارد کنید
            </q-item-label>
            <q-input
              class="text-body1"
              dense
              outlined
              v-model="inputValue"
              type="number"
            />
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <q-item-label
              class="text-grey-7 text-body1 no-letter-spacing q-mb-sm"
            >
              مبنا را وارد کنید
            </q-item-label>
            <q-input
              class="text-body1"
              dense
              outlined
              v-model="baseValue"
              type="number"
              step="any"
            />
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12 row items-end">
            <q-btn
              class="text-body1 no-letter-spacing"
              unelevated
              color="primary"
              @click="calculateLogarithm"
              >محاسبه</q-btn
            >
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
            class="text-body1 full-width result-area rtl"
            outlined
            v-model="formattedResult"
          />
          <p
            class="text-body4 text-weight-600 text-grey-7 no-letter-spacing q-mb-none q-mt-sm"
          >
            در صورتی که در قسمت مبنا عددی وارد نکنید، به طور پیشفرض مبنای
            لگاریتم <span class="text-red-8 text-weight-700">10</span> در نظر
            گرفته میشود
          </p>
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
  let base = parseFloat(baseValue.value);
  if (isNaN(base) || !base) {
    base = 10;
  }
  if (!isNaN(number) && number > 0 && base > 0 && base !== 1) {
    const logarithmResult = Math.log(number) / Math.log(base);
    result.value = formatResult(logarithmResult);
  }
};
const formatResult = (value) => {
  const formattedValue = value.toFixed(10).replace(/\.?0+$/, ""); // حذف اعداد اضافی از اعشار

  // const integerPart = Math.floor(value);
  // const decimalPart = value - integerPart;

  // if (decimalPart !== 0 && decimalPart.toString().split(".")[1].length !== 0) {
  return formattedValue;
  // } else {
  //   return integerPart.toLocaleString();
  // }
};

const formattedResult = computed(() => {
  return result.value ? result.value.toLocaleString() : "";
});
</script>
