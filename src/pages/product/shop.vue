<template>
  <div class="shop" v-if="shop.evaluates">
    <p class="shop-shop">
      <img :src="shop.shopIcon" class="shop-icon">
      <i class="shop-name">{{shop.shopName}}</i>
      <i class="shop-text">天猫</i>
    </p>
    <p class="shop-evaluate">
      <span class="shop-evaluate-left shop-evaluate-fl">
        {{shop.evaluates[0].title}} {{shop.evaluates[0].score}}
      </span>
      <span class="shop-evaluate-center shop-evaluate-fl">
        {{shop.evaluates[1].title}} {{shop.evaluates[1].score}}
      </span>
      <span class="shop-evaluate-right shop-evaluate-fl">
        {{shop.evaluates[2].title}} {{shop.evaluates[2].score}}
      </span>
    </p>
  </div>
</template>

<script>

export default {
  name: "ProductShop",
  props: ['shop']
}
</script>

<style scoped>
  .shop {
    padding-left: 10px;
    padding-top: 10px;
    background-color: #fff;
    margin: 10px 0;
  }

  .shop-shop {
    position: relative;
  }

  .shop-icon {
    width: 40px;
    height: 40px;
  }

  .shop-name {
    padding-left: 3px;
    position: absolute;
    top: 8px;
    left: 45px;
  }

  .shop-text {
    display: inline-block;
    background-color: #ff002d;
    color: #fff;
    width: 30px;
    height: 10px;
    line-height: 10px;
    border-radius: 25px;
    text-align: center;
    font-size: 5px;
    position: absolute;
    bottom: 5px;
    left: 45px;
  }

  .shop-evaluate {
    padding: 20px 0;
    display: flex;
  }

  .shop-evaluate-fl {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
