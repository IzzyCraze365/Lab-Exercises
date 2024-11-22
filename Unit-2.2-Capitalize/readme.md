# Capitalize

# Objective

## Learning

In this lab we will be practicing string manipulation, initializing variables and writing functions. We will also learn the utility of `console.log()`

Topics

- [`.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [`.toUpperCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
- [`.toLowerCase()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- `console.log()`

## Achieving

In this lab, we will be achieving a piece of software that takes a word or phrase as an argument and returns a capitalized version of that string.

Your work will result in:

- A function named `capitalize` to handle our capitalize logic.
- Within the `capitalize` function, the `firstLetter`, `restOfWord`, and fullWord variables and the logic to manipulate our string and return its capitalized version.

# Procedure

## Create a `capitalize` function

- [ ] Within the `capitalize` code block, initialize a `firstLetter` variable and assign it the value of our string's first index.
    - ex. For the word "LeTTuCe", firstLetter will be "L"
- [ ] Within the `capitalize` code block, initialize a `restOfWord` variable and assign it the value of the rest of our strings indexes.
    - ex. For the word "LeTTuCe", restOfWord would be "eTTuCe"
    - hint: you will need to use [slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice) to achieve this
- [ ] Within the `capitalize` code block, make the `firstLetter` variable uppercase, make the `restOfWord` variable lowercase
- [ ] Concatenate the resulting strings and assign them to a `fullWord` variable.
- [ ] Print the `fullWord` variable.

## Call the `capitalize` function

- [ ] Below our `capitalize` code block, call `capitalize()` and pass in a word or phrase as an argument that you want to capitalize

# Review

In this lab, we have built a piece of software that takes a string as an argument and returns a capitalized version of that string.

## Going Further

To take your software further:

- Try to chain methods together to reduce the total lines of code

```js
someWord.slice(0, 1).toUpperCase()
```
