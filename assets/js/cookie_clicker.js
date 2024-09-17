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

const money = initMoney();

function initMoney() {
  total = 500;
  perClick = 1;
  upgradePrice = 10;
  autoClickers = 0;
  autoClickerPrice = 500;

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
        gameContainer.appendChild(makeMiniCookiePopup());
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
      console.log(autoClickers);
      money.addMoney(autoClickers);
      if (autoClickers > 0) {
        cookieBtn.classList.add("clicked-cookie");
        setTimeout(() => {
          cookieBtn.classList.remove("clicked-cookie");
        }, 250);
      }
    },
  };
}

function makeMiniCookiePopup() {
  const miniCookiePopup = document.createElement("div");
  let initialized = false;
  // make the popup appear on the mouse cursor
  const mouseListener = addEventListener("click", (event) => {
    if (!initialized) {
      const x = event.clientX;
      const y = event.clientY + window.scrollY;
      console.log(window.scrollY);
      miniCookiePopup.style.left = x + "px";
      miniCookiePopup.style.top = y + "px";
      // debugger;
    }
    initialized = true;
  });

  miniCookiePopup.classList.add("mini-cookie-popup");

  setTimeout(() => {
    miniCookiePopup.style.left = "52%";
    miniCookiePopup.style.top = "55%";
  }, 100);

  setTimeout(() => {
    removeEventListener("click", mouseListener);
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
