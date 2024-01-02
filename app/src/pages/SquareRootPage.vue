<template>
  <q-page class="q-pb-lg container">
    <square-root />
  </q-page>
</template>

<script setup>
import SquareRoot from "src/components/square-root/desktop/IndexView.vue";
import { useMeta } from "quasar"

const metaData = {
  title: 'تنبل‌باشی',
  titleTemplate: title => `${title} | محاسبه جذر عدد `,
  meta: {
    description: { name: 'description', content: 'تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره`' },
    keywords: { name: 'keywords', content: 'محاسبه آنلاین جذر عدد' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },
};

useMeta(metaData);

</script>
