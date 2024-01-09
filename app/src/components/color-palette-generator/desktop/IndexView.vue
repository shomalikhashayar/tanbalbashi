<template>
  <div>
    <q-color @update:model-value="updateColor" v-model="color" />
    <q-slider v-model="hue" :max="360" @update:model-value="updateHue" />
    <q-slider v-model="saturation" :max="100" @update:model-value="updateSaturation" />
    <q-slider v-model="lightness" :max="100" @update:model-value="updateLightness" />
    <q-color-picker v-model="pickedColor" />
    <q-btn color="primary" label="Add Color" @click="addColor" />
    <q-list>
      <q-item v-for="(color, index) in colorPalette" :key="index">
        <q-item-section>
          <div :style="{ backgroundColor: color }" class="color-box"></div>
        </q-item-section>
        <q-item-section>
          {{ color }}
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const color = ref('#ff0000');
const hue = ref(0);
const saturation = ref(100);
const lightness = ref(50);
const pickedColor = ref('#000000');
const colorPalette = ref([]);

const updateColor = (newColor) => {
  color.value = newColor;
  const hsl = rgbToHsl(hexToRgb(newColor));
  hue.value = hsl[0];
  saturation.value = hsl[1];
  lightness.value = hsl[2];
};

const updateHue = (newHue) => {
  hue.value = newHue;
  updateColor(hslToHex([hue.value, saturation.value, lightness.value]));
};

const updateSaturation = (newSaturation) => {
  saturation.value = newSaturation;
  updateColor(hslToHex([hue.value, saturation.value, lightness.value]));
};

const updateLightness = (newLightness) => {
  lightness.value = newLightness;
  updateColor(hslToHex([hue.value, saturation.value, lightness.value]));
};

const addColor = () => {
  colorPalette.value.push(color.value);
};

const rgbToHsl = (rgb) => {
  const r = rgb[0] / 255;
  const g = rgb[1] / 255;
  const b = rgb[2] / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d) + (g < b ? 6 : 0);
        break;
      case g:
        h = ((b - r) / d) + 2;
        break;
      case b:
        h = ((r - g) / d) + 4;
        break;
    }

    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};

const hslToHex = (hsl) => {
  const h = hsl[0] / 360;
  const s = hsl[1] / 100;
  const l = hsl[2] / 100;

  const hueToRgb = (p, q, t) => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hueToRgb(p, q, h + 1 / 3);
  const g = hueToRgb(p, q, h);
  const b = hueToRgb(p, q, h - 1 / 3);

  return `#${Math.round(r * 255).toString(16).padStart(2, '0')}${Math.round(g * 255).toString(16).padStart(2, '0')}${Math.round(b * 255).toString(16).padStart(2, '0')}`;
};

const hexToRgb = (hex) => {
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16)] : null;
};
</script>

<style>
.color-box {
  width: 60px;
  height: 60px;
  border-radius: 4px;
  margin-right: 10px;
}
</style>
