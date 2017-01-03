# Looping

> What is looping good for? Why would we use a loop? When would we?

## Requirements

1. Create a for loop that starts at 0 and ends at 10.  Each number should be output in the console.
2. In the index.js file paste the following code:
    ```js
      const people = ['Bob', 'Billy', 'Aaron', 'Jimmy', 'Gerald'];
      people.forEach(p => console.log(p));

      for(let p of people) {
        console.log(p);
      }
    ```

    1. Run the code (assuming your in the directory in the terminal) ``` node .```
    2. What happens for each piece of code?
3. In the index.js file paste the following code:
    ```js
    const person = { name: 'Bob', age: 25, isHappy: true };

    for(let p in person) {
      console.log(p);
    }
    ```
    1. What is the difference?
4. In the index.js file paste the following code:
    ```js
    let number = 0;
    while(number < 10) {
      console.log(number);
      number++;
    }
    ```
    1. What did you observe?
    2. What is the difference between a for and a while loop?

## Observations

1. Explain the differences between for, foreach, and for of loops
2. When would you use a while loop?
3. What's the difference between the ```while``` and ```do while``` loop?


## Resources

* (Loops and interations)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration]