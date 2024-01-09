<template>
  <div class="hero bg-accent" :class="$q.screen.xs ? 'q-pt-md' : 'q-pt-xl'">
    <div class="container">
      <div class="row justify-between items-center">

        <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
          <q-avatar class="q-mr-sm" size="72px">
            <img :src="`${websiteURL}/sloth.png`" alt="Tanbalbashi logo">
          </q-avatar>
          <span class="text-weight-900 text-dark decoration-on-hover">تنبل‌باشی</span>
        </a>

        <buy-coffee-btn />

      </div>

      <div class="row q-gutter-xl q-mt-lg">

        <div class="col">

          <h1 class="text-h3 no-margin text-weight-900 text-dark line-height-lg">ابزارهای متنی به صورت آنلاین و کاملا
            رایگان</h1>

          <p class="text-dark text-body no-letter-spacing">به دنبال ابزارهای متن آنلاین می‌گردی؟ <span class="text-weight-900">تنبل‌باشی</span> راست کار خودته!</p>

        </div>

        <div class="col row items-center justify-end">
          <img style="width: 90%;" :src="`${websiteURL}/text-tools.svg`" alt="">
        </div>
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
  height: 700px;
}
</style>
