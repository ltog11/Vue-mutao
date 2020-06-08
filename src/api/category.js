import axios from 'axios'

const CancelToken = axios.CancelToken; // axios.CancelToken取消请求
let cancel; // 接收取消方法

// 获取内容数据
export const getCategoryContent = (id) => {
  cancel && cancel('取消了前一次去请求') // 判断cancel是否有值,有则执行cancel函数
  cancel = null;  // 取消完将cancel值变为null

  return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
    timeout: 10000,
    // 固定写法
    cancelToken: new CancelToken(function executor(c) {
      cancel = c; // 每次请求都会将c赋值给cancel   c是封装好的函数
    })
  }).then(res => {
    if (res.data.code === 0) {
      return res.data.content;
    }
    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (axios.isCancel(err)) {  // 判断是否取消前一次请求
      console.log(err)
    } else {
      // handle error
      console.log(err)
    }
  })
}
