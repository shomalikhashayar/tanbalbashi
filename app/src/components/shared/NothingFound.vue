<template>
  <div class="column q-gutter-y-md justify-center items-center q-pa-xl">
    <div class="text-h6 text-weight-900 text-dark no-letter-spacing">حسش نیست بیخیال</div>
    <img style="width: 200px;" :src="`${websiteURL}/nothing-found.svg`" alt="Tanbalbashi logo">
  </div>
</template>

<script setup>
import { helper } from 'src/helpers/helpers.js';

const websiteURL = helper.websiteURL()

</script>

