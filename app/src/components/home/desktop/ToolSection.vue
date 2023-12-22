<template>
  <div class="container">
    <h2 class="text-h4 text-center text-dark q-my-xl text-weight-900">ابزارها</h2>

    <q-carousel animated v-model="slide" control-color="secondary" infinite :autoplay="autoplay"
      transition-prev="slide-right" transition-next="slide-left" @mouseenter="autoplay = false"
      @mouseleave="autoplay = true" style="height: 105px;">
      <q-carousel-slide :name="1" class="flex gap-lg items-center justify-center no-padding">

        <a href="/tools/factorial" class="no-decoration text-dark">
          <q-card to="/tools/factorial" bordered class="no-shadow card-width">
            <q-card-section class="q-py-md row items-center justify-center">

              <h3 class="text-weight-500 text-h6 no-letter-spacing">محاسبه فاکتوریل</h3>

            </q-card-section>
          </q-card>
        </a>

        <a href="/tools/logarithme" class="no-decoration text-dark">
          <q-card to="/tools/factorial" bordered class="no-shadow card-width">
            <q-card-section class="q-py-md row items-center justify-center">

              <h3 class="text-weight-500 text-h6 no-letter-spacing">محاسبه لگاریتم</h3>

            </q-card-section>
          </q-card>
        </a>

        <a href="/tools/square" class="no-decoration text-dark">
          <q-card to="/tools/factorial" bordered class="no-shadow card-width">
            <q-card-section class="q-py-md row items-center justify-center">

              <h3 class="text-weight-500 text-h6 no-letter-spacing">محاسبه جذر</h3>

            </q-card-section>
          </q-card>
        </a>

      </q-carousel-slide>
      <q-carousel-slide :name="2" class="flex gap-lg items-center justify-center no-padding">

        <a href="/tools/factorial" class="no-decoration text-dark">
          <q-card to="/tools/factorial" bordered class="no-shadow card-width">
            <q-card-section class="q-py-md row items-center justify-center">

              <h3 class="text-weight-500 text-h6 no-letter-spacing">تولید متن تصادفی</h3>

            </q-card-section>
          </q-card>
        </a>

        <a href="/tools/logarithme" class="no-decoration text-dark">
          <q-card to="/tools/factorial" bordered class="no-shadow card-width">
            <q-card-section class="q-py-md row items-center justify-center">

              <h3 class="text-weight-500 text-h6 no-letter-spacing">تولید رمز قوی</h3>

            </q-card-section>
          </q-card>
        </a>

        <a href="/tools/square" class="no-decoration text-dark">
          <q-card to="/tools/factorial" bordered class="no-shadow card-width">
            <q-card-section class="q-py-md row items-center justify-center">

              <h3 class="text-weight-500 text-h6 no-letter-spacing">محاسبه درصد</h3>

            </q-card-section>
          </q-card>
        </a>

      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const slide = ref(1)
const autoplay = ref(true)

</script>

<style lang="scss" scoped>
.card-width {

  width: 350px;

}

.gap-lg {
  gap: 24px;
}
</style>
