<template>
  <q-page>

    <div class="hero bg-accent">
      <div class="container">
        <div class="row justify-between items-center">

          <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
            <q-avatar class="q-mr-md">
              <img src="../../src/assets/icons/black-box.svg">
            </q-avatar>
            <span class="text-weight-900 text-dark">جعبه سیاه</span>
          </a>

          <q-btn unelevated>
            برام یه قهوه بخر
          </q-btn>

        </div>

        <div class="column q-gutter-y-sm q-mt-lg">

          <h1 class="text-weight-900 text-dark text-h4 no-margin">اینجا کلی ابزار هست که میتونه کار تورو راحت بکنه!</h1>
          <p class="text-body1 text-dark no-letter-spacing">بیش از 10,000 نفر به <span>جعبه سیاه </span>اعتماد کرده اند.</p>

        </div>

        <div class="full-width q-mt-lg">
          <q-input placeholder="جستجو برای ابزارها" rounded outlined bg-color="white" color="secondary" class="text-h6">
            <template v-slot:prepend>
            <q-icon v-if="text === ''" name="search" size="md" />
            <q-icon size="md" v-else name="clear" class="cursor-pointer" @click="text = ''" />
          </template>

          </q-input>
        </div>
      </div>
    </div>

  </q-page>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.hero {
  height: 350px;
  padding-top: 42px;
}
</style>
