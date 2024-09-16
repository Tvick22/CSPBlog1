---
layout: post
title: Development Process - Chip Manager
description: Dev. process of the chip manager including errors and debugging.
type: issues
comments: False
---

## Referencing HTML by incorperating it into my Javascript file

> In order to reference an HTML Element into my javscript file, I had to identify each Element with an id. I then can use javascript to find the element by its unique id.
>> ```js
 const userNameInput = document.getElementById("user-name-input");
 const addUserBtn = document.getElementById("add-user-btn");
 const playerContainer = document.getElementById("player-container");
 const potTotalDisplay = document.getElementById("pot-total");
```
>> I ensured that I referenced the correct elements by logging the Element directly into the console with console.log(). In the conosle, I can check if I referenced the correct id (if the conosle logs undefined, I have an id that does not exist in the DOM).

## Adding new "User Cards"

> Now that I had my correct element references, I can start by making a function to add a new user to the page.

```js
  function addUser() {
    const name = userNameInput.value;
    if (name == "") {
      alert("Please enter a valid Username");
      return;
    }
    if (Object.keys(users).includes(name)) {
      alert("Username is already taken.");
      return;
    }

    users[name] = {
      money: startingMoney,
    };

    const card = createHTMLUser(name);
    playerContainer.appendChild(card);
    userNameInput.value = "";
  }
```

> I start by checking my input for a valid username. I start by ensuring that the name is not blank, and that I do not already have a user with that name. I do this with a conditional if statement. If this is true, I create a new user in my users table (which is an object, but should probably be an array looking forwards). Additionally, it might increase readability to take that out into its own function.
Finally, I create a card in HTML, append that card to the playerContainer, and wipe the input so theycan enter more users.
>> Obviously this did not work on the first try, so I used a lot of debugging to make my code run properly. I tested each function by logging the return values. I also would log the users table (object) after every alteration to a user in order to make sure it is matching up and working correctly.
