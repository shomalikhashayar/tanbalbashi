<template>
  <div class="container">
    <h2 class="text-h4 text-center text-dark q-my-xl text-weight-900">دسته‌بندی ابزارها</h2>

    <div class="row q-gutter-lg q-mb-xl">
      <div class="card-width" v-for="tool in tools" :key="tool.name">
        <a :href="`/${tool.address}`" class="no-decoration text-dark">
          <q-card bordered class="no-shadow">
            <q-card-section class="q-py-md row items-center justify-center">
              <h3 class="text-weight-700 text-dark text-h6 no-letter-spacing decoration-on-hover">{{ tool.name }}</h3>
            </q-card-section>
          </q-card>
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import { helper } from 'src/helpers/helpers';

const tools = helper.getTools()

</script>

<style lang="scss" scoped>
.card-width {
  width: 31%;
}
</style>
