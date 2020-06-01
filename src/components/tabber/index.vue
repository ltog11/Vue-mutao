<template>
  <div class="g-tabber">
    <router-link class="g-tabber-item" to="/home">
      <i class="iconfont icon-home"></i>
      <span>首页</span>
    </router-link>
    <router-link class="g-tabber-item" to="/category">
      <i class="iconfont icon-category"></i>
      <span>分类</span>
    </router-link>
    <router-link class="g-tabber-item" to="/cart">
      <i class="iconfont icon-cart"></i>
      <span>购物车</span>
    </router-link>
    <router-link class="g-tabber-item" to="/personal">
      <i class="iconfont icon-personal"></i>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'CTabber'
  }
</script>

<style scoped>
  .router-link-active {
    color: #de181b;
  }
</style>
