<template>
  <me-navbar class="header">
    <i class="iconfont icon-back" slot="left" @click="goBack"></i>
    <me-search-box
      placeholder="开学季有礼,好货5折起"
      slot="center"
      @query="query"
    >
    </me-search-box>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar'  // 引入头部基础组件
  import MeSearchBox from 'base/search-box' // 引入搜索框组件

  export default {
    name: "SearchHeader",
    components: {
      MeNavbar, // 头部基础组件
      MeSearchBox // 搜索框组件
    },
    methods: {
      query(query) {
        this.$emit('query',query);
      },
      // 点击返回
      goBack() {
        this.$router.back();
      }
    }
  }
</script>

<style scoped>
  .header {
    border-bottom: 1px solid #e5e5e5;
  }
  .iconfont {
    color: #ccc;
    font-size: 24px;
  }
  div.mine-search-box-wrapper {
    background-color: #f7f7f7;
  }
</style>
