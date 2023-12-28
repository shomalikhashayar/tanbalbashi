<template>
  <q-footer class="layout q-pa-lg">
    <div class="container">
      <tools-marquee />
      <q-separator size="1px" color="primary" />
      <rights-reserved />
    </div>
  </q-footer>
</template>

<script setup>
import ToolsMarquee from "src/components/footer/shared/ToolsMarquee.vue";
import RightsReserved from "src/components/footer/shared/RightsReserved.vue";
</script>
