<template>
  <div class="row items-center justify-between q-mt-sm">
    <div class="row items-center">
      <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
        <q-avatar class="q-mr-sm" size="56px">
          <img :src="`${websiteURL}/sloth.png`" alt="Tanbalbashi logo">
        </q-avatar>
        <span class="text-weight-900 text-dark decoration-on-hover">تنبل‌باشی</span>
      </a>
      <p class="text-body2 text-dark no-letter-spacing no-margin q-pl-sm">
        بهترین جعبه ابزار آنلاین همه‌کاره
      </p>
    </div>
    <div class="row text-body1 text-dark no-letter-spacing">
      {{ persianYear }} - تنبل‌باشی
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { helper } from 'src/helpers/helpers.js';

const websiteURL = helper.websiteURL()
const persianYear = helper.getPersianYear();

</script>
