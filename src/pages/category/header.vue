<template>
  <me-navbar class="header">
    <div slot="center">
      <me-search-box
        placeholder="开学季有礼,好货5折起"
        fake
        @click.native="goToSearch">
      </me-search-box>
    </div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>

</template>

<script>
  import MeNavbar from 'base/navbar'        // 引入头部组件
  import MeSearchBox from 'base/search-box' // 引入头部搜索框组件

  export default {
    name: "CategoryHeader",
    components: {
      MeNavbar,   // 头部组件
      MeSearchBox // 头部搜索框组件
    },
    methods: {
      getQuery(query) {
        this.$emit('query',query);
      },
      // 点击跳转search页面
      goToSearch() {
        this.$router.push({path:'/search'})
      }
    }
  }
</script>

<style scoped>
  .header.mine-navbar {
    background-color: rgba(222, 24, 27, 0.9);
  }

  .iconfont {
    color: #fff;
    font-size: 24px;
  }
</style>
