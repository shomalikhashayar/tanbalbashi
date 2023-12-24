<template>
  <q-page>
    <hero-section />
    <tool-section />

    <div class="container">
      <q-card class="no-shadow custom-bg q-my-lg">
        <q-card-section horizontal>
          <q-card-section class="q-pa-xl">
            <buy-coffee />
          </q-card-section>

          <q-card-section class="q-pa-xl">
            <p class="no-margin text-body1 text-dark line-height-sm no-letter-spacing">
              تنبل‌باشی همه ابزارهای آنلاین را گرد هم می آورد. اگر از نشانک گذاری یک وب سایت برای هر ابزار آنلاین خسته شده
              اید، در جای مناسبی هستید.

              تنبل‌باشی تا حد امکان ساده طراحی شده است تا تمرکز بر عملکرد ابزار را آسان‌تر کند. هدف اصلی ابزارها انجام
              عملیات به ساده ترین شکل با UI/UX واضح است.

              شروع به استفاده از تنبل‌باشی کنید و همه ابزارهای دیگری را که استفاده می کنید برای همیشه فراموش کنید.
            </p>
            <div class="row q-mt-xl q-gutter-x-md items-center">
              <div class="text-h6 text-weight-700">
                دوست‌داری حمایتمون بکنی؟
              </div>
              <q-btn class="text-body1 no-letter-spacing" text-color="dark" color="yellow">
                یه قهوه مهمونمون کن
              </q-btn>
            </div>
          </q-card-section>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import HeroSection from "src/components/home/desktop/HeroSection.vue"
import ToolSection from "src/components/home/desktop/ToolSection.vue"
import BuyCoffee from "src/assets/BuyCoffee.vue";
</script>

<style lang="scss" scoped>
.custom-bg {
  background: linear-gradient(112.9deg, rgb(253, 248, 206) -0.14%, rgb(253, 224, 220) 45.98%, rgb(227, 227, 252) 100.47%);
}
</style>
