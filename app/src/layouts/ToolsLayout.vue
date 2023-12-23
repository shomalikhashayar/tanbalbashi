<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated bordered class="bg-white text-dark q-py-sm">
      <div class="container">
        <q-toolbar class="row justify-between items-center no-padding">
          <div class="flex link-on-hover">
            <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
              <q-avatar class="q-mr-sm" size="72px">
                <img src="../../src/assets/icons/sloth.png">
              </q-avatar>
              <span class="text-weight-900 text-dark">تنبل‌باشی</span>
            </a>
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

</script>
