---
layout: post
title: Sprint 1 Overview
description: Overview of Sprint 1
type: issues
comments: True
---

# Hacks Tools & Equipment Play

## [Example]({{site.baseurl}}/2024/09/09/hacks_tools_equipment_S1.html)

> I learned about different data types in **Python** and tested these in [an online python playground](https://programiz.pro/ide/python)

## [Example 2]({{site.baseurl}}/2024/09/19/python_emojis.html)

> I learned about using pip to install packages and how to use the inspect module to find the source code of a function, along with the newspaper package and wikipedia package.

## [Example 3]({{site.baseurl}}/2024/09/17/python_math.html)

> I learned about the different data types in Python and how to use the statistics module to find the mean of a list of numbers.

# Hacks GitHub Pages Playground

## [Notebook About Pages]({{site.baseurl}}/2024/09/09/setting_up_pages.html)

> I wrote a mini-blog about how I managed to set up my github respository and got my site running on Github Pages

## [Nighthawk SASS Example]({{site.baseurl}}/2024/09/10/chips_manager.html)

> In this project, I used SCSS to style my buttons and different elements of the page. I created a new file called **/_chips-manager.scss** within the directory **/_sass**.
> This file handles the style of the custom classes I included in my html file. Additionally, in the creation of the actual page and its functionality, I observed the different data types we will explore in CSP.

## [Development Process of Chip Manager]({{site.baseurl}}/2024/09/13/development_process_chip_manager.html)

> In this blog, I wrote about the development process of my chip manager application. I included the different steps I took to make the application work properly. This consists of both debugging and developing. The chip manager app itself is found in the blogs submenu.

# Hacks SASS Basics

## Changing my theme

> In the **config.yml** file, I changed my theme to the differnt options, however, I thought the minima theme looked the best. However, in the **/_sass**

## Using SCSS

```scss
.chip-app {
    button {
        border: 0px;
        outline: 0px;
        transition-duration: 0.4s;
        width: 100%;
        margin: 3px;
        font-size: 1.5rem;
    }
    button:hover {
        box-shadow: 2px 2px 2px grey;
        width: 100%;
    }
    button:focus {
        outline: 0px;
        border-radius: 0px;
    }
    button:active {
        background-color: black;
        color: white;
    }
}
```

> I used SCSS to style my buttons and different elements of the page. I created a new file called **/_chips-manager.scss** within the directory **/_sass**.

# Hacks Frontend

## HTML for my Chip Manager

```html
    <div class="chip-app">
        <div class="settings-container">
            <div class="card">
                <input id="user-name-input" class="user-input"/>
                <button id="add-user-btn" class="add-user-btn">Add User</button>
            </div>
        </div>

        <div id="pot-container">
            <div class="card">
                <h4>Pot Total: <span id="pot-total">0</span></h4>
            </div>
        <div id="player-container" class="player-container"></div>

    </div>

    <script src="{{site.baseurl}}/assets/js/chip-manager.js"></script>
```

## HTML & Markdown for my Roulette Table

```html
    <button class="reset-btn" onClick="location.reload()">RESET</button>

    ---

    <button class="roulette-btn" onClick="spinRouletteTable()">Spin</button>

    <h2>Money: <span id="money-content">100</span></h2>
    <h2>Output: <span id="output-content">-</span></h2>

    ---

    <h2>Total Bet: <span id="total-bet">0</span></h2>

    <div class="bet-colors-container">
        <input placeholder="Bet on Red" id="bet-red-btn" class="bet-red-btn" oninput="betColor()" color="red" type="number"/>
        <input placeholder="Bet on Black" id="bet-black-btn" class="bet-black-btn" oninput="betColor()" color="black" type="number"/>
        <input placeholder="Bet on Green" id="bet-green-btn" class="bet-green-btn" oninput="betColor()" color="green" type="number"/>
    </div>
    ---

    ## History

    ---

    <table id="history-table">
        <tr>
            <th>Number</th>
            <th>Color</th>
            <th>Total Bet</th>
            <th>Winnings</th>
        </tr>
    </table>

    <script src="{{site.baseurl}}/assets/js/roulette-table.js"></script>
```

# Pair Programming

> Along with my partner, we worked together on making our custom buttons based on the layout given to us. We both decided that our buttons will change the paragraph's text content, and together we worked on this and made it operate correctly.

> Additionally, my partner and I decided to work together and discover some of the different syntaxes in Python. We efficiently worked together while researching and developing our app.
