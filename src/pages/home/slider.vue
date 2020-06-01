<template>
  <div class="slider-wrapper">
    <me-loading v-if="!sliders.length"></me-loading>
    <me-slider
      :direction="direction"
      :loop="loop"
      :interval="interval"
      :pagination="pagination"
      :data=sliders
      v-else
    >
      <swiper-slide v-for="(item,index) in sliders" :key="index">
        <a :href="item.linkUrl" class="slider-link">
          <img :src="item.picUrl" class="slider-img"/>
        </a>
      </swiper-slide>
    </me-slider>
  </div>
</template>

<script>
  import MeSlider from 'base/slider' // 引入幻灯片基础组件
  import {swiperSlide} from 'vue-awesome-swiper'
  import {getHomeSlider} from 'api/home'
  import MeLoading from 'base/loading'  // 引入loading组件

  export default {
    name: 'HomeSlider',
    components: {
      MeSlider, // 幻灯片基础组件
      swiperSlide,
      MeLoading // loading组件
    },
    data() {
      return {
        direction: 'horizontal', // 水平滑动
        loop: true, // 无缝滚动
        interval: 3000, // 自动播放
        pagination: true, // 分页器
        sliders: [
          // {
          //   linkUrl: 'https://www.imooc.com',
          //   picUrl: require ('./1.jpg')
          // },
          // {
          //   linkUrl: 'https://www.imooc.com',
          //   picUrl: require ('./2.jpg')
          // },
          // {
          //   linkUrl: 'https://www.imooc.com',
          //   picUrl: require ('./3.jpg')
          // },
          // {
          //   linkUrl: 'https://www.imooc.com',
          //   picUrl: require ('./4.jpg')
          // }
        ]
      }
    },
    methods: {
      // 供外部用的api
      update() {
        return this.getSliders()
      },

      getSliders() {
        // 获取幻灯片数据
        return getHomeSlider().then(data => {
          this.sliders = data
        })
      }
    },
    created() {
      this.getSliders()
    }
  }
</script>

<style scoped>
  .slider-wrapper {
    height: 183px;
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
