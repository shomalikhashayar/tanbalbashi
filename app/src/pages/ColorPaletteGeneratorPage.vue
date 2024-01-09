<template>
  <q-page class="q-pb-lg container">
    <color-palette-generator />
    <description />
  </q-page>
</template>

<script setup>
import ColorPaletteGenerator from 'src/components/color-palette-generator/desktop/IndexView.vue';
import Description from 'src/components/color-palette-generator/desktop/DescriptionView.vue';

import { useMeta } from "quasar"

const metaData = {
  title: 'تنبل‌باشی',
  titleTemplate: title => `${title} | تولید متن تصادفی `,
  meta: {
    description: { name: 'description', content: 'تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره`' },
    keywords: { name: 'keywords', content: 'محاسبه آنلاین فاکتوریل' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },
};

useMeta(metaData);

</script>
