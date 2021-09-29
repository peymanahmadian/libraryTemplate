const storage={
  setItem : (key, value, time) => {
    if (time) {
      const now = new Date();
      let item = {
        value: value,
        ttl: now.getTime() + time * 1000 * 60 * 60,
      };
      localStorage.setItem(key, JSON.stringify(item));
    } else {
      localStorage.setItem(key, value);
    }
  },
  findItem : (key) => {
    let value= localStorage.getItem(key);
    if (value) {
      const now = new Date();
      value = JSON.parse(value);
      if (now.getTime() < value.ttl) {
        return value.value;
      } else {
        localStorage.removeItem(key);
        return false;
      }
    } else {
      return false;
    }
  },
  deleteItem : (key) => {
    localStorage.removeItem(key);
  }
}
export default storage;
