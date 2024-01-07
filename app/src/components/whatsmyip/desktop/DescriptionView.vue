<template>
  <div>
    <h2 class="text-h6 text-weight-900 q-mt-none" :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md' ">برای مطالعه (حال داشتی بخون)</h2>
  <q-card bordered class="no-shadow">
    <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-lg'">
      <div class="column justify-start">
        <p class="text-body1 no-margin no-letter-spacing line-height-sm">
          لورم ایپسوم یا متن آزمایشی، متنی است که از قطعاتی از اثری فلسفی و ادبی به نام "دون کیشوت" نوشته فرانسوا رابله
          استخراج شده است. این متن اصطلاحاً برای پر کردن یا نمایش طراحی و چاپ به کار می‌رود و معمولاً برای بررسی ظاهر یک
          طراحی یا چاپ نمونه استفاده می‌شود. معمولاً شامل کلمات یا عبارات لاتین بی‌معنی است که به همین دلیل گاهاً به عنوان
          متن "پرکردنی" شناخته می‌شود.

          از آنجایی که ماهیت استفاده از لورم ایپسوم صرفا ایجاد یک متن فاقد ارزش و آزمایشی است ما یک متن دیگر را جایگزین آن
          کرده‌ایم که زاده ذهن خالق تنبل‌باشی است.
        </p>
        <div class="column justify-center items-center q-gutter-y-sm q-mt-lg">
          <q-btn href="https://github.com/shomalikhashayar" target="blank" round unelevated color="green" class="q-mb-md q-pa-xs">
            <q-avatar size="120px">
            <img :src="`${websiteURL}/khashayar-shomali.jpg`" alt="Khashayar Shomali">
          </q-avatar>
          </q-btn>
          <p class="text-body2 no-letter-spacing text-grey-7 no-margin">خشایار شمالی خالق تنبل‌باشی</p>
        </div>
      </div>
    </q-card-section>
  </q-card>

  <frequently-asked-questions :data="faqData" class="q-mt-xl" />

  </div>
</template>

<script setup>
import { ref } from 'vue';

import { helper } from "src/helpers/helpers";
import FrequentlyAskedQuestions from 'src/components/shared/FAQ.vue';

const websiteURL = helper.websiteURL()

const faqData = ref([
  {
    title: "آی پی چیست؟",
    description: `
    سایت شرکتی، وب‌سایتی است که توسط یک شرکت یا کسب‌وکار ایجاد می‌شود تا اطلاعات مربوط
    به شرکت، محصولات و خدمات آن، تماس با شرکت، اخبار و مقالات مرتبط، و سایر اطلاعات مهم
    را به مخاطبان و مشتریان ارائه دهد. این نوع وب‌سایت معمولاً به عنوان یک وسیله ارتباطی
    اصلی بین شرکت و مشتریانش عمل می‌کند و به شرکت کمک می‌کند تا شناخته‌تر شود و اطلاعات
    بیشتری را در مورد فعالیت‌ها و محصولات خود به اشتراک بگذارد.
  `
  },
  {
    title: "آی پی چیست؟",
    description: `
    سایت شرکتی، وب‌سایتی است که توسط یک شرکت یا کسب‌وکار ایجاد می‌شود تا اطلاعات مربوط
    به شرکت، محصولات و خدمات آن، تماس با شرکت، اخبار و مقالات مرتبط، و سایر اطلاعات مهم
    را به مخاطبان و مشتریان ارائه دهد. این نوع وب‌سایت معمولاً به عنوان یک وسیله ارتباطی
    اصلی بین شرکت و مشتریانش عمل می‌کند و به شرکت کمک می‌کند تا شناخته‌تر شود و اطلاعات
    بیشتری را در مورد فعالیت‌ها و محصولات خود به اشتراک بگذارد.
  `
  },

])

</script>
