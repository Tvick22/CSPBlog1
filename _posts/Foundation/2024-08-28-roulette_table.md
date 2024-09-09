---
layout: post
title: Roulette Table
description: Simple Roulette Table
type: issues
comments: False
---

# Roulette Table

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

<script src="../../../assets/js/roulette-table.js"></script>

<style>
    .reset-btn {
      background-color:  #24a0ed;
      border-radius: 5px;
    }
    .roulette-btn {
        width: 100%;
        height: 100%;
        z-index: 10000;
        border-radius: 5px;
    }
    .bet-colors-container {
        display: flex;
    }
    .bet-red-btn {
        background-color: red !important;
        color: white !important;
        padding: 10px;
        margin: 3px;
    }
    .bet-black-btn {
        background-color: black !important;
        color: white !important;
        padding: 10px;
        margin: 3px;
    }
    .bet-green-btn {
        background-color: green !important;
        color: white !important;
        padding: 10px;
        margin: 3px;
    }

    ::placeholder {
        color: white !important;
    }
</style>
