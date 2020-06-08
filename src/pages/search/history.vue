<template>
  <div class="history" v-if="historys.length">
    <h4 class="history-title">历史搜索</h4>
    <!--v-for渲染的列表使用动画时推荐使用transition-group,  tag,指定标签-->
    <transition-group name="list" class="g-list" tag="ul">
      <li class="g-list-item"
          v-for="item in historys"
          :key="item"
          @click="$_selectItem(item)"
      >
        <span class="g-list-text">{{item}}</span>
        <i class="iconfont icon-delete" @click.stop="removeItem(item)"></i>
      </li>
    </transition-group>
    <a class="history-btn" @click="showConfirm">
      <i class="iconfont icon-clear"></i>
      清空历史搜索
    </a>
  </div>
</template>

<script>
import {SearchMixins} from 'assets/js/mixins'
import storage from "assets/js/storage";

export default {
  name: "SearchHistory",
  mixins: [SearchMixins],
  data() {
    return {
      historys: []
    };
  },
  created() {
    this.getKeyword();
  },
  methods: {
    // 获取历史搜索数据   从缓存中获取
    getKeyword() {
      this.historys = storage.get('mall-search-history-keyword-key', [])
    },
    // 点击删除历史搜索记录
    removeItem(item) {
      this.historys = this.historys.filter(val => val !== item);
      storage.set('mall-search-history-keyword-key', this.historys);
      this.$emit('remove-item')
    },
    // 点击显示弹框,清空历史搜索
    showConfirm() {
      this.$emit('show-confirm');
    },
    // 清除搜索记录
    clear() {
      storage.remove('mall-search-history-keyword-key');
    },
    // 更新历史搜索记录
    update() {
      this.getKeyword();
    }
  }
}
</script>

<style scoped>
  .history {
    padding-bottom: 30px;
    background-color: #fff;
  }
  .history-title {
    height: 34px;
    line-height: 34px;
    padding: 0 10px;
    font-size: 14px;
    font-weight: bold;
  }
  .g-list {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 20px;
  }
  .history-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 40px;
    background: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin: 0 auto;
    color: #686868;
  }
  .iconfont {
    margin-right: 5px;
    font-size: 18px;
  }
  .list-leave-active,
  .list-enter-active {
    transition: height .1s;
  }
  .list-leave-to,
  .list-enter {
    height: 0;
  }
</style>
