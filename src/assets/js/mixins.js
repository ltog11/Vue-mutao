import storage from "assets/js/storage";

export const SearchMixins = {
  methods: {
    $_selectItem(keyword) {
      let keywords = storage.get('mall-search-history-keyword-key', []); // 获取缓存数据
      // 如果缓存存在
      if (keywords.length !== 0) {
        keywords = keywords.filter(val => val !== keyword);
      }
      keywords.unshift(keyword); // 把点击的keyword值添加到数组开头
      storage.set('mall-search-history-keyword-key', keywords); // 把数组数据存进缓存中

      location.href = `https://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1
        &atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&q=${keyword}`;
    }
  }
}
