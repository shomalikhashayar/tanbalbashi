<template>
  <div>
    <q-btn v-if="$q.screen.gt.sm" unelevated class="text-body2 text-dark">
      برام یه قهوه بخر
    </q-btn>

    <q-btn round v-if="$q.screen.lt.md" unelevated class="text-body2 text-dark">
      <q-icon name="o_local_cafe" size="32px" />
    </q-btn>
    
  </div>
</template>
