<template>
  <div class="home">
    <header class="g-header-container">
      <home-header :class="{'header-transition': isHeaderTransition}" ref="header"></home-header>
    </header>
    <me-scroll
      :data="recommends"
      pullDown
      pullUp
      @pull-down="pullToRefresh"
      @pull-up="pullToLoadMore"
      @scroll-end="scrollEnd"
      @scroll="scroll"
      @pull-down-transition-end="pullDownTransitionEnd"
      ref="scroll"
    >
      <home-slider ref="slider"></home-slider>
      <home-nav></home-nav>
      <home-recommend @loaded="getRecommends" ref="recommend"></home-recommend>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop :visible="isBackTopVisible" @backtop="backToTop"></me-backtop>
    </div>
    <!-- 当路由规则匹配成功以后，就找到了要显示的组件，然后把这个组件，替换到页面指定的路由容器router-view 中 -->
    <router-view></router-view>
  </div>
</template>

<script>
  import HomeHeader from './header'   // 引入头部组件
  import HomeSlider from './slider'   // 引入幻灯片组件
  import MeScroll from 'base/scroll'  // 引入滚动条组件
  import HomeNav from './nav'        // 引入导航栏组件
  import HomeRecommend from './recommend'   // 引入热卖推荐组件
  import MeBacktop from 'base/backTop'  // 引入回到顶部组件

  export default {
    name: 'Home',
    components: {
      HomeHeader, // 头部组件
      HomeSlider, // 幻灯片组件
      MeScroll,   // 滚动条组件
      HomeNav,     // 导航栏组件
      HomeRecommend,  // 热卖推荐组件
      MeBacktop // 回到顶部组件
    },
    data() {
      return {
        recommends: [],
        isBackTopVisible: false, // 是否显示回到顶部图标
        isHeaderTransition: false // 是否开启头部变化效果
      };
    },
    methods: {
      // 接收recommend传过来的数据
      getRecommends(recommends) {
        this.recommends = recommends
      },
      // 下拉更新幻灯片数据
      pullToRefresh(end) {
        this.$refs.slider.update().then(end)
      },
      // 上拉更新热卖推荐
      pullToLoadMore(end) {
        this.$refs.recommend.update().then(end).catch(err => {
          if (err) {
            console.log(err)
          }
          end();
        })
      },
      scroll(translate) {
        this.changeHeaderStaus(translate);
      },
      scrollEnd(translate, swiper, pulling) {
        if (!pulling) {
          this.changeHeaderStaus(translate);
        }
        // 回到顶部图标的显示和隐藏
        this.isBackTopVisible = translate < 0 && -translate > swiper.height;
      },
      // 回到顶部
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      pullDownTransitionEnd() {
        this.$refs.header.show();
      },
      // 改变头部状态
      changeHeaderStaus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return
        }
        this.$refs.header.show();
        this.isHeaderTransition = -translate > 100;
      },
    }
  }
</script>

<style scoped>

  .home {
    background-color: #f5f5f5;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
