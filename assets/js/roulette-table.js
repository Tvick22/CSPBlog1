const outputContent = document.getElementById("output-content");
const historyTable = document.getElementById("history-table");
const moneyContent = document.getElementById("money-content");
const totalBetContent = document.getElementById("total-bet");

const redBet = document.getElementById("bet-red-btn");
const blackBet = document.getElementById("bet-black-btn");
const greenBet = document.getElementById("bet-green-btn");

const betColors = { red: 0, black: 0, green: 0 };
let totalBet = 0;
let money = 100;

function betColor() {
  const red = redBet.value ? Number(redBet.value) : 0;
  const black = blackBet.value ? Number(blackBet.value) : 0;
  const green = greenBet.value ? Number(greenBet.value) : 0;
  if (red < 0 || black < 0 || green < 0) {
    redBet.value = betColors.red !== 0 ? betColors.red : "";
    greenBet.value = betColors.green !== 0 ? betColors.green : "";
    blackBet.value = betColors.black !== 0 ? betColors.black : "";
    return;
  }
  totalBet = red + black + green;

  if (totalBet > money) {
    redBet.value = betColors.red !== 0 ? betColors.red : "";
    greenBet.value = betColors.green !== 0 ? betColors.green : "";
    blackBet.value = betColors.black !== 0 ? betColors.black : "";

    return;
  }

  betColors.red = red;
  betColors.black = black;
  betColors.green = green;

  totalBetContent.innerHTML = totalBet;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const spinHistory = [];

function updateHistoryTable(output) {
  spinHistory.push(output);
  historyTable.innerHTML = "";

  const labelRow = document.createElement("tr");
  const numberLabel = document.createElement("th");
  numberLabel.innerHTML = "Number";
  const colorLabel = document.createElement("th");
  colorLabel.innerHTML = "Color";
  const betLabel = document.createElement("th");
  betLabel.innerHTML = "Bet";
  const winLabel = document.createElement("th");
  winLabel.innerHTML = "Winnings";
  labelRow.appendChild(numberLabel);
  labelRow.appendChild(colorLabel);
  labelRow.appendChild(betLabel);
  labelRow.appendChild(winLabel);

  historyTable.appendChild(labelRow);

  orderedHistory = spinHistory;
  orderedHistory.reverse();

  orderedHistory.forEach((pocket) => {
    const row = document.createElement("tr");
    const num = document.createElement("th");
    num.innerHTML = pocket;
    const color = document.createElement("th");
    color.innerHTML = determineColor(pocket);
    const bet = document.createElement("th");
    bet.innerHTML = "-";
    const win = document.createElement("th");
    win.innerHTML = "-";
    row.appendChild(num);
    row.appendChild(color);
    row.appendChild(bet);
    row.appendChild(win);
    historyTable.appendChild(row);
  });
}

/**
 * Determines the color of the number
 * @param {string} pocket
 * @returns {"Green" | "Red" | "Black"}
 */
function determineColor(pocket) {
  pocketNumber = Number(pocket);

  if (pocketNumber == 0) {
    return "Green";
  }
  if (pocketNumber % 2 == 0) {
    return "Red";
  }
  if (pocketNumber % 2 != 0) {
    return "Black";
  }
}

function spinRouletteTable() {
  const randNum = getRandomInt(0, 37);

  const output = randNum == 37 ? "00" : randNum.toString();

  updateHistoryTable(output);
  outputContent.innerHTML = output;
}
