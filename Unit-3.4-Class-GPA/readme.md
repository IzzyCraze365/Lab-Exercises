## Class GPA

## Objective

In this lab we will calculate an average GPA score based on multiple grade values within an object.

## Learning

We will practice creating an Object with more complex properties and then utilizing that Object in a function. We will also utilize the `.forEach()` Array method.

Topics:

- Objects with multiple sub-Object properties
- [The `Object.keys()` method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)
- [The `.forEach()` Array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
- Accessing Object properties utilizing bracket notation.

## Achieving

In this lab, we will be creating software that can receive a series of grades as an Object and will return a weighted overall grade.

Your work will result in:

- The `grades` Object; its properties will contain sub-Objects.
- The `gpa` function that receives an Object such as `grades` and produces a weighted GPA. This can be accomplished utilizing the `Object.keys` method and the `forEach` Array method.

## Procedure

### Understanding the `grades` Object

- [ ] On `index.js`, you will find an Object named `grades`.
- [ ] Within `grades`'s code block, are three entries: `midterm`, `project`, and `final`.
- [ ] The value of these entries are sub-Objects that contain two `key: value` pairs: `grade` and `weight` whose values are Numbers that represent a single decimal point grade. The `weight` on `midterm` and `project` is `1` and the `weight` on `final`, `2`.

### Create the `gpa()` function

- [ ] Within `gpa`'s code block, create the variable `gradesToWeight` whose value is the `Object.keys()` method, with `someGrades` passed to it
- [ ] Create two variables whose value is `0`: `gradeSum` and `weightSum`.
- [ ] Call the `forEach` array method on `gradesToWeight`, taking the parameter of `key`.
- [ ] Within the `forEach` code block, we will redefine `gradeSum` with a new equation. To access the correct `key: value` pair, combine `someGrades` with `key`, utilizing bracket notation
- [ ] Utilizing the bracket notation, multiply the `grade` by `weight` values and add back `gradeSum`.
- [ ] Utilizing the same bracket notation, redefine `weightSum` as an equation that adds the `weight` value to `weightSum`.
- [ ] Outside the scope of the `forEach` method but within the scope of the `gpa` function, create the variable `weightedGrade` and have its value be `gradeSum` divided by `weightSum`.
- [ ] `return` `weightedGrades` from the function

### Invoke the `gpa()` Function

- [ ] Beneath the definition of the `gpa` function, invoke it and pass in `grades` as its argument. Print out the result to the console

## Review

In this lab, we created a piece of software that can calculate a weighted GPA based on a set of grades it receives as an Object.

The software should:

- Receive an Object that contains multiple sub-Objects. In this scenario, it is the `grades` Object that has three sub-Objects: `midterm`, `project`, and `final`. These three sub-Objects should have the `key: value` pairs of `grade` and `weight`.
- With this Object, utilize the `Object.keys()` method and the `forEach()` Array method to produce a weighted grade point average.
- This weighted grade point average should print to the console.

## Going Further

- Set the program up to receive all values necessary for the `grades` Object as input to the console. Assign the values to the interior of `grades` as appropriate.