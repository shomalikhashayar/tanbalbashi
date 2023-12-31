<template>
  <q-drawer v-model="drawer" bordered show-if-above :width="300" :breakpoint="500" unelevated class="tools-drawer bg-white">
    <q-scroll-area class="fit">
      <q-list class="rounded-borders text-dark">
        <div class="text-weight-900 text-h6 no-letter-spacing q-py-md q-px-lg">
          <a href="/tools" class="text-dark no-decoration decoration-on-hover">ابزارها</a>
        </div>
        <div v-for="tool in tools" :key="tool.name">
          <q-item clickable v-ripple :to="`/tools/${tool.address}`" class="q-py-md q-pl-lg">
            <q-item-section avatar>
              <q-icon :name="tool.icon" />
            </q-item-section>

            <q-item-section class="text-body1 no-letter-spacing">{{ tool.name }}</q-item-section>
          </q-item>
        </div>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>


<script setup>
import { ref } from "vue"
import { helper } from 'src/helpers/helpers.js';

const tools = helper.getTools()

const drawer = ref(true)


</script>
