export default {
  
  add(x, y) {
    return Promise.resolve(x + y);
  },
  
  divide(x, y) {
    return new Promise((resolve, reject) => {
      if (y === 0) return reject(new Error(`Can't divide by 0`));
      return resolve(x / y);
    });
  },
  
  addAndDivide(x, y) {
    return Promise.all([this.add(x, y), this.divide(x, y)]);
  }
};