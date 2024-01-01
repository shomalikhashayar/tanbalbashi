<template>
  <div class="column">
    <a href="/tools" class="no-decoration">
      <h3 class="text-h4 text-weight-900 text-dark q-mr-md decoration-on-hover q-my-none">ابزارها</h3>
    </a>
    <q-list padding class="text-dark text-body1 no-letter-spacing rounded-borders">
      <q-item class="items-center no-padding q-radius-sm" :to="`/tools/${tool.address}`" v-for="tool in tools" :key="tool.name">
        {{ tool.name }}
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { helper } from 'src/helpers/helpers.js';
const tools = helper.getTools()
</script>
