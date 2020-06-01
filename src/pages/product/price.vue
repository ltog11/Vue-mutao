<template>
  <div class="price" v-if="apiStack.item">
    <p class="price-info">
      <span class="price-price">￥<strong>{{apiStack.price.price.priceText}}</strong></span>
      <span class="price-count">{{apiStack.item.sellCount}}件已售</span>
    </p>
    <p class="price-title">{{apiStack.item.title}}</p>
    <p class="price-subtitle">
      <span class="price-subtitle-left">快递包邮</span>
      <span class="price-subtitle-center">月销量{{apiStack.item.sellCount}}件</span>
      <span class="price-subtitle-right">广州</span>
    </p>
  </div>
</template>

<script>

  export default {
    name: "ProductPrice",
    props: ['apiStack']
  }
</script>

<style scoped>
  .price {
    background-color: #fff;
  }

  .price-info {
    height: 45px;
    line-height: 45px;
    background-color: #ef356b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
  }

  .price-price {
    font-size: 16px;
    padding-left: 5px;
  }

  .price-count {
    display: block;
    width: 82px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    margin-right: 5px;
    background-color: rgba(204, 46, 65, .4);
    border-radius: 5px;
  }

  .price-title {
    color: #051b28;
    padding: 15px 10px;
    border-bottom: 1px solid #f5f5f5;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .price-subtitle {
    color: #999999;
    font-size: 10px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .price-subtitle .price-subtitle-left {
    padding-left: 10px;
  }

  .price-subtitle .price-subtitle-right {
    padding-right: 10px;
  }
</style>
