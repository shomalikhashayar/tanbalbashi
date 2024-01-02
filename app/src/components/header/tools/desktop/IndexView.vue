<template>
  <q-header unelevated bordered class="q-px-lg bg-white text-dark q-py-xs">
    <div class="header-container">
      <q-toolbar class="row justify-between items-center no-padding">
        <div class="flex link-on-hover" :class="$q.screen.gt.sm ? 'col' : 'col-6'">
          <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
            <q-avatar class="q-mr-sm" size="72px" >
              <img :src="`${websiteURL}/sloth.png`" alt="Tanbalbashi logo">
            </q-avatar>
            <span class="text-weight-900 text-dark">تنبل‌باشی</span>
          </a>
        </div>
        <div class="col">
          <search-box v-if="$q.screen.gt.sm" />
        </div>
        <div class="row justify-end items-center q-gutter-x-sm" :class="$q.screen.gt.sm ? 'col' : 'col-6'">
          <buy-coffee-btn />
          <mobile-search-box v-if="$q.screen.lt.md" />
          <q-btn v-if="$q.screen.lt.md" dense round unelevated @click="toolsDrawerStore.toggle">
            <q-icon name="o_menu" size="32px" />
          </q-btn>
        </div>
      </q-toolbar>
    </div>
  </q-header>
</template>

<script setup>
import SearchBox from "src/components/shared/SearchBox.vue"
import MobileSearchBox from "src/components/shared/mobile/SearchBox.vue"
import BuyCoffeeBtn from "src/components/shared/BuyCoffeeBtn.vue"

import { helper } from 'src/helpers/helpers.js';
import useToolsDrawer from "src/composables/useToolsDrawer"

const toolsDrawerStore = useToolsDrawer()
const websiteURL = helper.websiteURL()

</script>
