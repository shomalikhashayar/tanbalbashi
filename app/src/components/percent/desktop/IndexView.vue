<template>
  <div class="column">
    <h1
      class="text-h6 text-weight-900 no-letter-spacing q-mt-xl"
      :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md'"
    >
      محاسبه درصد
    </h1>
    <q-card bordered class="no-shadow q-mb-xl">
      <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-lg'">
        <div class="row items-center">
          <div class="col column">
            <q-item-label
              class="text-grey-7 text-body1 no-letter-spacing q-mb-sm"
            >
              یک عدد صحیح مثبت و یک درصد وارد کنید
            </q-item-label>
            <div class="col row justify-start q-gutter-sm">
              <q-input
                class="text-body1"
                dense
                outlined
                v-model="inputNumber"
                placeholder="عدد"
                :style="$q.screen.gt.sm ? 'width: 200px;' : 'width: 100%;'"
              />
              <q-input
                class="text-body1"
                dense
                outlined
                label= 'درصد'
                v-model="inputPercentage"
                :style="$q.screen.gt.sm ? 'width: 200px;' : 'width: 100%;'"
              />
              <q-btn
                class="text-body1"
                :class="$q.screen.gt.sm ? 'q-ml-sm' : ''"
                unelevated
                color="primary"
                @click="calculatePercentage"
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

const inputNumber = ref("");
const inputPercentage = ref("");
const result = ref("");

const calculatePercentage = () => {
  const number = parseFloat(inputNumber.value);
  const percentage = parseFloat(inputPercentage.value);

  if (
    !isNaN(number) &&
    !isNaN(percentage) &&
    number >= 0 &&
    percentage >= 0 &&
    percentage <= 100
  ) {
    const percentageResult = (number * percentage) / 100;
    result.value = formatResult(percentageResult);
  }
};

const formatResult = (value) => {
  const integerPart = Math.floor(value);
  const decimalPart = value - integerPart;

  if (decimalPart !== 0 && decimalPart.toString().split(".")[1].length !== 0) {
    return value.toFixed(2);
  } else {
    return integerPart.toLocaleString();
  }
};

const formattedResult = computed(() => {
  return result.value ? result.value.toLocaleString() : "";
});
</script>
