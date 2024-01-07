<template>
  <div class="column">
    <h1 class="text-h6 text-weight-900 no-letter-spacing q-mt-xl" :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md'">
      حذف فواصل اضافه متن
    </h1>
    <q-card bordered class="no-shadow q-mb-xl">
      <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-lg'">
        <div class="column q-gutter-md">
          <q-input class="long" outlined v-model="inputText" type="textarea" autogrow />
          <div class="row q-gutter-sm">
            <q-btn class="text-body1" unelevated color="primary" @click="removeWhitespace">
              حذف فاصله اضافه
            </q-btn>
            <q-btn outline class="text-body1 no-letter-spacing" unelevated color="dark" @click="copyToClipboard"
              :disable="inputText.length === 0">کپی
              متن</q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Notify, useQuasar } from 'quasar';

const inputText = ref('');

const removeWhitespace = () => {
  inputText.value = inputText.value.replace(/\s+/g, ' ');
};

const copyToClipboard = () => {
  navigator.clipboard.writeText(inputText.value)
    .then(() => {
      Notify.create({
        color: 'primary',
        message: 'متن با موفقیت کپی شد',
      });
    })
};

</script>
