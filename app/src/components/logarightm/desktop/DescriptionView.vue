<template>
  <div class="row">
    <h2 class="text-h6 text-weight-900 q-mt-none" :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md'">برای مطالعه (حال داشتی بخون)</h2>
    <q-card bordered class="no-shadow full-width">
      <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-lg'">
  <div class="column justify-start">
    <p class="text-body1 no-margin no-letter-spacing">
      لگاریتم یکی از مفاهیم مهم در ریاضیات است که عملگر لگاریتم با پایه‌ی معینی، نمایانگر توانی است که برای به دست آوردن یک عدد از پایه‌ی دیگر به چه توانی برساند.
      عبارت <span class="text-h6 text-bold">log<sub>b</sub>(x)</span> نشانگر لگاریتم اعداد حقیقی مثبت x با پایه b است.
    </p>
    <div class="q-mt-md">
      <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
        به عنوان مثال:
      </p>
      <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
        <span class="text-h6 text-bold">log<sub>2</sub>(8)</span> برابر است با 3، زیرا 2 به توان 3 برابر با 8 است.
      </p>
      <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
        <span class="text-h6 text-bold">log<sub>10</sub>(100)</span> برابر است با 2، زیرا 10 به توان 2 برابر با 100 است.
      </p>
      <p class="text-body1 q-mt-none q-mb-md no-letter-spacing">
        گاهی لگاریتم بدون پایه(مبنا) نوشته میشود. در این صورت به معنی این است که مبنای آن 10 است. مثلا:
        <span class="text-h6 text-bold">log(100)</span> به معنی لگاریتم 100 با پایه 10 میباشد. که جواب هم میشود 2. زیرا 10 به توان برابر است با 100.
    </p>










        <!-- <div class="column justify-start"> -->
          <h2 class="text-h6 text-weight-900 q-pt-md" :class="$q.screen.gt.sm ? 'q-my-lg' : 'q-my-md'">
            لگاریتم منفی
          </h2>
          <p class="text-body1 no-margin no-letter-spacing">
          شاید تصور کنید نتیجه لگاریتم تنها میتواند به یک عدد مثبت ختم شود. اما این طور نیست. 
          </p>
          <p class="text-body1 q-mt-md no-letter-spacing">
             همان طور که در مقابل عملیات ضرب، عملیات تقسیم وجود دارد;
            در مورد لگاریتم نیز می‌توانیم یک تقسیم داشته باشیم. یک لگاریتم منفی به این معنی است که یک عدد را چند بار باید بر خود تقسیم کنیم تا عدد مورد نظر به دست آید.
          </p>
          <div class="q-mt-md">
            <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
              مثال: لگاریتم زیر را با استفاده از تنبل باشی محاسبه کنید:
            </p>
            <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
              <span class="text-h6 text-bold">log<sub>4</sub>(0.25)</span>
            </p>
            <p class="text-body1 no-letter-spacing">
              می‌دانیم که:
            </p>
            <p class="text-body1 no-letter-spacing">
              1 ÷ 4 = 0.25
            </p>
            <p class="text-body1 no-letter-spacing">
              پس:
            </p>
            <p class="text-body1 no-letter-spacing">
              <span class="text-h6 text-bold">log<sub>4</sub>(0.25)</span> = −1
            </p>
          </div>
          <div class="q-mt-md">
            <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
              یا می توانیم چندین تقسیم داشته باشیم:
            </p>
            <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
              مثال: لگاریتم زیر را محاسبه کنید:
            </p>
            <p class="text-body1 text-weight-600 text-grey-7 no-letter-spacing">
              <span class="text-h6 text-bold">log<sub>5</sub>(0.008)</span>
            </p>
            <p class="text-body1 no-letter-spacing">
              پاسخ:
            </p>
            <p class="text-body1 no-letter-spacing">
              1 ÷ 5 ÷ 5 ÷ 5 = 5<sup>−3</sup>
            </p>
            <p class="text-body1 no-letter-spacing">
              پس:
            </p>
            <p class="text-body1 no-letter-spacing">
              <span class="text-h6 text-bold">log<sub>5</sub>(0.008)</span> = −3
            </p>
            <p class="text-body1 text-red-8 no-letter-spacing">
              نکته: درست است که گفتیم پاسخ لگاریتم گاهی میتواند منفی باشد، اما به این مساله توجه کنید که خود اعداد منفی و عدد صفر دارای لگاریتم نیستند. یعنی عددی که در حال محاسبه لگاریتم آن با هر پایه ای هستید حتما باید یک عدد حقیقی بزرگتر از صفر باشد. 

      </p>
          </div>
        <!-- </div> -->
  




      <p class="text-body1 no-letter-spacing">
        لگاریتم نیز در مسائل مختلفی از جمله محاسبات علمی و تجزیه و تحلیل الگوریتم‌ها به کار می‌رود.
      </p>
    </div>
  </div>
</q-card-section>
    </q-card>
  </div>
</template>
