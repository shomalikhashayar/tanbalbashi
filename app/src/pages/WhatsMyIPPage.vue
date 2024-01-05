<template>
    <q-page class="q-pb-lg container">
      <whats-my-ip />
    </q-page>
  </template>

  <script setup>
  import WhatsMyIp from "src/components/whatsmyip/desktop/IndexView.vue";
  import { useMeta } from "quasar";

  const metaData = {
    title: "تنبل‌باشی",
    titleTemplate: (title) => `${title} | آی پی من چیه `,
    meta: {
      description: {
        name: "description",
        content: "تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره`",
      },
      keywords: { name: "keywords", content: "آی پی من چیه" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8",
      },
    },
  };

  useMeta(metaData);
  </script>
