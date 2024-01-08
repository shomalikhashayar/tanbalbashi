<template>
  <q-page>
    <hero-section />
    <tools-category-section />
    <tools-section />
    <donate-section />
  </q-page>
</template>

<script setup>
import HeroSection from "src/components/home/desktop/HeroSection.vue"
import ToolsCategorySection from "src/components/home/desktop/ToolsCategorySection.vue"
import ToolsSection from "src/components/home/desktop/ToolsSection.vue"
import DonateSection from "src/components/home/desktop/DonateSection.vue"

import { useMeta } from "quasar"

const metaData = {
  title: 'تنبل‌باشی',
  titleTemplate: title => `${title} | بهترین جعبه‌ ابزار آنلاین همه کاره`,
  meta: {
    description: { name: 'description', content: 'تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره' },
    keywords: { name: 'keywords', content: 'جعبه ابزار آنلاین' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },
};

useMeta(metaData);
</script>
