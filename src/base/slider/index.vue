<template>
  <swiper :options="swiperOption" :key="keyId">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  import {swiper} from 'vue-awesome-swiper';

  export default {
    name: 'MeSlider',
    components: {
      swiper,
    },
    props: {
      // 水平和垂直和滑动
      direction: {
        type: String,
        default: 'horizontal',
        // 验证接收的值
        validator(value) {
          return [
            'horizontal', // 水平滑动
            'vertical'    // 垂直滑动
          ].indexOf(value) > -1;
        }
      },
      // 自动轮播
      interval: {
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      // 无缝滚动
      loop: {
        type: Boolean,
        default: true
      },
      // 分页器
      pagination: {
        type: Boolean,
        default: true
      },
      // 接收slider页传过来的数据
      data: {
        type: Array,
        default: []
      }
    },
    data() {
      return {
        keyId: Math.random(),
        swiperOption: {
          watchOverflow: true,
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false
          } : false,
          slidesPerView: 1, // 设置slider容器能够显示的sliders数量
          loop: this.data.length <= 1 ? false : this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }
        }
      };
    },
    watch: {
      // 更新幻灯片数据
      data(newDate) {
        if (newDate.length === 0) {
          return;
        }
        this.keyId = Math.random();
      }
    }
  }
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }
</style>
