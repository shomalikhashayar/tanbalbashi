<template>
  <q-drawer :overlay="$q.screen.lt.md" v-model="toolsDrawerStore.state.value" bordered show-if-above :width="$q.screen.lt.md ? 320 : 300"
    :breakpoint="500" unelevated class="tools-drawer bg-white">
    <q-scroll-area class="fit">
      <q-list class="rounded-borders text-dark">
        <div class="row justify-between text-weight-900 text-h6 no-letter-spacing q-py-md q-px-lg" >
          <a href="/tools" class="text-dark no-decoration decoration-on-hover">ابزارها</a>
        <q-btn v-if="$q.screen.lt.md" dense unelevated round icon="o_close" @click="toolsDrawerStore.state.value = false" />
        </div>
        <div v-for="tool in tools" :key="tool.name">
          <q-item clickable v-ripple :to="`/tools/${tool.address}`" class="q-py-md">
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
import { useQuasar } from "quasar"
import { helper } from 'src/helpers/helpers.js';
import useToolsDrawer from "src/composables/useToolsDrawer"

const $q = useQuasar()
const tools = helper.getTools()
const toolsDrawerStore = useToolsDrawer()


</script>
