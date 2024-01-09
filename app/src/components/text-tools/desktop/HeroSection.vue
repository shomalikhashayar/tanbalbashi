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

      <div
        :style="$q.screen.gt.xs ? 'padding-top: 64px; padding-bottom: 100px;' : 'padding-top: 24px; padding-bottom: 64px;'"
        class="row" :class="$q.screen.gt.sm ? 'q-col-gutter-xl' : 'q-col-gutter-md q-mt-xs'">

        <div v-if="$q.screen.lt.md" class="col-md col-sm-12 col-xs-12 row items-center"
          :class="$q.screen.gt.sm ? 'justify-end' : 'justify-center q-mb-sm'">
          <img :style="$q.screen.sm ? 'width: 70%;' : 'width: 90%;'" :src="`${websiteURL}/text-tools.svg`" alt="">
        </div>

        <div class="col-md col-sm-12 col-xs-12"
          :class="[$q.screen.gt.sm ? 'text-left' : 'text-center', $q.screen.sm ? 'q-pt-xl' : '']">

          <h1 class="text-h3 no-margin text-weight-900 text-dark line-height-md">ابزارهای متنی به صورت آنلاین و کاملا
            رایگان</h1>

          <p class="q-mt-lg text-dark text-body no-letter-spacing line-height-sm">به دنبال ابزارهای متن آنلاین می‌گردی؟
            <span class="text-weight-900">تنبل‌باشی</span> راست کار خودته!
          </p>
          <p class="text-dark text-body no-letter-spacing line-height-sm">
            ابزارهای متنی ما بهترین‌ها در وب فارسی هستند و همگی به صورت رایگان در دسترس هستند. آیا به دنبال یک ابزار برای
            کمک به تولید، ویرایش، قالب‌بندی، تبدیل، دستکاری متن یا حتی موارد عمومی دیگر هستید؟ ما همه را در اختیار داریم.
          </p>

          <q-btn :href="`/text-tools/#${textTools.replace(/ /g, '-')}`" class="q-mt-md" padding="12px 24px" rounded
            unelevated color="primary">
            <div class="row items-center q-gutter-sm">
              <span class="text-body">مشاهده ابزارهای متنی</span>
              <q-icon name="o_arrow_back" size="sm" />
            </div>
          </q-btn>

        </div>

        <div v-if="$q.screen.gt.sm" class="col-md col-sm-12 col-xs-12 row items-center justify-end">
          <img style="width: 90%;" :src="`${websiteURL}/text-tools.svg`" alt="">
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import BuyCoffeeBtn from "src/components/shared/BuyCoffeeBtn.vue";
import { helper } from "src/helpers/helpers";

const websiteURL = helper.websiteURL()

const textTools = 'ابزارهای متنی'

</script>

