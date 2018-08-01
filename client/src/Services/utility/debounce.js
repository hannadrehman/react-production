const debounce = (delay, cb) => {
  let timer = null;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      cb(...args);
      timer = null;
    }, delay);
  };
};

export default debounce;
