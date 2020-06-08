<template>
  <transition name="search" appear>
    <div class="search">
      <header class="g-header-container">
        <search-header @query="getQuery"></search-header>
      </header>
      <div class="g-content-container">
        <me-scroll ref="scroll">
          <search-hot v-show="!query" @loaded="updataScroll"></search-hot>
          <search-history
            v-show="!query"
            @show-confirm="showConfirm"
            ref="history"
            @remove-item="updataScroll"
          >
          </search-history>
          <seach-result v-show="query" :query="query"></seach-result>
        </me-scroll>
      </div>
      <me-confirm ref="confirm" @confirm="clearAllSearchHistory"></me-confirm>
    </div>
  </transition>
</template>

<script>
import MeScroll from 'base/scroll'  // 引入滚动条组件
import SearchHeader from './header' // 引入头部组件
import SearchHot from './hot' // 引入热门推荐组件
import SearchHistory from './history' // 引入历史记录组件
import SeachResult from './result'  // 引入输入结果组件
import MeConfirm from 'base/confirm' // 引入弹框组件

export default {
  name: 'Search',
  components: {
    MeScroll, // 滚动条组件
    SearchHeader, // 头部组件
    SearchHot,  // 热门推荐组件
    SearchHistory,  // 历史记录组件
    SeachResult, // 输入结果组件
    MeConfirm   // 弹框组件
  },
  data() {
    return {
      query: ''
    };
  },
  methods: {
    // 获取搜索框输入值
    getQuery(query) {
      this.query = query;
    },
    // 更新滚动条
    updataScroll() {
      this.$refs.scroll.update();
    },

    // 点击清空历史搜索显示弹框
    showConfirm() {
      this.$refs.confirm && this.$refs.confirm.show();
    },
    // 点击确定按钮清除所有历史搜索记录,更新历史搜索记录
    clearAllSearchHistory() {
      this.$refs.history && this.$refs.history.clear();
      this.$refs.history && this.$refs.history.update();
    },
  }
}
</script>

<style scoped>
  .search {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1200;
    background-color: #f5f5f5;
  }
  .search-enter-active,
  .search-leave-active {
    transition: all .3s;
  }
  .search-enter,
  .search-leave-to {
    transform: translate(100%, 0);
  }
</style>
