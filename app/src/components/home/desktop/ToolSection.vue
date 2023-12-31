<template>
  <div class="container">
    <h2 class="text-h4 text-center text-dark q-my-xl text-weight-900">ابزارها</h2>
    <div class="row q-gutter-lg justify-center q-mb-xl">
      <a href="/tools/factorial" class="no-decoration text-dark">
        <q-card to="/tools/factorial" bordered class="no-shadow card-width">
          <q-card-section class="q-py-md row items-center justify-center">

            <h3 class="text-weight-500 text-h6 no-letter-spacing decoration-on-hover">محاسبه فاکتوریل</h3>

          </q-card-section>
        </q-card>
      </a>

      <a href="/tools/logarithme" class="no-decoration text-dark">
        <q-card to="/tools/factorial" bordered class="no-shadow card-width">
          <q-card-section class="q-py-md row items-center justify-center">

            <h3 class="text-weight-500 text-h6 no-letter-spacing decoration-on-hover">محاسبه لگاریتم</h3>

          </q-card-section>
        </q-card>
      </a>

      <a href="/tools/square" class="no-decoration text-dark">
        <q-card to="/tools/factorial" bordered class="no-shadow card-width">
          <q-card-section class="q-py-md row items-center justify-center">

            <h3 class="text-weight-500 text-h6 no-letter-spacing decoration-on-hover">محاسبه جذر</h3>

          </q-card-section>
        </q-card>
      </a>

      <a href="/tools/loremipsum" class="no-decoration text-dark">
        <q-card to="/tools/factorial" bordered class="no-shadow card-width">
          <q-card-section class="q-py-md row items-center justify-center">

            <h3 class="text-weight-500 text-h6 no-letter-spacing decoration-on-hover">تولید متن تصادفی</h3>

          </q-card-section>
        </q-card>
      </a>

      <a href="/tools/loremipsum" class="no-decoration text-dark">
        <q-card to="/tools/factorial" bordered class="no-shadow card-width">
          <q-card-section class="q-py-md row items-center justify-center">

            <h3 class="text-weight-500 text-h6 no-letter-spacing decoration-on-hover">شمارش کلمات در متن</h3>

          </q-card-section>
        </q-card>
      </a>

      <a href="/tools/logarithme" class="no-decoration text-dark">
        <q-card to="/tools/factorial" bordered class="no-shadow card-width">
          <q-card-section class="q-py-md row items-center justify-center">

            <h3 class="text-weight-500 text-h6 no-letter-spacing decoration-on-hover">تولید رمز قوی</h3>

          </q-card-section>
        </q-card>
      </a>

      <a href="/tools/square" class="no-decoration text-dark">
        <q-card to="/tools/factorial" bordered class="no-shadow card-width">
          <q-card-section class="q-py-md row items-center justify-center">

            <h3 class="text-weight-500 text-h6 no-letter-spacing decoration-on-hover">محاسبه درصد</h3>

          </q-card-section>
        </q-card>
      </a>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="scss" scoped>
.card-width {

  width: 300px;

}

.gap-lg {
  gap: 24px;
}
</style>
