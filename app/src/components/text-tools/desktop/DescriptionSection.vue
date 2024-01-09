<template>
  <div class="hero bg-accent" :class="$q.screen.xs ? 'q-pt-md' : 'q-pt-xl'">
    <div class="container">

      <div :style="$q.screen.gt.xs ? 'padding-top: 24px; padding-bottom: 24px;' : 'padding-top: 24px; padding-bottom: 0;'"
        class="row reverse" :class="$q.screen.gt.sm ? 'q-col-gutter-xl' : 'q-col-gutter-md q-mt-xs'">

        <div v-if="$q.screen.lt.md" class="col-md col-sm-12 col-xs-12 row items-center"
          :class="$q.screen.gt.sm ? 'justify-start' : 'justify-center q-mb-lg'">
          <img :style="$q.screen.sm ? 'width: 25%;' : 'width: 40%;'" :src="`${websiteURL}/char.svg`" alt="">
        </div>

        <div class="col-md col-sm-12 col-xs-12" :class="$q.screen.gt.sm ? 'text-left' : 'text-center'">

          <h1 class="text-h3 no-margin text-weight-900 text-dark line-height-md">برترین ابزارهای متنی رایگان</h1>

          <p class="q-mt-lg text-dark text-body no-letter-spacing line-height-sm">
            در اینترنت تعداد زیادی وبسایت هستند که ابزارهای متنی برای مقاصد خاص یا عام ارائه می‌کنند، اما در وب فارسی کمتر
            نظیر آن‌ها را دیده‌ایم همین امر موجب شد تا ما به فکر ایجاد یک وبسایت جامع بیافتیم و ابزارهایی را ارئه دهیم که
            قبل تر در وب فارسی نظیرشان نبود.
          </p>
          <p class="text-dark text-body no-letter-spacing line-height-sm">
            در <span class="text-weight-900">تنبل‌باشی</span>، برای هر نیازی، مطمئناً یک ابزار متنی وجود دارد که می‌تواند
            به شما کمک کند. ما یک بررسی
            مختصر از کاربردهای هر ابزار و نحوه استفاده از آن ارائه داده ایم که می‌تواند در آموزش نحوه استفاده از ابزار به
            شما کمک کند.
          </p>

        </div>

        <div v-if="$q.screen.gt.sm" class="col-md-4 col-sm-12 col-xs-12 row items-center">
          <img style="width: 80%;" :src="`${websiteURL}/char.svg`" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { helper } from "src/helpers/helpers";

const websiteURL = helper.websiteURL()

</script>

