<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated bordered class="bg-white text-dark q-py-sm">
      <div class="container">
        <q-toolbar class="row justify-between items-center no-padding">
          <div class="col-3 flex link-on-hover">
            <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
              <q-avatar class="q-mr-sm" size="72px">
                <img src="../../src/assets/icons/sloth.png">
              </q-avatar>
              <span class="text-weight-900 text-dark">تنبل‌باشی</span>
            </a>
          </div>
          <div class="col">
          <search-box/>
          </div>

          <div class="col-2 row justify-end">
            <buy-coffee-btn />
          </div>
        </q-toolbar>
      </div>
    </q-header>

    <q-page-container>

      <div class="container q-py-lg">
        <bread-crumbs />
      </div>

      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>

import BreadCrumbs from "src/components/shared/BreadCrumbs.vue"
import SearchBox from "src/components/shared/SearchBox.vue"
import BuyCoffeeBtn from "src/components/shared/BuyCoffeeBtn.vue"
</script>
