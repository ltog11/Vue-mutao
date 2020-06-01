<template>
  <div class="hot">
    <h4 class="hot-title">热门推荐</h4>
    <div class="loading-container" v-if="!hots.length">
      <me-loading></me-loading>
    </div>
    <ul class="hot-list">
      <li class="hot-item"
          v-for="(item,index) in hots"
          :key="index"
          @click="$_selectItem(item.hotWord)"
      >
        {{item.hotWord}}
      </li>
    </ul>
  </div>
</template>

<script>
import MeLoading from 'base/loading'  // 引入loading组件
import {getSearchHotKeyword} from 'api/search'
import {SearchMixins} from 'assets/js/mixins'

export default {
  name: "SearchHot",
  components: {
    MeLoading, // loading组件
  },
  mixins: [SearchMixins],
  data() {
    return {
      hots: [],
    }
  },
  created() {
    this.getHotKeyWord().then(() => {
      this.$emit('loaded')
    });
  },
  methods: {
    // 获取热门推荐数据
    getHotKeyWord() {
      return getSearchHotKeyword().then(data => {
        return new Promise(resolve => {
          if (data) {
            this.hots = data;
            resolve();
          }
        })
      })
    },
  }
}
</script>

<style scoped>
  .hot {
    padding-left: 10px;
    background-color: #fff;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 10px;
  }

  .hot .hot-title {
    height: 34px;
    line-height: 34px;
    font-size: 14px;
    font-weight: bold;
  }

  .hot .hot-list {
    display: flex;
    flex-wrap: wrap;
  }

  .hot .hot-list .hot-item {
    padding: 8px;
    background-color: #f0f2f5;
    border-radius: 4px;
    margin: 0 10px 10px 0;
    color: #686868;
  }

  .loading-container {
    padding: 10px 0;
  }
</style>
