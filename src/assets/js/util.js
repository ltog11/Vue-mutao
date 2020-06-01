// 函数节流
export const debounce = (func,delay = 200) => {
  let timer = null;

  // return function (...args) {
    return function() {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      // func.apply(this.args)

      // this.$emit('query',this.query).apply(this)
      func.apply(this)
    },delay)
  }
}
