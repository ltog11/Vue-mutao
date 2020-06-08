<template>
  <div class="evaluate" v-if="PeopleEvaluates.item">
    <h4 class="evaluate-title">商品评价 ({{PeopleEvaluates.item.commentCount}})</h4>
    <ul class="evaluate-list">
      <li class="evaluate-item" v-for="(item,index) in evaluates" :key="index">
        {{item.word}} ({{item.count}})
      </li>
    </ul>
    <p class="evaluate-people">
      <img :src="PeopleEvaluates.rate.rateList[0].headPic" class="evaluate-people-pic">
      <span class="evaluate-people-name">{{PeopleEvaluates.rate.rateList[0].userName}}</span>
    </p>
    <p class="evaluate-text">{{PeopleEvaluates.rate.rateList[0].content}}</p>
    <p class="evaluate-datatime">{{PeopleEvaluates.rate.rateList[0].dateTime}}</p>
  </div>
</template>

<script>

  export default {
    name: "ProductEvaluate",
    props: ['PeopleEvaluates', 'evaluates']
  }
</script>

<style scoped>
  .evaluate {
    padding-left: 10px;
    padding-top: 2px;
    background-color: #fff;
    margin: 10px 0;
  }
  .evaluate-title {
    height: 34px;
    line-height: 34px;
    font-size: 14px;
  }
  .evaluate-list {
    display: flex;
    flex-wrap: wrap;
  }
  .evaluate-item {
    padding: 8px;
    background-color: #ffeeee;
    border-radius: 4px;
    margin: 0 10px 10px 0;
    color: #686868;
  }
  .evaluate-people {
    margin: 15px 0;
  }
  .evaluate-people-pic {
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
  .evaluate-people-name {
    line-height: 20px;
  }
  .evaluate-text {
    margin-bottom: 15px;
  }
  .evaluate-datatime {
    padding-bottom: 15px;
  }
</style>
