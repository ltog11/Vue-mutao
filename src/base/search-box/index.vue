<template>
  <div class="mine-search-box-wrapper">
    <i class="iconfont icon-search"></i>
    <div class="mine-search-box" v-if="fake">{{placeholder}}</div>
    <input class="mine-search-box"
           type="input"
           title="搜索框"
           :placeholder="placeholder"
           v-model="query"
           ref="input"
           v-if="!fake">
    <i class="iconfont icon-close" v-show="query" @click="reset"></i>
  </div>
</template>

<script>
  export default {
    name: "MeSearchBox",
    data() {
      return {
        query: '',  // 双向绑定input value值
        timer: null
      };
    },
    watch: {
      // 监听query的值变化,触发父组件自定义事件,将query传过去
      query() {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
          this.$emit('query', this.query);
        },200);
      }
    },
    props: {
      placeholder: {
        type: String,
        defaule: '请输入搜索内容'
      },
      fake: {
        type: Boolean,
        defaule: false
      }
    },
    methods: {
      // 点击×号图标,清空value值,获取input焦点
      reset() {
        this.query = '';
        this.$refs.input && this.$refs.input.focus();
      }
    }
  }
</script>

<style scoped>
  .mine-search-box-wrapper {
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    padding: 0 7px;
    background-color: #fff;
    border-radius: 15px;
  }
  .iconfont {
    font-weight: bold;
    color: #ccc;
    font-size: 18px;
    padding-top: 5px;
  }
  .mine-search-box {
    flex: 1;
    background: none;
    border: none;
    margin: 0 6px;
    color: #666;
    line-height: 1.5;
  }
</style>
