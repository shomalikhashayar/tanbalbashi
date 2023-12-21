<template>
  <q-page class="container flex flex-center">

    <factorial />

    <q-btn @click="multipleAge">
      sayHello
    </q-btn>
  </q-page>
</template>

<script setup>
import Factorial from 'src/components/factorial/desktop/IndexView.vue';

const age = 31

const multipleAge = () => {
  alert(age * 2)
}

</script>
