<template>
  <div class="container">

    <div v-for="tool in tools" :key="tool.name">

      <div class="row justify-between items-center">
        <h2 class="text-h4 text-center text-dark q-my-xl text-weight-900">{{ tool.name }}</h2>
        <q-btn :to="`/tools/${tool.address}`" padding="6px 12px" dense unelevated flat color="dark"
          class="no-letter-spacing text-body1">
          مشاهده همه
          <q-icon name="o_chevron_left" />
        </q-btn>
      </div>

      <div class="row q-gutter-lg q-mb-xl">
        <div class="card-width" v-for="subItem in tool.subItem" :key="subItem.name">
          <a :href="`tools/${subItem.address}`" class="no-decoration text-dark">
            <q-card bordered class="no-shadow">
              <q-card-section>
                <q-icon :name="subItem.icon" size="lg" color="green" />
                <h3 class="text-weight-700 text-subtitle1 no-letter-spacing decoration-on-hover">{{ subItem.name }}</h3>
                <p class="text-subtitle1 text-grey-7 no-letter-spacing">{{ subItem.description }}</p>
                <div class="row items-center justify-end">
                </div>
              </q-card-section>
            </q-card>
          </a>
        </div>
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
