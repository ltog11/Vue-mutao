<template>
  <div class="cart">
    <header class="g-header-container">
      <me-navbar title="购物车" class="header">
        <i class="iconfont icon-msg" slot="right"></i>
      </me-navbar>
    </header>
    <me-scroll>
      <div class="cart-content"><img src="./cart.png"></div>
    </me-scroll>
  </div>
</template>

<script>
  import MeNavbar from "base/navbar";
  import MeScroll from "base/scroll";

export default {
  name: 'Cart',
  components: {
    MeNavbar,
    MeScroll
  }
};
</script>

<style scoped>
  .cart {
    height: 100%;
  }
  .header {
    border-bottom: 1px solid #f2f2f2;
  }
  .iconfont {
    font-size: 20px;
  }
  .cart-content {
    max-width: 750px;
    overflow: hidden;
    padding-top: 50px;
  }
  .cart-content img {
    width: 100%;
  }
</style>
