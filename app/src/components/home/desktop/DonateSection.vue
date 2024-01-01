<template>
  <div class="container q-mb-xl">
    <q-card rd class="no-shadow custom-bg q-my-lg">
      <q-card-section :horizontal="$q.screen.gt.sm">
        <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : '' ">
          <buy-coffee />
        </q-card-section>

        <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : '' ">
          <p :class="$q.screen.gt.sm ? '' : 'text-justify' " class="no-margin text-body1 text-dark line-height-sm no-letter-spacing">
            تنبل‌باشی، همه ابزارهای آنلاین را گرد هم می آورد. اگر از نشانک گذاری یک وب سایت برای هر ابزار آنلاین خسته شده
            اید، در جای مناسبی هستید.

            تنبل‌باشی تا حد امکان ساده طراحی شده است تا تمرکز بر عملکرد ابزار را آسان‌تر کند. هدف اصلی ابزارها، انجام
            عملیات به ساده ترین شکل با UI/UX واضح است.

            شروع به استفاده از تنبل‌باشی کنید و همه ابزارهای دیگری را که استفاده می کنید برای همیشه فراموش کنید.
          </p>
          <div class="row q-gutter-md items-center" :class="$q.screen.gt.sm ? 'q-mt-lg' : 'q-mt-md' ">
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
</template>

<script setup>
import BuyCoffee from "src/assets/BuyCoffee.vue";
</script>


<style lang="scss" scoped>
.custom-bg {
  background: linear-gradient(112.9deg, rgb(253, 248, 206) -0.14%, rgb(253, 224, 220) 45.98%, rgb(227, 227, 252) 100.47%);
}
</style>
