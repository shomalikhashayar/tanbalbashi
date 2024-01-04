<template>
  <q-page class="q-pb-lg container">
    <percent />
  </q-page>
</template>

<script setup>
import percent from "src/components/percent/desktop/IndexView.vue";
import { useMeta } from "quasar";

const metaData = {
  title: "تنبل‌باشی",
  titleTemplate: (title) => `${title} | محاسبه درصد `,
  meta: {
    description: {
      name: "description",
      content: "تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره`",
    },
    keywords: { name: "keywords", content: "محاسبه آنلاین درصد" },
    equiv: {
      "http-equiv": "Content-Type",
      content: "text/html; charset=UTF-8",
    },
  },
};

useMeta(metaData);
</script>
