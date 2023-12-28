<template>
  <div class="flex items-center no-wrap">
    <h3 class="text-h4 text-weight-900 text-dark q-mr-md">ابزارها</h3>
    <div class="marquee">
      <div class="marquee--inner">
        <span>
          <div class="row q-gutter-x-lg no-wrap">
            <a class="text-dark text-body1 no-decoration no-letter-spacing" :href="tool.link" v-for="tool in tools"
              :key="tool.name">{{ tool.name }}&nbsp;</a>
          </div>
        </span>
        <span>
          <div class="row q-gutter-x-lg no-wrap">
            <a class="text-dark text-body1 no-decoration no-letter-spacing" :href="tool.link" v-for="tool in tools"
              :key="tool.name">{{ tool.name }}&nbsp;</a>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { helper } from 'src/helpers/helpers.js';
const tools = helper.getTools()
</script>

<style lang="scss" scoped>
.marquee {
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}

.marquee--inner {
  color: red;
  display: block;
  width: 200%;
  position: absolute;
  animation: marquee 10s linear infinite;

  &:hover {
    animation-play-state: paused;
  }

  & span {
    float: left;
    width: 50%;
    overflow: hidden;
  }
}

@keyframes marquee {
  0% {
    left: 0;
  }

  100% {
    left: -100%;
  }
}
</style>
