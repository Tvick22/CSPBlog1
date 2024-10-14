---
layout: post
title: Homework Hacks 3.2
description: Homework for 3.2
type: issues
comments: True
---

# 3.2.1

- Popcorn Hack: create a simple python script to add two integers

```python
# Step 1: Initialize two variables
num1 = 5
num2 = 10

# Step 2: Add the two numbers
sum = num1 + num2

# Step 3: Print the result
print(sum)
```
- Popcorn Hack: Simple Python script to count the length of a string

```python
# Step 1: Initialize a variable
string = "Hello World"

# Step 2: Count the length of the string
length = len(string)

# Step 3: Print the length
print(length)
```

- Popcorn Hack: Simple JavaScript function to check for `null`(`none` in python)

```javascript
// Step 1: Initialize a variable
const variable = null;

// Step 2: Check if the string is null
function isNull(variable) {
  if (variable == null) {
    return true;
  } else {
    return false;
  }
}

// Step 3: Print the result
console.log(isNull(variable));
```

- Popcorn Hack: Simple JavaScript function to check for `undefined`(`none` in python)

```javascript
// Step 1: Initialize a variable
const variable = undefined;

// Step 2: Check if the string is undefined
function isUndefined(variable) {
  if (variable == undefined) {
    return true;
  } else {
    return false;
  }
}

// Step 3: Print the result
console.log(isUndefined(variable));
```

- Popcorn Hack: Simple JavaScript function to check for `null`(`none` in python)

```javascript
// Step 1: Initialize a variable
const variable = null;

// Step 2: Check if the string is null
function isNull(variable) {
  if (variable == null) {
    return true;
  } else {
    return false;
  }
}

// Step 3: Print the result
console.log(isNull(variable));
```

# 3.2.2

- Popcorn Hack: create a dictionary, update an item, and add an item

```python
# Step 1: Initialize a dictionary
dictionary = {"key1": "value1", "key2": "value2"}

# Step 2: Update an item
dictionary["key1"] = "new value"

# Step 3: Add an item
dictionary["key3"] = "value3"

# Step 4: Print the dictionary
print(dictionary)
```

# 3.2.3

- Popcorn Hack: Use JSON to make a dictionary, modify it, and update the changes

```python
# Step 1: Initialize a dictionary
dictionary = {"key1": "value1", "key2": "value2"}

# Step 2: Convert the dictionary to JSON
json_dictionary = json.dumps(dictionary)

# Step 3: Modify the dictionary
dictionary["key1"] = "new value"

# Step 4: Convert the dictionary back to JSON
json_dictionary = json.dumps(dictionary)

# Step 5: Update the dictionary
dictionary = json.loads(json_dictionary)

# Step 6: Print the dictionary
print(dictionary)
```

- Homework:
  1. Create a dictionary with at least 3 keys. Print the dictionary.
  2. Start with this dictionary: person = {"name": "Alice", "age": 30}
    i. Update the age to 31
    ii. print the updated dictionary.

```python
# Step 1: Initialize a dictionary with 3 keys
dictionary = {"key1": "value1", "key2": "value2", "key3": "value3"}
# Step 2: Print the dictionary
print(dictionary)

# Step 3: Make the person dictionary
person = {"name": "Alice", "age": 30}
# Step 4: Update the age
person["age"] = 31
# Step 5: Print the updated dictionary
print(person)
```
