<template>
    <q-page class="q-pb-lg container">
      <strong-password />
    </q-page>
  </template>
  
  <script setup>
  import StrongPassword from "src/components/strongpassword/desktop/IndexView.vue";
  import { useMeta } from "quasar";
  
  const metaData = {
    title: "تنبل‌باشی",
    titleTemplate: (title) => `${title} | تولید رمز قوی `,
    meta: {
      description: {
        name: "description",
        content: "تنبل‌باشی بهترین جعبه‌ ابزار آنلاین همه کاره`",
      },
      keywords: { name: "keywords", content: "تولید آنلاین رمز قوی" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8",
      },
    },
  };
  
  useMeta(metaData);
  </script>
  