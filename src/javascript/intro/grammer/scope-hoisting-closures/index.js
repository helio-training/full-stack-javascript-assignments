export const ssn = value => {

  const sanitize = () => value.replace(/\D+/g, '');

  const format = (value) => `${value.substring(0, 3)}-${value.substring(3, 5)}-${value.substring(5)}`;

  const isValid = () => {
    // Your code goes here....
    //  return ??
  };

  return {

    isValid,

    toString(){

    }
  };
};



// Why does this work?
export const result = calculate(1,2);

function calculate(x, y) {
  return x + y;
}
