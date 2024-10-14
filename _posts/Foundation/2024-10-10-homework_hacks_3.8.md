---
layout: post
title: Homework Hacks 3.8
description: Homework for 3.8
type: issues
comments: True
---

# Homework Hacks 3.8

## Homework Hack for Recursion
1. Create a function to calculate the factorial of a number.
2. Inside the function, use recursion (calling the function within itself) to continue the calculation.
3. Display the result of the factorial calculation along with a custom message.
4. Ensure to handle base cases and edge cases like negative or non-integer inputs.
5. Find the factorial of any number ranging from 9-13 and make sure the output message makes sense.

```python
def factorial(n):
    if n < 0: #Edge case at negative
        return "Factorial of {n} is not defined"
    if isinstance(n, int) == False: #Edge case at non-integer
        return "Not an integer"
    if n == 0: #Base case at 0
        return 1
    else:
        return n * factorial(n-1)

print("The factorial of 9 is:", factorial(9))
```

## PopCorn hack: Find numbers divisible by 2.

```python
def divisible_by_2(n):
    if n % 2 == 0:
        return True
    else:
        return False

for i in range(1, 100): #Find numbers between 1 and 100 that are divisible by 2
    if divisible_by_2(i):
        print(i)
```

## 3.8.6 Homework Hack

- You are tasked with writing a simple Python script that uses a for loop to iterate through a list of numbers and print each number.
- Requirements:
- Write a for loop to iterate through the given list of numbers. Print each number as you iterate through the list. Input: Use the list of numbers: [1, 2, 3, 4, 5]
- Expected Output: You should print each number from the list.

```python
numbers = [1, 2, 3, 4, 5]
for i in numbers:
    print(i)
```

- You are tasked with writing a simple Python script that uses a for loop to iterate through a list of numbers and print each number.
- Requirements:
- Write a for loop to iterate through the given list of numbers. Print each number as you iterate through the list. Input: Use the list of numbers: [1, 2, 3, 4, 5]
- Expected Output: You should print each number from the list.

```python
numbers = [1, 2, 3, 4, 5]
for i in numbers:
    print("The number is:", i)
```

## 3.8.7 Homework Hack

- You are tasked with solving two exercises involving loops in Python. The goal is to understand how to iterate through different types of collections (lists and dictionaries) and print their contents.
- Requirements:
- Exercise 1: Write a for loop to iterate through a list of colors and print each color.
- Exercise 2: Write a for loop to iterate through a dictionary of fruits where the keys represent the type of fruit, and the values represent the quantity of each fruit. Print the fruit’s name and its corresponding quantity in the format: “fruit_name : quantity”. Input:
- For the first exercise, use the list of colors: [“red”, “blue”, “green”, “yellow”]
- For the second exercise, use the dictionary of fruits: {“apple”: 3, “banana”: 5, “cherry”: 7}
- Expected Output: You should print each color from the list, and each fruit with its quantity from the dictionary.

```python
colors = ["red", "blue", "green", "yellow"]
for color in colors:
    print(color)

fruits = {"apple": 3, "banana": 5, "cherry": 7}
for fruit, quantity in fruits.items():
    print(f"{fruit}: {quantity}")
```

## 3.8.8 Homework Hack

- You are given a list of numbers, and your task is to write a Python script that iterates through the list and applies the following rules:
- Skip over the number 3 and do not print it. Stop the loop completely once the number 5 is encountered. Print the remaining numbers that follow these rules.
- Requirements:
- Use a for loop to iterate through the list. Use an if condition with continue to skip the number 3. Use an if condition with break to exit the loop when the number 5 is encountered. Print the numbers that are not skipped or cause the loop to break. Input: The given list is: [1, 2, 3, 4, 5]
- Expected Output: You should print all numbers except 3 and stop printing after 5.

```python
numbers = [1, 2, 3, 4, 5]
for i in numbers:
    if i == 3:
        continue
    if i == 5:
        break
    print(i)
```
