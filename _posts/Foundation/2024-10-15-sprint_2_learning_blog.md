---
layout: post
title: Sprint 2 Learning Blog
description: Personal blog about things I learned from the lessons in Sprint 2
type: issues
comments: True
---

# What I learned

## 3.1: Variables

*Taught by: Ahaan Vaidyanathan, Spencer Lyons, Vasanth Rajasekaran, Xavier Thompson*

**Python Variables**

How to define (Syntax):

```python
number_variable = 100
string_variable = "string"
```

Python variables tend to use **snake casing** as their naming covention.

**Javascript Variables**

How to define (Syntax):

```javascript
const willNotChange = 100
let canChange = 20
canChange = "I am a string now!"
// willNotChange = "abc"
// This does not work because willNotChange is defined with const
```

Javascript variables tend to use **camel casing** as their naming convention.

## 3.2: Data Abstraction (Data Types & JSON)

*Taught by: Gabriela, Jowan, Michelle*

**Data Types**

Integers (Whole Numbers)

```python
a = 10
b = 1
c = 22
```

These can NOT have decimals!

Floating-Point Numbers (Decimal Numbers)

```python
a = 1.5
b = 3.14
c = 0.99
```

Strings (Words)

```python
a = "Hello World!"
b = "123"
c = 'tiny quotes'
```

Lists

```python
cool_list = [1, 2, 3]
```

Tuples

```python
cool_tuple = (1, 2, 3)
```

Dictionaries

```python
cool_dict = {"key": "value"}
```

Sets

```python
cool_set = {1, 2, 3}
```

Booleans

```python
is_cool = True
is_not_cool = False
```
None

```python
nothing = None
```

**JSON**

JSON is a way to represent data in a format that is easy to read and write. It stands for JavaScript Object Notation.

```json
{
  "name": "Trevor",
  "age": 17,
  "is_cool": true
}
```

## 3.3: Mathematical Expressions

*Taught by: **Myself**, Wyatt Z, Max G, Johan M, Luke S*

**Basic Mathematical Expressions**

Addition

```python
a = 10
b = 5
c = a + b
print(c) # 15
```

Subtraction

```python
a = 10
b = 5
c = a - b
print(c) # 5
```

Multiplication

```python
a = 10
b = 5
c = a * b
print(c) # 50
```

Division

```python
a = 10
b = 5
c = a / b
print(c) # 2
```

Exponentiation

```python
a = 10
b = 5
c = a ** b
print(c) # 100000
```

Modulo

```python
a = 10
b = 5
c = a % b
print(c) # 0
```

**More Mathematical Expressions**

Absolute Value

```python
a = -10
c = abs(a)
print(c) # 10
```

Square Root

```python
a = 4
b = a ** 0.5
print(b) # 2
```

## 3.4: Strings

*Taught by: Ahaan Vaidyanathan, Spencer Lyons, Vasanth Rajasekaran, Xavier Thompson*

**Strings**

Strings can be used to represent text.

```python
text = "Hello World!"
print(text) # Hello World!
```

Strings: are immutable, can be indexed, and can be concatenated.

```python
a = "Hello World!"
b = "Hello"
c = a + b
print(c) # Hello World! Hello
```

```python
a = "Hello World!"
c = a[0]
print(c) # H
```

Strings have some built-in methods that can be used to manipulate them.

```python
a = "Hello World!"
b = a.upper()
print(b) # HELLO WORLD!
```

## 3.5: Booleans

*Taught by: **Myself**, Wyatt Z, Max G, Johan M, Luke S*

Booleans are a type of data that can only have two values: True or False.

```python
is_cool = True
is_boring = False
```

Booleans can be used in conditional statements.

```python
is_cool = True

if is_cool:
    print("I am cool!")
else:
    print("I am not cool.")
```

De Morgan's Law

```python
if not(a || b):
    print("a AND b are both false")
if not a && not b:
    print("a AND b are both false (SAME AS ABOVE)")
```

```python
if not(a && b):
    print("a OR b are false")
if not a || not b:
    print("a OR b are false (SAME AS ABOVE)")
```

## 3.6: Conditional Statements

*Taught by: Zoe, Avika, Rutvik, Jonah, Aarush*

Conditional statements are used to make decisions in a program (used to execute code only if certain conditions are true).

PYTHON EXAMPLE:

```python
is_cool = True

if is_cool:
    print("I am cool!")
else:
    print("I am not cool.")

# Output: I am cool!
```

JAVASCRIPT EXAMPLE:

```javascript
const isCool = true;

if (isCool) {
    console.log("I am cool!");
} else {
    console.log("I am not cool.");
}
```

The if statement will have a boolean condition. If the condition is true, the code inside the if block will be executed. If the condition is false, the code inside the else block will be executed.

## 3.7: Nested Conditional Statements

*Taught by: Zoe, Avika, Rutvik, Jonah, Aarush*

Nested conditional statements are useful when you need to check multiple conditions before performing an action. They allow you to create complex logic flows.

PYTHON EXAMPLE:

```python
is_cool = True
is_fast = False

if is_cool:
    if is_fast:
        print("I am fast and cool.")
    else:
        print("I am cool!")
else:
    print("I am not cool.")
```

JAVASCRIPT EXAMPLE:

```javascript
const isCool = true;
const isFast = false;

if (isCool) {
    if (isFast) {
        console.log("I am fast and cool.");
    } else {
        console.log("I am cool!");
    }
} else {
    console.log("I am not cool.");
}
```

## 3.8: Recursion Iteration and Nested For Loops

*Taught by: Armaghan, Hithin, Elliot, Nikhil*

Recursion is a programming technique where a function calls itself. It is useful when you need to solve a problem that can be broken down into smaller subproblems.

PYTHON EXAMPLE:

```python
def factorial(n):
    if n == 0: # Base case
        return 1
    else:
        return n * factorial(n-1) # Recursive call

print(factorial(5)) # 120
```

JAVASCRIPT EXAMPLE:

```javascript
function factorial(n) {
    if (n == 0) { // Base case
        return 1;
    } else {
        return n * factorial(n-1); // Recursive call
    }
}

console.log(factorial(5)); # 120
```

Nested for loops are used to iterate through multiple collections of data. They are useful when you need to perform the same action on each item in a collection.

PYTHON EXAMPLE:

```python
groups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

for group in groups:
    for number in group:
        print(number)
```

JAVASCRIPT EXAMPLE:

```javascript
const groups = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

for (let group of groups) {
    for (let number of group) {
        console.log(number);
    }
}
```

## 3.10: Lists

*Taught by: Ryan N, Yash P, Jackson P, Arush S, Aranya*

Lists are a type of data structure that can hold multiple items. They are ordered and can be indexed.

PYTHON EXAMPLE:

```python
fruits = ["apple", "banana", "cherry"]

print(fruits[0]) # apple
print(fruits[1]) # banana
print(fruits[2]) # cherry
```

JAVASCRIPT EXAMPLE:

```javascript
const fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // apple
console.log(fruits[1]); // banana
console.log(fruits[2]); // cherry
```

Lists can be modified with different methods.

```python
fruits = ["apple", "banana", "cherry"]

fruits.append("orange") # Adds an item to the end of the list
fruits.insert(0, "grape") # Adds an item to the beginning of the list
fruits.remove("banana") # Removes an item from the list
fruits.pop() # Removes and returns the last item in the list
```
