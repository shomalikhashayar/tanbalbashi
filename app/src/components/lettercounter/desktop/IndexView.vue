<template>
  <div class="column q-mt-xl">
    <h1 class="text-h6 text-weight-900 text-dark no-letter-spacing q-mt-none" :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md' ">شمارش تعداد کلمات در متن</h1>
    <q-card bordered class="no-shadow">
      <q-input class="long text-body1" outlined v-model="textInput" @update:model-value="countText" textarea autogrow
        placeholder="متن رو یا بنویس یا کپی کن تو من..." />
    </q-card>
    <div class="row q-gutter-md q-mt-xs q-mb-xl">
      <div class="col">
        <q-card bordered class="no-shadow">
          <q-card-section class="column items-center">
            <span class="text-h6 text-weight-900 text-dark">
              {{ wordCount }}
            </span>

            <span class="text-body1 text-wright-500 text-grey-7 no-letter-spacing">
              کلمه
            </span>

          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card bordered class="no-shadow">
          <q-card-section class="column items-center">
            <span class="text-h6 text-weight-900 text-dark">
              {{ sentenceCount }}
            </span>

            <span class="text-body1 text-wright-500 text-grey-7 no-letter-spacing">
              جمله
            </span>

          </q-card-section>
        </q-card>
      </div>
      <div class="col">
        <q-card bordered class="no-shadow">
          <q-card-section class="column items-center">
            <span class="text-h6 text-weight-900 text-dark">
              {{ letterCount }}
            </span>

            <span class="text-body1 text-wright-500 text-grey-7 no-letter-spacing">
              حرف
            </span>

          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const textInput = ref('');
const wordCount = ref(0);
const sentenceCount = ref(0);
const letterCount = ref(0);

const countText = () => {
  const words = textInput.value.trim().split(/\s+/).filter(word => word.length > 0);
  const sentences = textInput.value.trim().split(/[.!?]+/).filter(sentence => sentence.length > 0);
  const letters = textInput.value.replace(/\s+/g, '').split('');

  wordCount.value = words.length;
  sentenceCount.value = sentences.length;
  letterCount.value = letters.length;
};
</script>
