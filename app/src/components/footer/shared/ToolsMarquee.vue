<template>
  <div class="flex items-center no-wrap">
    <a href="/tools" class="no-decoration">
    <h3 class="text-h4 text-weight-900 text-dark q-mr-md decoration-on-hover">ابزارها</h3>
    </a>
    <div class="marquee">
      <div class="marquee--inner">
        <span class="q-pl-md">
          <div class="row q-gutter-x-lg no-wrap">
            <a class="text-dark text-body1 no-decoration decoration-on-hover no-letter-spacing" :href="tool.link" v-for="tool in tools"
              :key="tool.name">{{ tool.name }}</a>
          </div>
        </span>
        <span class="q-pl-md">
          <div class="row q-gutter-x-lg no-wrap">
            <a class="text-dark text-body1 no-decoration decoration-on-hover no-letter-spacing" :href="tool.link" v-for="tool in tools"
              :key="tool.name">{{ tool.name }}</a>
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
