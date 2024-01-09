<template>
  <div class="q-gutter-sm items-center" :class="$q.screen.lt.md ? 'column justify-center' : 'row justify-between' ">
    <div class="row items-center" :class="$q.screen.lt.md ? 'justify-center' : '' ">
      <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
        <q-avatar class="q-mr-sm" size="56px">
          <img :src="`${websiteURL}/sloth.png`" alt="Tanbalbashi logo">
        </q-avatar>
        <span class="text-weight-900 text-dark decoration-on-hover q-mr-sm">تنبل‌باشی</span>
      </a>
      <p class="text-body2 text-dark no-letter-spacing no-margin">
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
