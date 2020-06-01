import jsonp from 'assets/js/jsonp'
import axios from "axios";

export const getProductDedail = id => {
  const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
  const params = {
    data: `%7B"itemNumId"%3A"${id}"%7D`,
    api: 'mtop.taobao.detail.getdetail',
    ttid: '2017%40taobao_h5_6.6.0',
    appKey: 12574478,
    dataType: 'jsonp',
    type: 'jsonp',
    v: '6.0'
  };

  return jsonp(url,params,{
    param: 'callback',
  }).then(res => {
    return res.data;
  }).catch(err => {
    if(err) {
      console.log(err);
      return [
        {
          linkUrl: 'http//www.imooc.com',
          picUrl: require('../assets/img/404.png')
        }
      ]
    }
  }).then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res)
      },1000)
    })
  })
}
