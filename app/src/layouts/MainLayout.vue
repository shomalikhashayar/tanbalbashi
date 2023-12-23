<template>
  <q-layout view="hHh Lpr lff">
    <q-footer class="bg-accent q-pa-lg">
      <div class="container">
        <div class="flex items-center no-wrap">
          <h3 class="text-h4 text-weight-900 text-dark q-mr-md">ابزارها</h3>
          <div class="full-width overflow-hidden" @mouseenter="isPaused = true" @mouseleave="isPaused = false">
            <div class="flex q-gutter-x-lg items-center no-wrap marquee" :class="{ 'paused': isPaused }">
              <a :href="tools.link" v-for="tool in tools" :key="tool.name" class="text-body1 no-letter-spacing text-dark no-decoration">{{ tool.name }}</a>
            </div>
          </div>
        </div>
        <separator />

        <div class="row items-center justify-between">
          <div class="row items-center">
            <a class="text-body1 no-letter-spacing text-secondary no-decoration text-weight-900" href="/">
              <q-avatar class="q-mr-sm" size="56px">
                <img src="../../src/assets/icons/sloth.png">
              </q-avatar>
              <span class="text-weight-900 text-dark">تنبل‌باشی</span>
            </a>
            <p class="text-body2 text-dark no-letter-spacing no-margin q-pl-sm">
              بهترین جعبه ابزار آنلاین همه‌کاره
            </p>
          </div>
          <div class="row text-body1 text-dark no-letter-spacing">
            {{ persianYear }} - تنبل‌باشی
          </div>
        </div>

      </div>
    </q-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from "vue"
import { helper } from 'src/helpers/helpers.js';

const persianYear = helper.getPersianYear();

const isPaused = ref(false);

const tools = [
  {
    name: "محاسبه فاکتوریل",
    link: "/tools/factorial"
  },
  {
    name: "محاسبه لگاریتم",
    link: "/tools/factorial"
  },
  {
    name: "محاسبه جذر",
    link: "/tools/factorial"
  },
  {
    name: "تولید متن تصادفی",
    link: "/tools/factorial"
  },
  {
    name: "تولید رمز قوی",
    link: "/tools/factorial"
  },
  {
    name: "محاسبه درصد",
    link: "/tools/factorial"
  },
]


</script>


<style scoped>

.marquee {
  white-space: nowrap;
  animation: marquee-scroll 20s linear infinite;
}

.marquee.paused {
  animation-play-state: paused;
}

@keyframes marquee-scroll {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.str_move {
    white-space: nowrap;
    position: absolute;
    top: 0;
    left: 0;
    cursor: move
}
</style>
