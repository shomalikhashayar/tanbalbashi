<template>
  <q-page class="q-pb-lg container">
    <factorial />
    <description />
  </q-page>
</template>

<script setup>
import Factorial from 'src/components/factorial/desktop/IndexView.vue';
import Description from 'src/components/factorial/desktop/DescriptionView.vue';

import { useMeta } from "quasar"

const metaData = {
  title: 'تنبل‌باشی',
  titleTemplate: title => `${title} | محاسبه فاکتوریل `,
  meta: {
    description: { name: 'description', content: 'تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره`' },
    keywords: { name: 'keywords', content: 'محاسبه آنلاین فاکتوریل' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },
};

useMeta(metaData);

</script>
