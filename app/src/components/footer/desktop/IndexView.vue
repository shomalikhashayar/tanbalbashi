<template>
  <q-footer class="bg-accent q-pa-lg">
    <div class="container">
      <tools-marquee />
      <q-separator size="1px" color="primary" />
      <rights-reserved />
    </div>
  </q-footer>
</template>

<script setup>
import ToolsMarquee from "src/components/footer/desktop/ToolsMarquee.vue";
import RightsReserved from "src/components/footer/desktop/RightsReserved.vue";
</script>
