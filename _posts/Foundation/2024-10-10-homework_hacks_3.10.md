---
layout: post
title: Homework Hacks 3.10
description: Homework for 3.10
type: issues
comments: True
---

# 3.10.3 Python Hacks

If you have a Python list of numbers, but want to keep certain numbers (EX: even ones), you can actually use what is called a "list comprehension."
What this essentially does is it creates another list, but you can apply a filter or operation to it to help you get specific outputs.

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8]
even_numbers = [num for num in numbers if num % 2 == 0]

print(even_numbers)  # Output: [2, 4, 6, 8]
```

All it takes to perform some complex calculations is one method. reduce() sums all the numbers in a given array.
More specifically, reduce() takes a callback function (basically a function that can be referenced in later bits of code), which processes all the items in a given array.
Create a list that uses this function.
Now create another array containing the integers: 3, 4, 8, 9, 1, 80, and 77. Put these integers in RANDOM ORDER.
This will be the second popcorn hack.
Now use the sort() method to reorganize these integers in numerical order.
Now do the same thing again, but this time write out the integers using words.
Sort these alphabetically.

```javascript
%%javascript

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(`Sum of the numbers: ${sum}`);

//Array of randomly ordered numbers
const randomOrderedNumbers = [3, 8, 80, 77, 1, 4]

// Sorting the numbers in ascending numerical order (Uses .slice to stop from mutating the original array)
const sortedNumbers = randomOrderedNumbers.slice().sort((a, b) => a - b);

console.log(`Sorted array: ${sortedNumbers}`);

// Array of number words corresponding to the numbers
const numberWords = ['three', 'four', 'eight', 'nine', 'one', 'eighty', 'seventy-seven'];

// Sorting the words alphabetically
const sortedNumberWords = numberWords.slice().sort();

console.log(`Alphabetically sorted: ${sortedNumberWords}`);
```

- Create a program that lets users manage a list of their choosing.
- Users can add elements, remove them, check if an element exists, and display the current list.
- A function that can find the maximum and minimum value of a list using iteration.

```python
# Step 1: Create a function that adds an element to the list
def add_element(list, element):
    # Step 2: Add the element to the list
    list.append(element)

    # Step 3: Return the updated list
    return list

# Step 4: Create a function that removes an element from the list
def remove_element(list, element):
    # Step 5: Remove the element from the list
    list.remove(element)

    # Step 6: Return the updated list
    return list

# Step 7: Create a function that checks if an element exists in the list
def check_element(list, element):
    # Step 8: Check if the element exists in the list
    if element in list:
        return True
    else:
        return False

# Step 9: Create a function that returns the maximum value in the list
def find_max(list):
    # Step 10: Initialize a variable to store the maximum value
    max_value = list[0]

    # Step 11: Loop through the list and update the maximum value if a larger value is found
    for element in list:
        if element > max_value:
            max_value = element

    # Step 12: Return the maximum value
    return max_value

# Step 13: Create a function that returns the minimum value in the list
def find_min(list):
    # Step 14: Initialize a variable to store the minimum value
    min_value = list[0]

    # Step 15: Loop through the list and update the minimum value if a smaller value is found
    for element in list:
        if element < min_value:
            min_value = element

    # Step 16: Return the minimum value
    return min_value

# Step 17: Display the list
def display_list(list):
    print(list)

# Step 18: Create a list of numbers
numbers = [1, 2, 3, 4, 5]

# Step 19: Add an element to the list
add_element(numbers, 6)

# Step 20: Remove an element from the list
remove_element(numbers, 3)

# Step 21: Check if an element exists in the list
print(check_element(numbers, 3)) # True
print(check_element(numbers, 6)) # False

# Step 22: Find the maximum value in the list
print(find_max(numbers)) # 5

# Step 23: Find the minimum value in the list
print(find_min(numbers)) # 1
```

- It's time to go shopping! Try to create a program that allows users to manage items using an array, which can be visually represented with a shopping cart.
- While not necessary, feel free to show the cart filling up with icons (items) as the user adds or subtracts items.

```javascript
const cart = {
  items: [],
  total: 0,
  addItem(item, amount) {
    // Step 2: Add the item to the cart
    this.items.push(item);
    item.quantity = amount ? amount : 0;

    this.total += item.price;
  },
  removeItem(item) {
    // Step 3: Remove the item from the cart
    this.items.splice(this.items.indexOf(item), 1);

    this.total -= item.price;
  },
  displayCart() {
    // Step 4: Display the cart
    console.log(`Total: ${this.total}`);
    console.log(`Items: `, this.items);
  },
};

// Step 5: Create an item object
const apple = {
  name: 'Apple',
  price: 0.99,
};

// Step 6: Add an item to the cart
cart.addItem(apple);

cart.displayCart();

// Step 7: Remove an item from the cart
cart.removeItem(apple);

cart.displayCart();
```
