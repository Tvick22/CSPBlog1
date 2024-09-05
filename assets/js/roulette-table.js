const outputContent = document.getElementById("output-content");
const historyTable = document.getElementById("history-table");
const moneyContent = document.getElementById("money-content");
const totalBetContent = document.getElementById("total-bet");

const redBet = document.getElementById("bet-red-btn");
const blackBet = document.getElementById("bet-black-btn");
const greenBet = document.getElementById("bet-green-btn");

const betColors = {
  Red: 0,
  Black: 0,
  Green: 0,
  total: () => {
    return betColors.Red + betColors.Black + betColors.Green;
  },
};

let totalBet = 0;
let money = 100;

const spinHistory = {
  history: [],
  add: (entry) => {
    spinHistory.history.push(entry);
    console.log(spinHistory.history);
  },
  remove: (entry) => {
    spinHistory.history.splice(this.history.indexOf(entry), 1);
  },
};

function betColor() {
  const red = redBet.value ? Number(redBet.value) : 0;
  const black = blackBet.value ? Number(blackBet.value) : 0;
  const green = greenBet.value ? Number(greenBet.value) : 0;

  betColors.Red = red;
  betColors.Black = black;
  betColors.Green = green;

  totalBetContent.innerHTML = betColors.total();
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getWinnings(pocket, winMultiplier) {
  const winningBet = betColors[pocket.color];
  return winningBet * winMultiplier;
}

function updateDisplays() {
  moneyContent.innerHTML = money;
  redBet.value = betColors.Red;
  blackBet.value = betColors.Black;
  greenBet.value = betColors.Green;
  totalBetContent.innerHTML = betColors.total();
}

function updateHistoryTable(tableEntry) {
  spinHistory.add(tableEntry);
  historyTable.innerHTML = "";

  const labelRow = document.createElement("tr");
  const numberLabel = document.createElement("th");
  numberLabel.innerHTML = "Number";
  const colorLabel = document.createElement("th");
  colorLabel.innerHTML = "Color";
  const betLabel = document.createElement("th");
  betLabel.innerHTML = "Total Bet";
  const winLabel = document.createElement("th");
  winLabel.innerHTML = "Winnings";
  labelRow.appendChild(numberLabel);
  labelRow.appendChild(colorLabel);
  labelRow.appendChild(betLabel);
  labelRow.appendChild(winLabel);

  historyTable.appendChild(labelRow);

  orderedHistory = spinHistory.history;
  orderedHistory.reverse();

  orderedHistory.forEach((pocket) => {
    const row = document.createElement("tr");
    const num = document.createElement("th");
    num.innerHTML = pocket.numberString;
    const color = document.createElement("th");
    color.innerHTML = pocket.color;
    const bet = document.createElement("th");
    bet.innerHTML = "" + pocket.totalBet;
    const win = document.createElement("th");
    win.innerHTML = pocket.gains >= 0 ? "+" + pocket.gains : pocket.gains;
    row.appendChild(num);
    row.appendChild(color);
    row.appendChild(bet);
    row.appendChild(win);
    historyTable.appendChild(row);
  });
}

/**
 * Determines the color of the pocket based on the number
 * @param {string} pocketString
 * @returns {"Green" | "Red" | "Black"}
 */
function determineColor(pocketString) {
  pocketNumber = Number(pocketString);

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

/**
 * Creates a pocket object with number and color
 * @param {number} randomNumber
 * @typedef {Object} pocket
 * @property {string} numberString
 * @property {"Green" | "Red" | "Black"} color
 * @returns {pocket}
 */
function createPocket(randomNumber) {
  const stringPocketNumber =
    randomNumber == 37 ? "00" : randomNumber.toString();
  return {
    numberString: stringPocketNumber,
    color: determineColor(stringPocketNumber),
  };
}

function createHistoryTableEntry(pocket, gains, totalBet) {
  return {
    numberString: pocket.numberString,
    color: pocket.color,
    totalBet: totalBet,
    gains: gains,
  };
}

function spinRouletteTable() {
  if (betColors.total() == 0) {
    alert("Please place a valid bet");
    return;
  }
  if (betColors.total() > money) {
    alert("You do not have the funds to make this bet");
    return;
  }
  const randomNumber = getRandomInt(0, 37);
  console.log(betColors);
  const pocket = createPocket(randomNumber);
  const startingMoney = money;
  const winnings = getWinnings(pocket, 2);
  money -= betColors.total();
  money += winnings;
  const gains = money - startingMoney;
  const tableEntry = createHistoryTableEntry(pocket, gains, betColors.total());
  updateHistoryTable(tableEntry);
  updateDisplays();
  outputContent.innerHTML = pocket.numberString;
}
