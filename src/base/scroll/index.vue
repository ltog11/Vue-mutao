<template>
  <swiper :options="swiperOption" ref="swiper">
    <div class="mine-scroll-pull-down" v-if="pullDown">
      <me-loading :text="pullDownText" inline ref="pullDownLoading"></me-loading>
    </div>
    <swiper-slide>
      <slot></slot>
    </swiper-slide>
    <div class="mine-scroll-pull-up" v-if="pullUp">
      <me-loading :text="pullUpText" inline ref="pullUpLoading"></me-loading>
    </div>
    <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
  </swiper>
</template>

<script>
  import MeLoading from "base/loading/index"; // 引入loading组件
  export default {
    name: 'MeScroll',
    components: {
      MeLoading,  // loading组件
    },
    data() {
      return {
        pulling: false, // 标志位
        pullDownText: '再拉,再拉就刷给你看', // 下拉提示文字
        pullUpText: '再拉,再拉就加载给你看', //  上拉提示文字
        swiperOption: {
          direction: 'vertical',  // 垂直滚动
          slidesPerView: 'auto',  // 一页里面看到几张图片
          freeMode: true,         // 自由滚动距离
          setWrapperSize: true,   // 自动计算高度
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true
          },
          on: {
            sliderMove: this.scroll,  // 监听滚动事件
            touchEnd: this.touchEnd,  // 滚动结束
            transitionEnd: this.scrollEnd //  向上滑动监听scrollEnd
          }
        }
      }
    },
    props: {
      // 是否有滚动条
      scrollbar: {
        type: Boolean,
        defaule: true
      },
      // 接收home页传过来的热卖推荐值
      data: {
        type: [Array, Object, String]
      },
      // 是否开启下拉刷新
      pullDown: {
        type: Boolean,
        defaule: false
      },
      // 是否开启上拉刷新
      pullUp: {
        type: Boolean,
        defaule: false
      },
    },
    watch: {
      // 检测home页传过来的热卖推荐数据变化,当变化时更新滚动条
      data() {
        this.update()
      },
    },
    methods: {
      // 更新滚动条
      update() {
        this.$refs.swiper && this.$refs.swiper.swiper.update()
      },

      // 回到顶部
      scrollToTop() {
        this.$refs.swiper && this.$refs.swiper.swiper.slideTo();
      },
      // 滚动事件
      scroll() {
        // 保存swiper组件
        const swiper = this.$refs.swiper.swiper;

        this.$emit('scroll', swiper.translate, this.$refs.swiper.swiper);

        if (this.pulling) {
          return;
        }
        // 下拉
        if (swiper.translate > 0) {
          if (!this.pullDown) {
            return;
          }
          // 如果下拉高度大于100
          if (swiper.translate > 100) {
            this.$refs.pullDownLoading.setText('够了啦，松开人家嘛')
          } else {
            this.$refs.pullDownLoading.setText('再拉,再拉就刷给你看')
          }
        } else if (swiper.isEnd) { // 上拉
          if (!this.pulling) {
            return
          }
          // 当上移高度 + 盒子高度 - 50 > 内容高度时
          const isPullUp = Math.abs(swiper.translate) + swiper.height - 50 > parseInt(swiper.$wrapperEl.css('height'));
          if (isPullUp) {
            this.$refs.pullUpLoading.setText('够了啦，松开人家嘛')
          } else {
            this.$refs.pullUpLoading.setText('再拉，再拉就加载给你看')
          }
        }
      },
      // 滚动结束
      touchEnd() {
        if (this.pulling) {
          return;
        }
        const swiper = this.$refs.swiper.swiper;
        // 下拉结束
        if (swiper.translate > 100) {
          if (!this.pullDown) {
            return;
          }
          this.pulling = true;
          swiper.allowTouchMove = false;// 禁止触摸
          swiper.setTransition(swiper.params.speed);
          swiper.setTranslate(100); // 回到下拉100的位置
          swiper.params.virtualTranslate = true;// 定住不给回弹
          this.$refs.pullDownLoading.setText('刷呀刷呀，好累啊，喵^ω^');
          this.$emit('pull-down', this.pullDownEnd); // 触发父组件自定义事件,将pullDownEnd事件传过去
        } else if (swiper.isEnd) {  // 上拉结束
          const totalHeight = parseInt(swiper.$wrapperEl.css('height')); // 获取内容高度
          const isPullUp = Math.abs(swiper.translate) + swiper.height - 50 > totalHeight

          if (isPullUp) {
            if (!this.pullUp) {
              return;
            }
            this.pulling = true;
            swiper.allowTouchMove = false;// 禁止触摸
            swiper.setTransition(swiper.params.speed);
            swiper.setTranslate(-(totalHeight + 50 - swiper.height));
            swiper.params.virtualTranslate = true;// 定住不给回弹
            this.$refs.pullUpLoading.setText('加呀载呀，好累啊，喵^ω^');
            this.$emit('pull-up', this.pullUpEnd); // 触发父组件自定义事件,将pullUpEnd事件传过去
          }
        }
      },
      // 下拉结束
      pullDownEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.pulling = false;
        this.$refs.pullDownLoading.setText('刷新完了哦');
        swiper.params.virtualTranslate = false; // 可以回弹
        swiper.allowTouchMove = true; // 可以触摸
        swiper.setTransition(swiper.params.speed);
        swiper.setTranslate(0); // 回到0的位置
        setTimeout(() => {
          this.$emit('pull-down-transition-end')
        }, swiper.params.speed)
      },
      // 上拉结束
      pullUpEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.pulling = false;
        this.$refs.pullUpLoading.setText('加载完了哦');
        swiper.params.virtualTranslate = false;
        swiper.allowTouchMove = true;
      },
      // 滚动结束
      scrollEnd() {
        const swiper = this.$refs.swiper.swiper;
        this.$emit('scroll-end', swiper.translate, swiper, this.pulling);
      }
    }
  }
</script>

<style scoped>
  .swiper-container {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    height: auto;
  }
  .mine-scroll-pull-down {
    position: absolute;
    left: 0;
    bottom: 100%;
    width: 100%;
    height: 80px;
  }
  .mine-scroll-pull-up {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    height: 30px;
  }
</style>
