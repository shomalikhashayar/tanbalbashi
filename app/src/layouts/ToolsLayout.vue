<template>
  <q-layout view="hHh Lpr lff" class="layout">

    <tools-header />
    <tools-drawer />
    <tools-footer />

    <q-page-container>

      <div class="container q-pt-xl">
        <bread-crumbs />
      </div>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue"
import ToolsHeader from "src/components/header/tools/desktop/IndexView.vue"
import ToolsDrawer from "src/components/shared/ToolsDrawer.vue"
import ToolsFooter from "src/components/footer/tools/desktop/IndexView.vue"
import BreadCrumbs from "src/components/shared/BreadCrumbs.vue"

</script>
