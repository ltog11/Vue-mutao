<template>
  <div class="result">
    <div class="loading-container" v-show="isLoading">
      <me-scroll></me-scroll>
    </div>
    <ul class="g-list" v-show="results.length && !isLoading">
      <li class="g-list-item" v-for="(item,index) in results" :key="index" @click="$_selectItem(item[0])">
        <span class="g-list-text">{{item[0]}}</span>
      </li>
    </ul>
    <div class="no-result" v-show="!results.length && !isLoading">没有结果</div>
  </div>
</template>

<script>
  import MeScroll from 'base/loading' // 引入loading组件
  import {getSearchResult} from 'api/search'
  import {SearchMixins} from 'assets/js/mixins'

  export default {
    name: "result",
    components: {
      MeScroll  // loading组件
    },
    mixins: [SearchMixins],
    props: {
      query: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        results: [],
        isLoading: false  // 控制loading图标的显示和隐藏
      };
    },
    watch: {
      // 当输入的值变化时发送jsonp请求
      query(query) {
        this.getResults(query);
      }
    },
    methods: {
      // 获取搜索结果数据
      getResults(query) {
        if (!query) {
          return;
        }
        this.isLoading = true;  // 获取数据前显示loading图标
        getSearchResult(query).then(data => {
          if (data) {
            this.results = data;
            this.isLoading = false; // 获取数据后隐藏loading图标
          }
        })
      }
    }
  }
</script>

<style scoped>
  .result {
    background-color: #fff;
  }
  .loading-container {
    padding: 50px 0;
  }
  .no-result {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
  }
</style>
