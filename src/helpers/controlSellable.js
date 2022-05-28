const controlSellable = (count) => {
  if (count > 0) {
    return true;
  }
  if (count === 0) {
    return false;
  }
};

export default controlSellable;
