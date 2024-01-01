<template>
  <q-layout view="hHh Lpr lff" class="layout">

    <tools-header />
    <tools-desktop-footer v-if="$q.screen.gt.sm" />
    <tools-mobile-footer v-if="$q.screen.lt.md" />
    <tools-drawer />

    <q-page-container>

      <div class="container" :class="$q.screen.gt.sm ? 'q-mt-xl' : 'q-mt-lg'">
        <bread-crumbs />
      </div>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue"
import ToolsDesktopFooter from "src/components/footer/tools/desktop/IndexView.vue";
import ToolsMobileFooter from "src/components/footer/tools/mobile/IndexView.vue";
import ToolsHeader from "src/components/header/tools/desktop/IndexView.vue"
import ToolsDrawer from "src/components/shared/ToolsDrawer.vue"
import BreadCrumbs from "src/components/shared/BreadCrumbs.vue"
</script>
