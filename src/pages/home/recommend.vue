<template>
  <div class="recommend">
    <h3 class="recommend-title">热卖推荐</h3>
    <div class="loading-container" v-if="!recommends.length">
      <me-loading inline></me-loading>
    </div>
    <ul class="recommend-list" v-else>
      <li class="recommend-item" v-for="(item,index) in recommends" :key="index">
        <router-link
          class="recommend-link"
          :to="{name:'home-product',params:{id:item.baseinfo.itemId}}"
        >
          <p class="recommend-pic"><img class="recommend-img" v-lazy="item.baseinfo.picUrlNew"></p>
          <p class="recommend-name">{{item.name.shortName}}</p>
          <p class="recommend-origPrice"><del>￥{{item.price.origPrice}}</del></p>
          <p class="recommend-info">
            <span class="recommend-price">￥<strong></strong>{{item.price.actPrice}}</span>
            <span class="recommend-count">{{item.remind.soldCount}}件已售</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import {getHomeRecommend} from '../../api/home'
  import {getR} from '../../api/home'
  import MeLoading from 'base/loading'  //  引入loading组件

  export default {
    name: 'HomeRecommend',
    data() {
      return {
        recommends: [],
        curPage: 1, // 当前页数
        totalPage: 1,// 总页数
      };
    },
    components: {
      MeLoading // loading组件
    },

    methods: {
      // 供外部用的api
      update() {
        return this.getRecommend();
      },

      // 获取热卖推荐数据
      getRecommend() {
        // 如果当前页数大于总页数
        if (this.curPage > this.totalPage) {
          return Promise.reject(new Error('没有更多了'));
        }
        // 获取热门推荐数据
        return getHomeRecommend(this.curPage).then(data => {
          return new Promise(resolve => {
            if (data) {
              this.curPage++;
              this.totalPage = data.totalPage;
              this.recommends = this.recommends.concat(data.itemList);
              this.$emit('loaded', 'recommends') // 触发父组件自定义事件,将recommends数据传过去
              resolve();
            }
          })
        })
      }
    },
    created() {
      this.getRecommend();
    },
  }
</script>

<style scoped>
  .recommend .recommend-title {
    position: relative;
    width: 100%;
    padding: 10px 0;
    font-size: 14px;
    text-align: center;
  }
  .recommend .recommend-title::before,
  .recommend .recommend-title::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 40%;
    height: 1px;
    background-color: #ddd;
  }
  .recommend .recommend-title::before {
    left: 0;
  }
  .recommend .recommend-title::after {
    right: 0;
  }
  .recommend .recommend-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .recommend .recommend-list .recommend-item {
    width: 49%;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
    margin-bottom: 8px;
  }
  .recommend .recommend-list .recommend-item .recommend-link {
    display: block;
  }
  .recommend .recommend-list .recommend-item .recommend-pic .recommend-img {
    width: 100%;
  }
  .recommend .recommend-list .recommend-item .recommend-name {
    height: 26px;
    padding: 0 5px;
    margin-bottom: 8px;
    line-height: 26px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .recommend .recommend-list .recommend-item .recommend-origPrice {
    padding: 0 5px;
    margin-bottom: 8px;
    color: #ccc;
  }
  .recommend .recommend-list .recommend-item .recommend-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5px;
    margin-bottom: 8px;
  }
  .recommend .recommend-list .recommend-item .recommend-info .recommend-price {
    color: #e61414;
  }
  .recommend .recommend-list .recommend-item .recommend-info .recommend-count {
    color: #999;
  }
  .loading-container {
    padding-top: 100px;
  }
</style>
