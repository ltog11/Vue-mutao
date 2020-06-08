const storage = window.localStorage;

export default {
  // 储存数据
  set(key, value) {
    if (value == undefined) {
      return;
    }
    storage.setItem(key, JSON.stringify(value))
  },

  // 取出数据
  get(key, def) {
    const val = deserialize(storage.getItem(key));
    return val === undefined ? def : val;
  },

  // 删除数据,根据键值清除数据
  remove(key) {
    storage.removeItem(key)
  },

  // 清除数据,直接清除数据
  clear() {
    storage.clear()
  }
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined;
  }
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}
