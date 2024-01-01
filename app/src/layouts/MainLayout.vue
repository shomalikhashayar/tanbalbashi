<template>
  <q-layout view="hHh Lpr lff">
    <main-desktop-footer v-if="$q.screen.gt.sm" />
    <main-mobile-footer v-if="$q.screen.lt.md" />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import MainDesktopFooter from "src/components/footer/main/desktop/IndexView.vue";
import MainMobileFooter from "src/components/footer/main/mobile/IndexView.vue";
</script>


