<template>
  <q-drawer :overlay="$q.screen.lt.md" v-model="toolsDrawerStore.state.value" bordered show-if-above
    :width="$q.screen.lt.md ? 320 : 300" :breakpoint="500" unelevated class="tools-drawer bg-white">
    <q-scroll-area class="fit">
      <q-list class="rounded-borders text-dark">
        <div class="row justify-between text-weight-900 text-h6 no-letter-spacing q-py-md q-px-lg">
          <a href="/tools" class="text-dark no-decoration decoration-on-hover">ابزارها</a>
          <q-btn v-if="$q.screen.lt.md" dense unelevated round icon="o_close"
            @click="toolsDrawerStore.state.value = false" />
        </div>
        <div v-for="(parent, index) in tools" :key="index">
          <q-expansion-item ref="expansion" group="menu" :icon="`o_${parent.icon}`" class="no-focus-helper text-body1">

            <template #header>
              <q-item-section avatar>
                <q-avatar text-color="dark">
                  <q-icon :name="parent.icon" size="28px" />
                </q-avatar>
              </q-item-section>

              <q-item-section class="text-body2 text-weight-600 nol-etter-spacing">
                {{ parent.name }}
              </q-item-section>

            </template>

            <q-item v-for="(subItem, index) in parent.subItem" :key="index" clickable v-ripple
              :to="`/tools/${subItem.address}`">

              <template #default>

               <div class="row items-center q-pl-md">
                <q-item-section avatar>
                  <q-avatar text-color="dark">
                    <q-icon :name="subItem.icon" size="20px" />
                  </q-avatar>
                </q-item-section>

                <q-item-section class="text-body2 no-letter-spacing">
                  {{ subItem.name }}
                </q-item-section>
               </div>

              </template>
            </q-item>

          </q-expansion-item>
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
