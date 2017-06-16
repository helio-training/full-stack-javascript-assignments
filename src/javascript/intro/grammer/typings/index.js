let Cat = function(name, color){
  this.name = name;
  this.color = color;
}

export default {
  stringObj: null,
  myString: null,
  myNum: null,
  myDecimal: null,
  myFloat: null,
  myFloat2: null,
  myArrowFn: null,
  myObj: null,
  Cat: Cat,
  Fluffy: new Cat('Fluffy', 'white')
};