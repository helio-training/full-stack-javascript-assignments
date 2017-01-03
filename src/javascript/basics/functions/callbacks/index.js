export default {
  add(x, y, callback){
    return callback(null, x + y);
  },

  producesError(callback) {
    return callback(new Error('This is my error'));
  },

  addAndMultiply(x, y, callback) {
    const add = x + y;
    const multiply = x * y;

    return callback(null, add, multiply);
  }
}