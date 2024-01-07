<template>
  <q-page class="q-pb-lg container">
    <multiple-space-remover />
    <description />
  </q-page>
</template>

<script setup>
import MultipleSpaceRemover from 'src/components/multiple-space-remover/desktop/IndexView.vue';
import Description from 'src/components/multiple-space-remover/desktop/DescriptionView.vue';

import { useMeta } from "quasar"

const metaData = {
  title: 'تنبل‌باشی',
  titleTemplate: title => `${title} | حذف فواصل اضافه متن` ,
  meta: {
    description: { name: 'description', content: 'تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره`' },
    keywords: { name: 'keywords', content: 'شمارش تعداد کلمات در متن' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },
};

useMeta(metaData);

</script>
