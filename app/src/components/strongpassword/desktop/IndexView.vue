<template>
  <div class="column">
    <h1 class="text-h6 text-weight-900 no-letter-spacing q-mt-xl" :class="$q.screen.gt.sm ? 'q-mb-lg' : 'q-mb-md'">
      تولید رمز قوی
    </h1>
    <q-card bordered class="no-shadow q-mb-xl">
      <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-lg'">
        <div class="row items-center">
          <div class="col">
            <q-item-label class="text-grey-7 text-body1 no-letter-spacing q-mb-sm">
              تنظیمات رمز
            </q-item-label>
            <div class="col row">
              <q-checkbox class="text-body1 no-letter-spacing" v-model="includeNumbers">شامل اعداد</q-checkbox>
              <q-checkbox class="text-body1 no-letter-spacing" v-model="includeLowerCase">شامل حروف کوچک</q-checkbox>
              <q-checkbox class="text-body1 no-letter-spacing" v-model="includeUpperCase">شامل حروف بزرگ</q-checkbox>
              <q-checkbox class="text-body1 no-letter-spacing" v-model="includeSpecialChars">شامل کاراکترهای خاص</q-checkbox>
            </div>
          </div>
        </div>
          <div class="q-my-lg">
            <q-item-label class="text-grey-7 text-body1 no-letter-spacing q-mb-sm">
              طول رمز
            </q-item-label>
            <q-select class="text-body1" dropdown-icon="keyboard_arrow_down" popup-content-class="text-body1" dense :style="$q.screen.gt.sm ? 'width:300px;' : '100%' " v-model="passwordLength" :options="lengthOptions" outlined />
          </div>
        <div class="column q-gutter-y-lg">
          <div>
            <q-item-label class="q-mb-sm text-grey-7 text-body1 no-letter-spacing">
              رمز تولید شده
            </q-item-label>
            <q-input readonly autogrow class="text-body1 full-width" outlined v-model="randomPassword" />
          </div>
          <div class="row q-gutter-x-sm">
            <q-btn class="text-body1 no-letter-spacing" :class="$q.screen.gt.sm ? 'q-ml-sm' : ''" unelevated color="primary"
              @click="generateRandomPassword">تولید رمز</q-btn>
            <q-btn outline class="text-body1 no-letter-spacing" unelevated color="dark" @click="copyPasswordToClipboard"
              :disable="randomPassword.length === 0">کپی رمز</q-btn>
          </div>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Notify, useQuasar } from "quasar";

const includeNumbers = ref(true);
const includeLowerCase = ref(false);
const includeUpperCase = ref(false);
const includeSpecialChars = ref(false);
const passwordLength = ref("طول رمز را انتخاب کنید");
const randomPassword = ref("");

const lengthOptions = [
  { label: "3", value: 3 },
  { label: "6", value: 6 },
  { label: "9", value: 9 },
  { label: "12", value: 12 },
  { label: "24", value: 24 },
  { label: "36", value: 36 },
  { label: "48", value: 48 },
  { label: "64", value: 64 },
];
const generateRandomPassword = () => {
  let charset = "";
  if (includeNumbers.value) charset += "0123456789";
  if (includeLowerCase.value) charset += "abcdefghijklmnopqrstuvwxyz";
  if (includeUpperCase.value) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeSpecialChars.value) charset += "!@#$%^&*()_-+=<>?/{}[]";

  let password = "";
  const length = passwordLength.value.value;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  randomPassword.value = password;
};

const copyPasswordToClipboard = () => {
  navigator.clipboard
    .writeText(randomPassword.value)
    .then(() => {
      Notify.create({
        color: "primary",
        message: "رمز با موفقیت کپی شد",
      });
    })
    .catch((error) => {
      Notify.create({
        color: "primary",
        message: "خطا در کپی رمز به حافظه کلیپ بورد",
      });
    });
};

</script>
