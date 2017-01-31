# Assignment: Use and declare functions with parameters as function literals and expresions

> What is the purpose of parameters in a function?  Does the name matter?

## Requirements

1. Create a pluck function and export it`export const pluck = // ...`
    1. The first parameter takes an object
    2. the second parameter takes a parameter's name
    3. The last parameter is for an optional default name.
    4. The function should pick the property from the object, or return a default if it's defined.
    ```js
       // Example, plucking the first off of a person object
       const firstName = pluck({ first: 'Tyler', last: 'Garlick' }, 'first', '');
    ```

