<template>
  <me-navbar class="header" title="" v-show="visible">
    <i class="iconfont icon-scan" slot="left"></i>
    <div slot="center">
      <me-search-box
        placeholder="开学季有礼,好货5折起"
        @query="getQuery"
        fake
        @click.native="goToSearch"
      >
      </me-search-box>
    </div>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar' // 引入头部基础组件
  import MeSearchBox from 'base/search-box' // 引入头部搜索框组件

  export default {
    name: "HomeHeader",
    components: {
      MeNavbar,   // 头部基础组件
      MeSearchBox // 头部搜索框组件
    },
    data() {
      return {
        visible: true
      };
    },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      },
      getQuery(query) {
        console.log(query)
      },
      // 点击跳转搜索页面
      goToSearch() {
        this.$router.push({path: '/search'})
      }
    }
  }
</script>

<style scoped>

  .header.mine-navbar {
    background-color: transparent;
    transition: background-color .5s;
  }

  .header.header-transition {
    background-color: rgba(222, 24, 27, 0.9);
  }

  .iconfont {
    color: #fff;
  }

  .header-transition {
    background-color: rgba(222, 24, 27, 0.9);
  }
</style>
