const moneyDisplay = document.getElementById("money");
const cookieBtn = document.getElementById("cookie-clicker-btn");
const upgradeBtn = document.getElementById("upgrade-btn");
const upgradeCostDisplay = document.getElementById("upgrade-cost");
const upgradeAutoClickerBtn = document.getElementById(
  "upgrade-auto-clicker-btn",
);
const upgradeAutoClickerCostDisplay = document.getElementById(
  "upgrade-auto-clicker-cost",
);
const clicksPerSecondDisplay = document.getElementById("clicks-per-second");
const perClickDisplay = document.getElementById("per-click");
const gameContainer = document.getElementById("game-container");
const autoClicksPerSecondUpgradeCostDisplay = document.getElementById(
  "upgrade-auto-clicks-per-second",
);

const money = initMoney();

function initMoney() {
  total = 500;
  perClick = 1;
  upgradePrice = 10;
  autoClickers = 0;
  autoClickerPrice = 500;
  autoClicksPerSecond = 1;
  autoClicksPerSecondUpgradeCost = 750;

  moneyDisplay.innerHTML = total;
  clicksPerSecondDisplay.innerHTML = autoClickers;
  perClickDisplay.innerHTML = perClick;
  upgradeAutoClickerCostDisplay.innerHTML = autoClickerPrice;
  upgradeCostDisplay.innerHTML = upgradePrice;

  return {
    addClickMoney() {
      this.addMoney(perClick);
    },
    addMoney(amount) {
      total += amount;
      moneyDisplay.innerHTML = total;
      if (amount > 0) {
        for (let i = 0; i < amount; i++) {
          gameContainer.appendChild(makeMiniCookiePopup());
        }
        debugger;
      }
    },
    upgrade() {
      if (total < upgradePrice) {
        console.log("Insufficient Funds");
        return false;
      }

      money.removeMoney(upgradePrice);
      money.increasePerClick(1);
      upgradePrice *= 2;
      upgradeCostDisplay.innerHTML = upgradePrice;
    },
    removeMoney(amount) {
      if (total - amount < 0) {
        console.log("Insufficient Funds");
        return false;
      }
      total -= amount;

      moneyDisplay.innerHTML = total;
      return true;
    },
    increasePerClick(amount) {
      perClick += amount;
      this.updateStats();
    },
    updateStats() {
      clicksPerSecondDisplay.innerHTML = autoClickers;
      perClickDisplay.innerHTML = perClick;
    },
    increaseAutoClickers(amount) {
      autoClickers += amount;
      this.updateStats();
    },
    upgradeAutoClicker() {
      if (total < autoClickerPrice) {
        console.log("Insufficient Funds");
        return false;
      }

      money.removeMoney(autoClickerPrice);
      money.increaseAutoClickers(1);
      autoClickerPrice *= 2;
      upgradeAutoClickerCostDisplay.innerHTML = autoClickerPrice;
    },
    autoClick() {
      money.addMoney(autoClickers * autoClicksPerSecond);
      if (autoClickers > 0) {
        cookieBtn.classList.add("clicked-cookie");
        setTimeout(() => {
          cookieBtn.classList.remove("clicked-cookie");
        }, 250);
      }
    },
    upgradeAutoClicksPerSecond() {
      if (total < autoClicksPerSecondUpgradeCost) {
        console.log("Insufficient Funds");
        return false;
      }

      money.removeMoney(autoClicksPerSecondUpgradeCost);
      money.increaseAutoClickerPerClick(1);
      autoClicksPerSecondUpgradeCost *= 2;
      autoClicksPerSecondUpgradeCostDisplay.innerHTML =
        autoClicksPerSecondUpgradeCost;
    },
    increaseAutoClickerPerClick(amount) {
      autoClicksPerSecond += amount;
      this.updateStats();
    },
  };
}

function makeMiniCookiePopup() {
  const miniCookiePopup = document.createElement("div");
  miniCookiePopup.classList.add("mini-cookie-popup");
  const cookieRect = cookieBtn.getBoundingClientRect();

  const centerY = cookieRect.y + window.scrollY + cookieRect.height / 2;
  const centerX = cookieRect.x + window.scrollX + cookieRect.width / 2;
  miniCookiePopup.style.left =
    centerX -
    cookieRect.width / 2 +
    Math.floor(Math.random() * cookieRect.width) +
    "px";
  miniCookiePopup.style.top =
    centerY -
    cookieRect.height / 2 +
    Math.floor(Math.random() * cookieRect.height) +
    "px";

  setTimeout(() => {
    miniCookiePopup.style.left = centerX + "px";
    miniCookiePopup.style.top = centerY + "px";
  }, 100);

  setTimeout(() => {
    miniCookiePopup.remove();
  }, 1000);

  return miniCookiePopup;
}

cookieBtn.addEventListener("click", function () {
  money.addClickMoney();
});

upgradeBtn.addEventListener("click", function () {
  money.upgrade();
});

upgradeAutoClickerBtn.addEventListener("click", function () {
  money.upgradeAutoClicker();
});

setInterval(money.autoClick, 1000);
