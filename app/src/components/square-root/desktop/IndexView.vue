<template>
  <div class="column">
    <h1
      class="text-h6 text-weight-900 no-letter-spacing q-mt-xl"
      :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md'"
    >
      محاسبه جذر عدد
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
                :style="$q.screen.gt.sm ? 'width: 400px;' : 'width: 100%;'"
              />
              <q-btn
                class="text-body1"
                :class="$q.screen.gt.sm ? 'q-ml-sm' : ''"
                unelevated
                color="primary"
                @click="calculateSquareRoot"
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
const result = ref("");

const calculateSquareRoot = () => {
  const input = parseFloat(inputValue.value);

  if (!isNaN(input) && input >= 0) {
    const squareRootResult = Math.sqrt(input);
    result.value = squareRootResult;
  }
};

const formattedResult = computed(() => {
  return result.value ? result.value.toLocaleString() : "";
});
</script>
