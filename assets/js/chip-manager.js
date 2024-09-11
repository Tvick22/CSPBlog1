const userNameInput = document.getElementById("user-name-input");
const addUserBtn = document.getElementById("add-user-btn");
const playerContainer = document.getElementById("player-container");
const potTotalDisplay = document.getElementById("pot-total");

addUserBtn.addEventListener("click", addUser);

const users = {};
let potTotal = 0;
potTotalDisplay.innerHTML = potTotal;

let startingMoney = 100;
let addAmount = 10;
let removeAmount = 10;

addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    addUser();
  }
});

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

// <div class="card">
//     <div class="card-container">
//     <h4><b>John Doe</b></h4>
//     <p>Total: 100</p>
//     </div>
//     <div class="btns-list">
//         <button class="add-btn">+</button>
//         <button class="minus-btn">-</button>
//         <button class="reset-btn">RESET</button>
//     </div>
// </div>

function createHTMLUser(name) {
  const card = document.createElement("div");
  card.classList = "card";
  card.id = name;
  const cardContainer = document.createElement("div");
  cardContainer.classList = "card-container";
  const h4 = document.createElement("h4");
  h4.innerHTML = `<b>${name}</b>`;
  const h6 = document.createElement("h6");
  h6.innerHTML = `Total: ${users[name].money}`;
  h6.id = `${name}-total`;
  cardContainer.appendChild(h4);
  cardContainer.appendChild(h6);
  card.appendChild(cardContainer);
  const btnsList = document.createElement("div");
  btnsList.classList = "btns-list";
  const winBtn = document.createElement("button");
  winBtn.classList = "add-btn";
  winBtn.innerHTML = "Get Pot";
  winBtn.addEventListener("click", () => {
    winBtnClick(name);
  });
  btnsList.appendChild(winBtn);
  const betBtn = document.createElement("button");
  betBtn.classList = "minus-btn";
  betBtn.innerHTML = "Bet";
  betBtn.addEventListener("click", () => {
    betBtnClick(name);
  });
  btnsList.appendChild(betBtn);
  const resetBtn = document.createElement("button");
  resetBtn.classList = "reset-btn";
  resetBtn.innerHTML = "RESET";
  resetBtn.addEventListener("click", () => {
    resetButtonClick(name);
  });
  btnsList.appendChild(resetBtn);
  card.appendChild(btnsList);
  return card;
}

function winBtnClick(name) {
  const cardTotal = document.getElementById(`${name}-total`);
  const total = users[name].money;
  const newTotal = total + potTotal;
  potTotal = 0;
  potTotalDisplay.innerHTML = potTotal;
  users[name].money = newTotal;
  cardTotal.innerHTML = `Total: ${newTotal}`;
}

function betBtnClick(name) {
  const cardTotal = document.getElementById(`${name}-total`);
  const total = users[name].money;
  const newTotal = total - removeAmount;
  potTotal += removeAmount;
  potTotalDisplay.innerHTML = potTotal;
  users[name].money = newTotal;
  cardTotal.innerHTML = `Total: ${newTotal}`;
}

function resetButtonClick(name) {
  const cardTotal = document.getElementById(`${name}-total`);
  const total = users[name].money;
  users[name].money = startingMoney;
  cardTotal.innerHTML = `Total: ${startingMoney}`;
}
