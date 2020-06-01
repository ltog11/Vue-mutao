import jsonp from 'jsonp'

const parseParam = (param) => {
// {
//     page:1,
//     psize:20
// }
//  page=1&psize=20

  // 声明一个空数组
  let params = [];
  for (const key in param) {
    // 把key值和value值放入params这个数组里
    // 操作完这一步,params是一个二维数组,例如: [[page,1],[psize,20]]
    params.push([key, param[key]])
  }
  // 遍历params,将二维数组,转换为page=18&psize=20这种形式
  return params.map(value => value.join('=')).join('&')
  // [[page,1],[psize,20]]
  // [page=1,psize=20]
  // page=18&psize=20

}

// 封装jsonp
export default (url, data, options) => {
  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data);

  return new Promise((resolve, reject) => {
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(data)
      } else {
        resolve(data)
      }
    });
  })
}
