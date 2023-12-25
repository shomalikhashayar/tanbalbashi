<template>
  <q-layout view="hHh Lpr lff">
    <main-footer />
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import MainFooter from "src/components/footer/desktop/IndexView.vue";
</script>


