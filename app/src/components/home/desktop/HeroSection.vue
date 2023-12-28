<template>
  <div class="hero bg-accent">
    <div class="container">
      <div class="row justify-between items-center">

        <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
          <q-avatar class="q-mr-sm" size="72px">
            <img :src="`${websiteURL}/sloth.png`" alt="Tanbalbashi logo">
          </q-avatar>
          <span class="text-weight-900 text-dark">تنبل‌باشی</span>
        </a>

        <buy-coffee-btn />

      </div>

      <div class="column q-gutter-y-sm q-mt-lg">

        <h1 class="text-weight-900 text-dark text-h4 no-margin">اینجا کلی ابزار هست که میتونه کار تورو راحت بکنه!</h1>
        <p class="text-body1 text-dark no-letter-spacing">بیش از 10,000 نفر به <span class="text-weight-900 text-dark">
            تنبل‌باشی </span> اعتماد کرده‌اند.</p>

      </div>

      <div class="q-mt-lg">
        <search-box />
      </div>
    </div>
  </div>
</template>

<script setup>
import SearchBox from "src/components/shared/SearchBox.vue";
import BuyCoffeeBtn from "src/components/shared/BuyCoffeeBtn.vue";
import { helper } from "src/helpers/helpers";

const websiteURL = helper.websiteURL()

</script>


<style lang="scss" scoped>
.hero {
  height: 350px;
  padding-top: 42px;
}
</style>
