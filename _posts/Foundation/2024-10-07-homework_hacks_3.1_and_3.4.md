---
layout: post
title: Homework Hacks 3.1 and 3.4
description: Homework for 3.1 and 3.4
type: issues
comments: True
---

# 3.1.2 Python Hacks

## Hack 1: Types of Variables

Write a Python program that assigns a variable and changes its value type multiple times. Use the type() function to track and print the type of the variable after each reassignment.

```python
# Step 1: Initialize the variable
silly = True
print(type(silly))

# Step 2: Reassign a new type (integer)
silly = 1
print(type(silly))

# Step 3: Reassign to another type (string)
silly = "hello"
print(type(silly))

# Step 4: Reassign to a boolean
silly = False
print(type(silly))
```

# 3.1.4 Javascript Hacks

## Hack 1: Naming Variables for User Profile

- Use clear, descriptive variable names for full name, age, email, and account balance.
- Assign realistic values to each variable.
- Display the information using console.log() in a sentence like: "John Doe, aged 30, can be contacted at johndoe@example.com and has a balance of $1500 in his account."

```javascript
// Step 1: Declare variables
const fullName = "John Doe";
const age = 30;
const email = "johndoe@example.com";
const balance = 1500;

//Step 2: Create userProfile object
const userProfile = {
  fullName,
  age,
  email,
  balance,
};

// Step 3: Display the information
console.log(`${fullName}, aged ${age}, can be contacted at ${email} and has a balance of $${balance} in his account.`);
```

# 3.4.2 Python Hacks

## Hack 6
- Given a string containing both letters and digits, write a function that extracts all the numbers, sums them up, and returns the total.

```python
def sum_numbers(string):
    # Step 1: Convert the string to a list of characters
    string_list = list(string)

    # Step 2: Initialize a variable to store the sum
    total = 0

    # Step 3: Loop through the list and add each number to the total
    for char in string_list:
        if char.isdigit():
            total += int(char)

    # Step 4: Return the total
    return total

# Step 5: Test the function
print(sum_numbers("123abc456def789"))
```

# 3.4.4 Javascript Hacks

## Hack 3

- We received this message from a noisy audio file: "The...secret...to...life...is...(redacted)"
- There seems to be white noise in between words. Please remove the ... between the words using a string method.
- Expected output: “The secret to life is (redacted)”

```javascript
function removeDots(str) {
  // Step 1: Create a new string variable
  let newStr = "";

  // Step 2: Loop through the string
  for (let i = 0; i < str.length; i++) {
    // Step 3: Check if the current character is a dot
    if (str[i] === ".") {
      return;
    };

    // Step 4: Add the current character to the new string
    newStr += str[i];
  }

  // Step 5: Return the new string
  return newStr;
}

// Step 6: Test the function
console.log(removeDots("The...secret...to...life...is...(redacted)"));
console.log(removeDots("Hello...World"))
```
