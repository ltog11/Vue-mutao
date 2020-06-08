<template>
  <div class="personal">
    <header class="g-header-container">
      <me-navbar class="hea" title="我的慕淘">
        <div class="personal-item" slot="right">
          <i class="iconfont icon-setting"></i>
          <i class="iconfont icon-msg"></i>
        </div>
      </me-navbar>
    </header>
    <me-scroll>
      <div class="personal-content"><img src="./personal.png"></div>
    </me-scroll>
  </div>
</template>

<script>
  import MeNavbar from 'base/navbar'
  import MeScroll from 'base/scroll'

  export default {
    name: 'Personal',
    components: {
      MeNavbar,
      MeScroll
    }
  }
</script>

<style scoped>
  div.mine-navbar {
    background-color: #de181b;
  }
  .iconfont {
    color: #fff;
    font-size: 18px;
    padding: 0 2px;
  }
  .personal {
    height: 100%;
  }
  .personal-content {
    max-width: 750px;
    overflow: hidden;
    padding-top: 50px;
  }
  .personal-content img {
    width: 100%;
  }
  /deep/ .mine-navbar-text {
    color: #fff;
  }

</style>
