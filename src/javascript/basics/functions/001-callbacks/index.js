export default {
  add(x, y, callback){
    return callback(null, x + y);
  }
}