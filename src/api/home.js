import axios from 'axios'
import jsonp from 'assets/js/jsonp'

// 打乱图片顺序
const shuffle = (arr) => {
  const arrLength = arr.length;
  let i = arrLength;
  let rndNum;

  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrLength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
    }
  }
  return arr;
};

// 获取幻灯片数据
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: 10000
  }).then(res => {
    if (res.data.code === 0) {
      let sliders = res.data.slider;
      // 随机取一张图片
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]]
      // 打乱数组顺序,随机获取图片
      sliders = shuffle(sliders.filter(() => Math.random() >= 0.5))
      // 如果图片数组长度为0
      if (sliders.length === 0) {
        sliders = slider;
      }
      return sliders
    }

    throw new Error('没有成功获取到数据')
  }).catch(err => {
    if (err) {
      console.log(err)
      return [
        {
          linkUrl: 'http//www.imooc.com',
          picUrl: require('../assets/img/404.png')
        }
      ]
    }
  })
}


// 获取热门推荐数据  -- jsonp

// export const getHomeRecommend = () => {
//   const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
//   const params = {
//     page: 1,
//     psize: 20,
//     type: 0,
//     frontCatId: ''
//   };
//
//   return jsonp(url, params, {
//     param: 'callback',
//   }).then(res => {
//     if (res.code === '200') {
//       return res;
//     }
//
//     throw new Error('没有成功获取到数据')
//   }).catch(err => {
//     if (err) {
//       console.log(err)
//       return [
//         {
//           linkUrl: 'http//www.imooc.com',
//           picUrl: require('../assets/img/404.png')
//         }
//       ]
//     }
//   })
// }

export const getHomeRecommend = (curPage) => {
  return axios.get('/api1',{
    timeout: 1000,
    params: {
      page: curPage,
      psize: 20,
      type: 0,
      frontCatId: ''
    }
  }).then(res => {
    if (res.status === 200) {
      return res.data;
    }
    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err);
    }
  })
}
