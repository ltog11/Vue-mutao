<template>
  <div id="app" class="g-container">
    <div class="g-view-container">
      <keep-alive>  <!----将组件保存在缓存中--->
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="g-footer-container">
      <c-tabber></c-tabber>
    </div>
  </div>
</template>

<script>
  import CTabber from 'components/tabber'

  export default {
    name: 'App',
    components: {
      CTabber
    }
  }
</script>

<style>
  @import "assets/style/base.css";
</style>
