# Potato Poem

# Objective

## Learning

In this lab, we will be practicing some basic loops and conditional logic within JavaScript; we will also practice creating functions and variables.

Topics:

- [`while` Loops](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
- [`if...else` Conditional Logic](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Variables](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)

## Achieving

In this lab, we will be achieving a piece of software that prints a counting potato poem to the console when the file is run within our command line.

Your work will result in:

- A `while` loop that contains `if...else` logic.

```
1 potato,
2 potato,
3 potato,
4!
5 potato,
6 potato,
7 potato,
More!
```


# Procedure


## Compose the `while (count < 8)` loop

- [ ] Within our`while loop`'s code block, reassign `count` to be `count` incremented by one.
- [ ] Within our`while loop`'s code block, set up an `if` statement whose conditional statement checks if `count` is equal to `8`.
- [ ] Within the `if`'s code block, print "More!" to the console.
- [ ] Attach an `else if` to the end of our `if` block. This `else if` should have a conditional statement that checks if `count` is equal to `4`.
- [ ] Within the `else if` block, print "4!" to the console.
- [ ] Attach an `else` to the end of our `else if` block. 
- [ ] Within the `else` block, log the concatenation of `count` and "potato,".


# Review

In this lab, we have built a piece of software that prints a counting poem to the terminal. The poem should:

- Print "More!" when `count` is `8`and **stop looping**.
- Print "4!" when `count` is `4`.
- Otherwise, print the current value of `count` and "potato,".

## Going Further

To take your software further:

- Extend the poem by changing `while`'s conditional statement to a higher number.
- Add additional logs to print on more numbers.
- Using `potatoPoem` as a reference, create your own counting poem within the same file.
- Create the poem without the `while` loop.
