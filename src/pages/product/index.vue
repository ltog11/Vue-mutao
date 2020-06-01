<template>
  <transition name="product" appear>
    <div class="product">
      <header class="g-header-container">
        <product-header></product-header>
      </header>
      <me-scroll ref="scroll">
        <product-slider :sliders="sliders"></product-slider>
        <product-price :apiStack="apiStack"></product-price>
        <product-evaluate :evaluates="evaluates" :PeopleEvaluates="PeopleEvaluates"></product-evaluate>
        <product-shop :shop="shop"></product-shop>
      </me-scroll>
      <footer class="g-footer-container">
        <product-footer></product-footer>
      </footer>
    </div>
  </transition>
</template>

<script>
import ProductHeader from './header'  // 引入头部组件
import ProductSlider from './slider'  // 引入幻灯片组件
import ProductPrice from './price'    // 引入价格组件
import ProductShop from './shop'  // 引入店铺组件
import ProductFooter from './footer'  // 引入底部组件
import ProductEvaluate from './evaluate' // 引入评价组件
import MeScroll from 'base/scroll'   // 引入滚动条组件
import {getProductDedail} from 'api/product'

export default {
  name: 'Product',
  components: {
    MeScroll,         // 滚动条组件
    ProductEvaluate, // 评论组件
    ProductFooter,  // 底部组件
    ProductHeader,  // 头部组件
    ProductSlider,  // 幻灯片组件
    ProductPrice,   // 价格组件
    ProductShop,    // 店铺组件
  },
  data() {
    return {
      sliders: [],   // 幻灯片数据
      apiStack: {},  // 价格数据
      evaluates: [], // 评价数据
      PeopleEvaluates: {},  // 评价数据
      shop: {}      // 店铺数据
    };
  },
  created() {
    this.getProducts().then(() => {
      this.$refs.scroll.update();
    })
  },
  methods: {
    // 获取products数据
    getProducts() {
      return getProductDedail(this.$route.params.id).then(data => {
        const apiStack = JSON.parse(data.apiStack[0].value);
        this.sliders = data.item.images;
        this.apiStack = apiStack;
        this.evaluates = data.rate.keywords;
        this.PeopleEvaluates = data;
        this.shop = data.seller;
      });
    }
  }
}

</script>

<style scoped>
  .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1200;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }

  .product-enter-active,
  .product-leave-active {
    transition: all .3s;
  }

  .product-leave-to,
  .product-enter {
    transform: translate(100%, 0);
  }
</style>
