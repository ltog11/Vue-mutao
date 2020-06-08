<template>
  <div class="slider-wrapper">
    <me-loading v-if="!sliders.length"></me-loading>
    <me-slider
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      :data="sliders"
      v-if="sliders.length"
    >
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <img :src="item" class="slider-img">
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider' // 引入幻灯片基础组件s
  import MeLoading from 'base/loading'  // 引入loading组件

  export default {
    name: 'ProductSlider',
    components: {
      MeSlider,   // 引入滚动条组件
      MeLoading   // loading组件
    },
    data() {
      return {
        direction: 'horizontal', // 水平滑动
        loop: true, // 无缝滚动
        interval: 3000, // 自动播放
        pagination: true, // 分页器
      };
    },
    props: ['sliders']
  }
</script>

<style scoped>
  .slider-wrapper {
    height: 320px;
    padding-top: 50px;
  }
  .slider-link {
    display: block;
  }
  .slider-link,
  .slider-img {
    width: 100%;
    height: 100%;
  }

</style>
