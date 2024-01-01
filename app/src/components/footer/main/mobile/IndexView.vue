<template>
  <q-footer class="bg-accent layout q-py-lg">
    <div class="container">
      <tools-link />
      <q-separator size="1px" color="primary" />
      <rights-reserved />
    </div>
  </q-footer>
</template>

<script setup>
import RightsReserved from "src/components/footer/shared/RightsReserved.vue";
import ToolsLink from "src/components/footer/shared/ToolsLink.vue";
</script>
