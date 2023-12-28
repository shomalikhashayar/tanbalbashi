<template>
  <q-drawer v-model="drawer" bordered show-if-above :width="280" :breakpoint="500" unelevated class="bg-white">
    <q-scroll-area class="fit">
      <q-list class="rounded-borders text-primary">
        <div class="bg-blue-grey-1 text-bold text-body1 no-letter-spacing q-py-md q-px-lg">
          ابزارها
        </div>
        <div v-for="tool in tools" :key="tool.name">
          <q-item clickable v-ripple class="q-py-md q-pl-lg">
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
