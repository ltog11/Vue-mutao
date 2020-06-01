<template>
  <div class="g-tabber">
    <a class="tabber-item g-tabber-item">
      <i class="iconfont icon-shop"></i>
      <span>首页</span>
    </a>
    <a class="tabber-item g-tabber-item">
      <i class="iconfont icon-service"></i>
      <span>客服</span>
    </a>
    <a class="tabber-item g-tabber-item">
      <i class="iconfont icon-collect"></i>
      <span>收藏</span>
    </a>
    <a class="footer-shop  g-tabber-item">加入购物车</a>
    <a class="footer-buy  g-tabber-item">马上抢</a>
  </div>
</template>

<script>
  export default {
    name: "ProductFooter"
  }
</script>

<style scoped>
  .tabber-item {
    flex: none;
    width: 15%;
  }

  .footer-shop {
    background-color: #ff9500;
    color: #fff;
  }

  .footer-buy {
    background-color: #ff0036;
    color: #fff;
  }
</style>
