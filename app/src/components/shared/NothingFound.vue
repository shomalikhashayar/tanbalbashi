<template>
  <div class="column q-gutter-y-md justify-center items-center" :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-sm' ">
    <div class="text-h6 text-weight-900 text-dark no-letter-spacing">حسش نیست بیخیال</div>
    <img :style="$q.screen.gt.sm ? 'width: 200px;' : 'width: 150px;' " :src="`${websiteURL}/nothing-found.svg`" alt="Tanbalbashi logo">
  </div>
</template>

<script setup>
import { helper } from 'src/helpers/helpers.js';

const websiteURL = helper.websiteURL()

</script>

