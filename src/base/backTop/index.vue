<template>
  <transition name="mine-backtop">
    <a class="mine-backtop" v-show="visible" @click="backToTop">
      <i class="iconfont icon-backtop"></i>
    </a>
  </transition>
</template>

<script>
  export default {
    name: "MeBacktop",
    props: {
      visible: {
        type: Boolean,
        defaule: false
      }
    },
    methods: {
      // 回到顶部
      backToTop() {
        this.$emit('backtop')
      }
    }
  }
</script>

<style scoped>
  .mine-backtop {
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    background-color: rgba(0, 0, 0, .6);
    border: none;
    border-radius: 50%;
  }

  .iconfont {
    color: #fff;
    font-size: 38px;
  }

  .mine-backtop-enter-active,
  .mine-backtop-leave-active {
    transition: opacity 1s;
  }

  .mine-backtop-leave-to,
  .mine-backtop-enter {
    opacity: 0;
  }
</style>
