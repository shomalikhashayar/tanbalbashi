<template>
  <div class="row">
    <h2 class="text-h6 text-weight-900 q-mt-none" :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md'">برای مطالعه (حال داشتی بخون)</h2>
    <q-card bordered class="no-shadow full-width">
      <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-lg'">
        <div class="column justify-start">
          <p class="text-body1 no-margin no-letter-spacing">
            فاکتوریل یک عدد، حاصل ضرب تمام اعداد صحیح نزولی مثبت از آن عدد تا عدد یک است. فاکتوریل <span
              class="text-h6 text-bold">n </span>با <span class="text-h6 text-bold">n!</span> نشان داده می شود.
          </p>
          <div class="q-mt-md">
            <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
              به عنوان مثال :
            </p>
            <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
              120 = 1 * 2 * 3 * 4 * 5 = 5!
            </p>
            <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
              3! = 3 * 2 * 1 = 6
            </p>
            <p class="text-body1 no-letter-spacing">
              در اینجا، !۵ به عنوان “۵ فاکتوریل” تلفظ می شود، به آن ۵ ‘bang’ یا ۵ ‘shriek’ نیز می گویند.
            </p>
            <p class="text-body1 no-letter-spacing">
              به طور کلی فاکتوریل عدد طبیعی n به صورت زیر تعریف می‌شود:
            </p>
            <p class="text-body1 text-grey-7 text-weight-600 no-letter-spacing">
              n! = n * ( n – ۱ ) * ( n – ۲ ) * …. * ۲ * ۱
            </p>
            <p class="text-body1 no-letter-spacing">
              فاکتوریل معمولاً در ترکیبات و جایگشت ها در ریاضیات استفاده می شود.
            </p>

          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
