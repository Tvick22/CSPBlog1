---
layout: post
title: Homework Hacks 3.6 and 3.7
description: Homework for 3.6 and 3.7
type: issues
comments: True
---

# Question 1

- Create a simple system using if and else statements that determines whether or not a user (based on their age) is eligible to vote
- If the person is less than 18 years old, they should not be able to vote
- If the person is 18 years old or older, they are able to vote

```javascript
// Step 1: Create a function that checks if a person is eligible to vote
function isEligibleToVote(age) {
  // Step 2: Make sure the age is a positive number
  if !(age < 0) {
    console.error("Age must be a positive number");
    return false;
  }
  // Step 3: If the person is less than 18 years old, return false
  if (age < 18) {
    return false;
  }

  // Step 4: If the person is 18 years old or older, return true
  return true;
}

function printEligibility(eligible) {
  if (eligible) {
    console.log("You are eligible to vote.");
  } else {
    console.log("You are not eligible to vote.");
  }
}

// Step 4: Test the function
printEligibility(isEligibleToVote(16)); // You are not eligible to vote.
printEligibility(isEligibleToVote(18)); // You are eligible to vote.
printEligibility(isEligibleToVote(-5)); // Age must be a positive number & You are not eligible to vote.
```

# Question 2

- Create a simple system using if and else statements that determines what the user would eat
- If the person is healthy, make them eat an apple
- If the person doesn’t care about what they eat, make them drink coffee
- If the person is unhealthy, make them eat chocolate

```javascript
function determineFood(healthy, caresAboutFood) {
  // Step 1: if the person doesn't care about what they eat, they should drink coffee
  if (!caresAboutFood) {
    return "coffee";
  }

  // Step 2: If the person is healthy, they should eat an apple
  if (healthy) {
    return "apple";
  }

  // Step 3: If the person is unhealthy, they should eat chocolate
  return "chocolate";
}

// Step 4: Test the function
console.log(determineFood(true, true)); // apple
console.log(determineFood(false, true)); // chocolate
console.log(determineFood(true, false)); // coffee
```
