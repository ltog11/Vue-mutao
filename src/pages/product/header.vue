<template>
  <me-navbar title="商品详情">
    <i class="iconfont icon-back" slot="left" @click="goBack"></i>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
import MeNavbar from 'base/navbar'

export default {
  name: 'ProductHeader',
  components: {
    MeNavbar
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>

<style scoped>
  div.mine-navbar {
    background-color: #de181b;
  }

  /deep/ .mine-navbar-text {
    color: #fff;
  }

  .iconfont {
    color: #fff;
    font-size: 24px;
  }
</style>
