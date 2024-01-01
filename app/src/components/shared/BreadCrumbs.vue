<template>
  <q-breadcrumbs v-if="show" active-color="green" class="text-h6 text-dark no-letter-spacing">

    <q-breadcrumbs-el to="/">
      <div class="row items-center">
        <q-icon name="o_forest" class="q-mr-sm" size="sm" />
        <h3  :class="$q.screen.gt.sm ? 'text-h6' : 'text-body2' " class="no-margin decoration-on-hover">تنبل‌باشی</h3>
      </div>
    </q-breadcrumbs-el>

    <template #separator>
      <q-icon name="arrow_forward_ios" color="dark" />
    </template>

    <q-breadcrumbs-el v-for="item in validItems" :key="item.path" :to="item.path">
      <div class="row items-center">
        <q-icon :name="item.meta.icon" class="q-mr-sm" size="sm" />
        <h3 :class="$q.screen.gt.sm ? 'text-h6' : 'text-body2' " class="no-margin decoration-on-hover">{{ item.name }}</h3>
      </div>
    </q-breadcrumbs-el>

  </q-breadcrumbs>
</template>

<script setup>
import { ref, watch, computed } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const items = ref([])

watch(() => {
  getRoute()
})

function getRoute() {
  items.value = router.currentRoute.value.matched.map((match) => {
    return {
      ...match,
      name: match.name ? match.name : ''
    }
  })
}

const show = computed(() => validItems.value.length > 0)
const validItems = computed(() =>
  items.value.filter((item) => item.name != null && item.name != "")
)
</script>
