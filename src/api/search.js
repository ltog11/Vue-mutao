import axios from 'axios'
import jsonp from "assets/js/jsonp";

// 获取热门搜索数据
export const getSearchHotKeyword = () => {
  return axios.get('https://www.imooc.com/api/search/hot', {
    timeout: 10000
  }).then(res => {
    res = res.data.hotKeyWord
    if (res && res.owner) {
      return res.owner
    }
    throw new Error('没有成功获取到数据！');
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      }, 1000)
    })
  })
}


// 获取搜索结果数据
export const getSearchResult = (query) => {
  const url = 'https://suggest.taobao.com/sug';
  const params = {
    q: query,
    code: 'utf-8',
    area: 'c2c',
    nick: '',
    sid: null,
  };

  return jsonp(url,params,{
    param: 'callback',
  }).then(res => {
    if (res.result) {
      return res.result;
    }
    throw new Error('没有成功获取到数据！')
  }).catch(err => {
    if (err) {
      console.log(err)
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res);
      },1000)
    })
  })
}
