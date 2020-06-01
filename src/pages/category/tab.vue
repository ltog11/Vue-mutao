<template>
  <me-scroll :scrollbar="false">
    <ul class="tab">
      <li class="tab-item"
          :class="{'tab-item-active': item.id === curId}"
          v-for="(item,index) in items"
          :key="index"
          @click="switchTab(item.id)"
      >
        {{item.name}}
      </li>
    </ul>
  </me-scroll>
</template>

<script>
  import MeScroll from 'base/scroll'  // 引入滚动条组件

  export default {
    name: "CategoryTab",
    components: {
      MeScroll // 滚动条组件
    },
    data() {
      return {
        items: [
          {
            'name': '热门推荐',
            'id': 'WQR2006'
          },
          {
            'name': '慕淘超市',
            'id': 'WQ1968'
          },
          {
            'name': '国际名牌',
            'id': 'WQ1969'
          },
          {
            'name': '奢侈品',
            'id': 'WQ1970'
          },
          {
            'name': '全球购',
            'id': 'WQ1971'
          },
          {
            'name': '男装',
            'id': 'WQ1972'
          },
          {
            'name': '女装',
            'id': 'WQ1973'
          },
          {
            'name': '男鞋',
            'id': 'WQ1974'
          },
          {
            'name': '女鞋',
            'id': 'WQ1975'
          },
          {
            'name': '内衣配饰',
            'id': 'WQ1976'
          },
          {
            'name': '箱包手袋',
            'id': 'WQ1977'
          },
          {
            'name': '美妆个护',
            'id': 'WQ1978'
          },
          {
            'name': '钟表珠宝',
            'id': 'WQ1979'
          },
          {
            'name': '手机数码',
            'id': 'WQ1980'
          },
          {
            'name': '电脑办公',
            'id': 'WQ1981'
          },
          {
            'name': '家用电器',
            'id': 'WQ1982'
          },
          {
            'name': '食品生鲜',
            'id': 'WQ1983'
          },
          {
            'name': '酒水饮料',
            'id': 'WQ1984'
          },
          {
            'name': '母婴童鞋',
            'id': 'WQ1985'
          },
          {
            'name': '玩具乐器',
            'id': 'WQ1986'
          },
          {
            'name': '医药保健',
            'id': 'WQ1987'
          },
          {
            'name': '计生情趣',
            'id': 'WQ1988'
          },
          {
            'name': '运动户外',
            'id': 'WQ1989'
          },
          {
            'name': '汽车用品',
            'id': 'WQ1990'
          },
          {
            'name': '家居厨具',
            'id': 'WQ1991'
          },
          {
            'name': '家具家装',
            'id': 'WQ1992'
          },
          {
            'name': '礼品鲜花',
            'id': 'WQ1993'
          },
          {
            'name': '宠物生活',
            'id': 'WQ1994'
          },
          {
            'name': '生活旅行',
            'id': 'WQ1995'
          },
          {
            'name': '图书音像',
            'id': 'WQ1996'
          },
          {
            'name': '邮币',
            'id': 'WQ1997'
          },
          {
            'name': '农资绿植',
            'id': 'WQ1998'
          },
          {
            'name': '特产馆',
            'id': 'WQ1999'
          },
          {
            'name': '慕淘金融',
            'id': 'WQ2000'
          },
          {
            'name': '拍卖',
            'id': 'WQ2001'
          },
          {
            'name': '房产',
            'id': 'WQ2008'
          },
          {
            'name': '二手商品',
            'id': 'WQ2002'
          }
        ],
        curId: ''
      };
    },
    methods: {
      // 每次点击都将tab侧边栏id赋值给curId
      switchTab(id) {
        if (this.curId === id) {
          return;
        }
        this.curId = id;
        this.$emit('switch-tab', id);  // 触发父组件自定义事件,将id传过去
      }
    },
    created() {
      this.switchTab(this.items[0].id);
    }
  }
</script>

<style scoped>
  .tab {
    width: 100%;
  }

  .tab-item {
    height: 46px;
    line-height: 46px;
    background-color: #fff;
    border-right: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    color: #080808;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis; /*超出显示省略号*/
    white-space: nowrap; /*不换行*/
  }

  .tab-item.tab-item-active {
    color: #f23030;
    background: none;
    border-right: none;
  }
</style>
