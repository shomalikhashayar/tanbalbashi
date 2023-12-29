<template>
  <q-card bordered class="no-shadow">
    <q-card-section class="q-pa-xl">
      <div class="column justify-start">
        <h2 class="text-h6 text-weight-900 q-mt-none">برای مطالعه (حال داشتی بخون)</h2>
        <p class="text-body1 no-margin no-letter-spacing line-height-sm">
          لورم ایپسوم یا متن آزمایشی، متنی است که از قطعاتی از اثری فلسفی و ادبی به نام "دون کیشوت" نوشته فرانسوا رابله
          استخراج شده است. این متن اصطلاحاً برای پر کردن یا نمایش طراحی و چاپ به کار می‌رود و معمولاً برای بررسی ظاهر یک
          طراحی یا چاپ نمونه استفاده می‌شود. معمولاً شامل کلمات یا عبارات لاتین بی‌معنی است که به همین دلیل گاهاً به عنوان
          متن "پرکردنی" شناخته می‌شود.

          از آنجایی که ماهیت استفاده از لورم ایپسوم صرفا ایجاد یک متن فاقد ارزش و آزمایشی است ما یک متن دیگر را جایگزین آن
          کرده‌ایم که زاده ذهن خالق تنبل‌باشی است.
        </p>
        <div class="column justify-center items-center q-gutter-y-sm q-mt-lg">
          <q-avatar size="120px">
            <img :src="`${websiteURL}/khashayar-shomali.jpg`" alt="Khashayar Shomali">
          </q-avatar>
          <p class="text-caption no-letter-spacing no-margin">خشایار شمالی خالق تنبل‌باشی</p>
        </div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { helper } from "src/helpers/helpers";

const websiteURL = helper.websiteURL()

</script>
