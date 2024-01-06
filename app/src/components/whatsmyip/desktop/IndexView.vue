<template>
  <div class="column">
    <q-card bordered class="relative-position no-shadow q-mt-xl">
      <q-card-section :class="$q.screen.gt.sm ? 'q-pa-xl' : 'q-pa-lg'">

        <transition appear enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
          <div v-show="dataLoaded" class="column q-gutter-lg">

            <div>
              <q-item-label class="text-body1 text-grey-7 q-mb-sm no-letter-spacing">
                آدرس آی پی شما هست
              </q-item-label>
              <div class="row q-gutter-md items-center text-h1 text-weight-700 text-dark">
                <span>
                  {{ ipInfo.ipAddress }}
                </span>
                <q-btn padding="4px 16px" dense outline unelevated color="pink"
                  class="text-h6 text-weight-700 no-pointer-events">
                  IPV {{ ipInfo.ipVersion }}
                </q-btn>
              </div>
            </div>

            <q-separator />

            <div class="row items-center">
              <div class="col-md col-sm-12 col-xs-12">
                <div>
                  <q-item-label class="text-body1 text-grey-7 q-mb-sm no-letter-spacing">
                    کشور
                  </q-item-label>
                  <div class="text-h4 row items-center q-gutter-sm">
                    <q-icon name="o_location_on" size="sm" color="grey-7" />
                    <span>
                      {{ ipInfo.countryName }}
                    </span>
                  </div>
                </div>

                <q-separator v-if="$q.screen.lt.md" class="q-my-md" />

              </div>
              <div class="col-md col-sm-12 col-xs-12">
                <div>
                  <q-item-label class="text-body1 text-grey-7 q-mb-sm no-letter-spacing">
                    شهر
                  </q-item-label>
                  <div class="text-h4 row items-center q-gutter-sm">
                    <q-icon name="o_apartment" size="sm" color="grey-7" />
                    <span>
                      {{ ipInfo.cityName }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <q-separator />

            <div class="row items-center">
              <div class="col-md col-sm-12 col-xs-12">
                <div>
                  <q-item-label class="text-body1 text-grey-7 q-mb-sm no-letter-spacing">
                    منطقه
                  </q-item-label>
                  <div class="text-h4 row items-center q-gutter-sm">
                    <span class="q-my-none">
                      {{ ipInfo.regionName }}
                    </span>
                  </div>
                </div>

                <q-separator v-if="$q.screen.lt.md" class="q-my-md" />


              </div>


              <div class="col-md col-sm-12 col-xs-12">
                <div>
                  <q-item-label class="text-body1 text-grey-7 q-mb-sm no-letter-spacing">
                    منطقه زمانی
                  </q-item-label>
                  <div class="text-h4 row items-center q-gutter-sm">
                    <q-icon name="o_schedule" size="sm" color="grey-7" />
                    <span>
                      {{ ipInfo.timeZone }}
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </transition>

      </q-card-section>

      <q-inner-loading :showing="!dataLoaded">
        <q-spinner size="50px" color="green" />
      </q-inner-loading>
    </q-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const url = `https://freeipapi.com/api/json`;
const ipInfo = ref('');
const dataLoaded = ref(false); // Track loading state

onMounted(() => {
  fetch(url)
    .then(response => response.json())
    .then(data => {
      ipInfo.value = data;
      dataLoaded.value = true;
    })
});
</script>
