<template>
  <nav class="nav">
    <ul class="nav-list">
      <li class="nav-item" v-for="(item,index) in navs" :key="index">
        <a :href="item.linkUrl" class="nav-link">
          <img :src="item.picUrl" class="nav-pic" />
          <span>{{item.text}}</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'HomeNav',
  data () {
    return {
      navs: [
        { 
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-1.png'),
          text: '团购'
        },
        {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-2.png'),
          text: '一元购'
        },
        {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-3.png'),
          text: '优惠券'
        },
        {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-4.png'),
          text: '教育'
        },
        {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-5.png'),
          text: '出行'
        },
        {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-6.png'),
          text: '在线订餐'
        },
        {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-7.png'),
          text: '庆典'
        },
        {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-8.png'),
          text: '秒杀'
        },
        {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-9.png'),
          text: '拍卖'
        },
        {
          linkUrl: 'https://www.imooc.com',
          picUrl: require('./img/nav-item-10.png'),
          text: '服务'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .nav {
    width: 100%;
    padding-top: 15px;
    background-color: #fff;
  }
  .nav .nav-list {
    display: flex;
    flex-wrap: wrap;  /* 超出折行 */
  }
  .nav .nav-list .nav-item {
    width: 20%;
    margin-bottom: 15px;
  }
  .nav .nav-list .nav-item .nav-link {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .nav .nav-list .nav-item .nav-link .nav-pic {
    width: 60%;
    margin-bottom: 8px;
  }
</style>
