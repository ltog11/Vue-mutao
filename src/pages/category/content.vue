<template>
  <div class="content-wrapper">
    <div class="loading-wrapper" v-if="isLoading">
      <me-loading></me-loading>
    </div>
    <me-scroll ref="scroll" @scroll-end="scrollEnd">
      <div class="content">
        <div class="pic" v-if="content.banner">
          <a :href="content.banner.linkUrl" class="pic-link">
            <img @load="updateScroll" :src="content.banner.picUrl" class="pic-img">
          </a>
        </div>
        <div class="section" v-for="(section,index) in content.data" :key="index">
          <h4 class="section-title">{{section.name}}</h4>
          <ul class="section-list">
            <li class="section-item" v-for="(item,i) in section.itemList" :key="i">
              <a :href="item.linkUrl" class="section-link">
                <p class="section-pic" v-if="item.picUrl"><img v-lazy="item.picUrl" class="section-img"></p>
                <p class="section-name">{{item.name}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </me-scroll>
    <div class="g-backtop-container">
      <me-backtop @backtop="backTop" :visible="isBacktopVisible"></me-backtop>
    </div>
  </div>
</template>

<script>
import MeBacktop from 'base/backTop'    // 引入回到顶部组件
import MeLoading from 'base/loading'    // 引入loading组件
import MeScroll from 'base/scroll'      // 引入滚动条组件
import {getCategoryContent} from "api/category";
import storage from "assets/js/storage";

export default {
  name: "CategoryContent",
  components: {
    MeBacktop,  // 回到顶部组件
    MeLoading,  // loading组件
    MeScroll    // 滚动条组件
  },
  data() {
    return {
      isLoading: false, // 控制loading组件的显示和隐藏
      isBacktopVisible: false,  // 控制回到顶部图标的显示和隐藏
      content: {}
    };
  },
  props: {
    curId: {
      type: String,
      defaule: ''
    }
  },
  watch: {
    // 检测tab侧边栏id变化,获取内容数据
    curId(id) {
      this.isLoading = true // 获取内容前显示loading
      this.getContent(id).then(() => {
        this.isLoading = false  // 获取内容数据后隐藏loading
        this.backTop();
      })
    }
  },
  methods: {
    // 回到顶部
    backTop() {
      this.$refs.scroll && this.$refs.scroll.scrollToTop();
    },
    // 获取内容数据
    getContent(id) {
      let contents = storage.get('mall-category-content-key'), // 获取存储数据
          updateTime; // 更新时间
      const curTime = new Date().getTime(), // 当前时间
            updataTimeInterval = 1 * 24 * 60 * 60 * 1000; // 24小时

      // 如果缓存数据存在
      if (contents && contents[id]) {
        updateTime = contents[id].updateTime || 0; // 更新时间等于缓存数据的更新时间
        // 如果当前时间减更新时间小于24小时    数据走缓存  localstorage
        if (curTime - updateTime <= updataTimeInterval) {
          return this.getContentByLocalStorage(contents[id])
        } else {  // 否则走Http请求,同时更新缓存数据
          return this.getContentByHttp(id).then(() => {
            this.updateLocalStorage(contents, id, curTime);
          })
        }
      } else {  // 如果数据不存在则完全走Htpp请求,同时更新缓存数据
        return this.getContentByHttp(id).then(() => {
          this.updateLocalStorage(contents, id, curTime);
        })
      }
    },
    // 缓存数据
    getContentByLocalStorage(contents) {
      if (contents) {
        this.content = contents.data;
        return Promise.resolve();
      }
    },
    // Http请求
    getContentByHttp(id) {
      return getCategoryContent(id).then(data => {
        return new Promise(resolve => {
          if (data) {
            this.content = data;
            resolve();
          }
        })
      })
    },
    // 更新缓存数据
    updateLocalStorage(contents, id, curTime) {
      contents = contents || {};
      contents[id] = {};
      contents[id].data = this.content;
      contents[id].updateTime = curTime;
      storage.set('mall-category-content-key', contents)
    },
    // 更新滚动条
    updateScroll() {
      this.$refs.scroll && this.$refs.scroll.update()
    },
    // 控制回到顶部按钮的显示和隐藏
    scrollEnd(translate, swiper) {
      this.isBacktopVisible = translate < 0 && -translate > swiper.height;
    }
  },
}
</script>

<style scoped>
  .content-wrapper {
    position: relative;
    height: 100%;
  }
  .loading-wrapper {
    z-index: 1100;
    width: 50%;
    padding: 30px 0;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 150px;
    left: 25%;
  }
  .content {
    padding: 10px;
  }
  .pic {
    margin-bottom: 12px;
  }
  .pic .pic-link {
    display: block;
  }
  .pic .pic-link .pic-img {
    width: 100%;
  }
  .section {
    margin-bottom: 12px;
  }
  .section .section-title {
    height: 28px;
    line-height: 28px;
    color: #080808;
    font-weight: bold;
  }
  .section .section-list {
    display: flex;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 10px 10px 0;
  }
  .section .section-list .section-item {
    width: 33%;
  }
  .section .section-list .section-item .section-link {
    display: block;
  }
  .section .section-list .section-item .section-link .section-pic {
    position: relative;
    width: 80%;
    padding-bottom: 80%;
    margin: 0 auto;
  }
  .section .section-list .section-item .section-link .section-pic .section-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .section .section-list .section-item .section-link .section-name {
    height: 36px;
    line-height: 36px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .g-backtop-container {
    bottom: 10px;
  }
</style>
