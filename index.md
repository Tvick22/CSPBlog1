---
layout: base
title: Student Home 
description: Home Page
hide: true
---

# Roulette Table

---

<button class="roulette-btn" onClick="spinRouletteTable()">Spin</button>

<h2>Output: <span id="output-content">-</span></h2>

## History

---

<table id="history-table">
    <tr>
        <th>Number</th>
        <th>Color</th>
        <th>Bet</th>
    </tr>
</table>

<script>
    const outputContent = document.getElementById("output-content")
    const historyTable = document.getElementById("history-table")

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const spinHistory = []
    const rouletteTable = {
        "0": "green",
        "00": "green",
        "1": "red",
        "2": "black",
        "3": "red",
        "4": "black",
        "5": "red",
        "6": "black",
        "7": "red",
        "8": "black",
        "9": "red",
        "10": "black",
        "11": "black",
        "12": "red",
        "13": "black",
        "14": "red",
        "15": "black",
        "16": "red",
        "17": "black",
        "18": "red",
        "19": "red",
        "20": "black",
        "21": "red",
        "22": "black",
        "23": "red",
        "24": "black",
        "25": "red",
        "26": "black",
        "27": "red",
        "28": "black",
        "29": "black",
        "30": "red",
        "31": "black",
        "32": "red",
        "33": "black",
        "34": "red",
        "35": "black",
        "36": "red"
    };

    function updateHistoryTable (output) {
        spinHistory.push(output)
        historyTable.innerHTML = ""

        const labelRow = document.createElement("tr")
        const numberLabel = document.createElement("th")
        numberLabel.innerHTML = "Number"
        const colorLabel = document.createElement("th")
        colorLabel.innerHTML = "Color"
        const betLabel = document.createElement("th")
        betLabel.innerHTML = "Bet"
        labelRow.appendChild(numberLabel)
        labelRow.appendChild(colorLabel)
        labelRow.appendChild(betLabel)

        historyTable.appendChild(labelRow)

        orderedHistory = spinHistory
        orderedHistory.reverse()

        orderedHistory.map((number) => {
            const row = document.createElement("tr")
            const num = document.createElement("th")
            num.innerHTML = number
            const color = document.createElement("th")
            color.innerHTML = rouletteTable[number]
            const bet = document.createElement("th")
            bet.innerHTML = "-"
            row.appendChild(num)
            row.appendChild(color)
            row.appendChild(bet)
            historyTable.appendChild(row)
        })

    }

    function spinRouletteTable () {
        const randNum = getRandomInt(0,37)

        const output = randNum == 37 ? "00":randNum.toString();

        updateHistoryTable(output)
        outputContent.innerHTML = output
    }
</script>