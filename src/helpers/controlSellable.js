const controlSellable = (count) => {
  if (count > 0) {
    return false;
  }
  if (count === 0) {
    return true;
  }
};

export default controlSellable;
