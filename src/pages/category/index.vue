<template>
  <div class="category">
    <header class="g-header-container">
      <category-header></category-header>
    </header>
    <div class="g-content-container">
      <div class="slidebar">
        <category-tab @switch-tab="getCurrentId"></category-tab>
      </div>
      <div class="main">
        <category-content :curId="curId"></category-content>
      </div>
    </div>
  </div>
</template>

<script>
  import CategoryHeader from './header' // 引入头部组件
  import CategoryTab from './tab'   // 引入左侧导航栏组件
  import CategoryContent from './content' // 引入右侧内容组件

  export default {
    name: 'Category',
    components: {
      CategoryHeader, // 头部组件
      CategoryTab,  // 左侧导航栏组件
      CategoryContent // 右侧内容组件
    },
    data() {
      return{
        curId: ''
      };
    },
    methods: {
      getCurrentId(id) {
        this.curId = id;
      }
    }
  }

</script>

<style scoped>
  .category {
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
  }

  g-header-container {
    height: 50px;
  }

  .g-content-container {
    display: flex;
    height: 100%;
    padding-top: 50px;
  }

  .slidebar {
    width: 80px;
    height: 100%;
  }

  .main {
    flex: 1;
    height: 100%;
  }
</style>
