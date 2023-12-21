<template>
  <q-layout view="lHh Lpr lFf">
    <q-header unelevated bordered class="bg-white text-dark q-py-sm">
      <div class="container">
        <q-toolbar class="row justify-between items-center no-padding">
          <div class="flex link-on-hover">
            <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
              <q-avatar class="q-mr-md">
                <img src="../../src/assets/icons/black-box.svg">
              </q-avatar>
              <span class="text-weight-900 text-dark">آژانس خلاقیت وبیدا</span>
            </a>
          </div>
        </q-toolbar>
      </div>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>

</script>
