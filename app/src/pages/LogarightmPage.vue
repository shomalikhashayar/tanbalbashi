<template>
  <q-page class="q-pb-lg container">
    <logarightm />
    <description />
  </q-page>
</template>

<script setup>
import logarightm from "src/components/logarightm/desktop/IndexView.vue";
import Description from 'src/components/logarightm/desktop/DescriptionView.vue';
import { useMeta } from "quasar";

const metaData = {
  title: "تنبل‌باشی",
  titleTemplate: (title) => `${title} | محاسبه لگاریتم `,
  meta: {
    description: {
      name: "description",
      content: "تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره`",
    },
    keywords: { name: "keywords", content: "محاسبه آنلاین لگاریتم" },
    equiv: {
      "http-equiv": "Content-Type",
      content: "text/html; charset=UTF-8",
    },
  },
};

useMeta(metaData);
</script>
