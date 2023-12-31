<template>
  <q-page class="q-pb-lg container">
    <letter-counter />
    <description />
  </q-page>
</template>

<script setup>
import LetterCounter from 'src/components/letterCounter/desktop/IndexView.vue';
import Description from 'src/components/letterCounter/desktop/DescriptionView.vue';

import { useMeta } from "quasar"

const metaData = {
  title: 'تنبل‌باشی',
  titleTemplate: title => `${title} | شمارش تعداد کلمات در متن ` ,
  meta: {
    description: { name: 'description', content: 'تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره`' },
    keywords: { name: 'keywords', content: 'شمارش تعداد کلمات در متن' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },
};

useMeta(metaData);

</script>
