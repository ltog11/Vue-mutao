<template>
  <transition name="mine-confirm">
    <div class="mine-confirm-wrapper" v-show="visible">
      <div class="mine-confirm">
        <div class="mine-confirm-msg">确定要清空吗？</div>
        <div class="mine-confirm-btns">
          <button class="mine-confirm-btn mine-confirm-btn-cancel" @click="cancel">取消</button>
          <button class="mine-confirm-btn mine-confirm-btn-ok" @click="confirm">确定</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "MeConfirm",
    data() {
      return {
        visible: false
      };
    },
    methods: {
      show() {
        this.visible = true
      },
      hide() {
        this.visible = false
      },
      // 点击取消隐藏弹框
      cancel() {
        this.hide();
      },
      confirm() {
        this.hide();
        this.$emit('confirm')
      }
    }
  }
</script>

<style scoped>

  .mine-confirm-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1300;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }

  .mine-confirm {
    overflow: hidden;
    width: 88%;
    background-color: #fff;
    border-radius: 10px;
    font-size: 16px;
  }

  .mine-confirm-msg {
    padding: 40px 15px;
    text-align: center;
    line-height: 1.5;
  }

  .mine-confirm-btns {
    display: flex;
  }

  .mine-confirm-btn {
    flex: 1;
    height: 44px;
    line-height: 44px;
    background: none;
    border: none;
  }

  .mine-confirm-btn-cancel {
    border-top: 1px solid #e3e5e9;
  }

  .mine-confirm-btn-ok {
    background-color: #f23030;
    color: #fff;
  }

  .mine-confirm {
    animation: bounce-in 0.3s;
  }

  .mine-confirm-enter-active,
  .mine-confirm-leave-active {
    transition: opacity 0.3s;
  }

  .mine-confirm-enter,
  .mine-confirm-leave-to {
    opacity: 0;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

</style>
