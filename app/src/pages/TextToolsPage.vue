<template>
  <q-page>
    <hero-section />
    <tools-section class="q-pb-lg" />
    <light-donate-section />
    <description-section />
  </q-page>
</template>

<script setup>
import HeroSection from "src/components/text-tools/desktop/HeroSection.vue"
import ToolsSection from "src/components/text-tools/desktop/ToolsSection.vue"
import DescriptionSection from "src/components/text-tools/desktop/DescriptionSection.vue"
import LightDonateSection from "src/components/shared/LightDonateSection.vue"

import { useMeta } from "quasar"

const metaData = {
  title: 'تنبل‌باشی',
  titleTemplate: title => `${title} | ابزارهای متنی`,
  meta: {
    description: { name: 'description', content: 'تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره' },
    keywords: { name: 'keywords', content: 'جعبه ابزار آنلاین' },
    equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' },
  },
};

useMeta(metaData);
</script>
