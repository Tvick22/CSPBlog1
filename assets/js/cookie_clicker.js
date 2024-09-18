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
const autoClicksMultiplierUpgradeCostDisplay = document.getElementById(
  "upgrade-auto-clicks-multiplier-cost",
);
const upgradeAutoClicksMultiplierBtn = document.getElementById(
  "upgrade-auto-clicks-multiplier-btn",
);
const autoClicksMultiplierDisplay = document.getElementById(
  "auto-clicks-multiplier",
);
const upgradeCookieLevelBtn = document.getElementById(
  "upgrade-cookie-level-btn",
);
const cookieLevelCostDisplay = document.getElementById(
  "upgrade-cookie-level-cost",
);
const cookieLevelDisplay = document.getElementById("cookie-level");

const money = initMoney();

function initMoney() {
  total = 0;
  perClick = 1;
  upgradePrice = 10;
  autoClickers = 0;
  autoClickerPrice = 500;
  autoClicksMultiplier = 1;
  autoClicksMultiplierUpgradeCost = 750;
  cookieLevelUpgradeCost = 5000;
  cookieLevel = 1;

  moneyDisplay.innerHTML = total;
  clicksPerSecondDisplay.innerHTML = autoClickers;
  perClickDisplay.innerHTML = perClick;
  upgradeAutoClickerCostDisplay.innerHTML = autoClickerPrice;
  upgradeCostDisplay.innerHTML = upgradePrice;
  autoClicksMultiplierUpgradeCostDisplay.innerHTML =
    autoClicksMultiplierUpgradeCost;
  autoClicksMultiplierDisplay.innerHTML = autoClicksMultiplier;
  cookieLevelCostDisplay.innerHTML = cookieLevelUpgradeCost;

  return {
    addClickMoney() {
      this.addMoney(perClick);
    },
    addMoney(amount) {
      total += amount * cookieLevel;
      moneyDisplay.innerHTML = total;
      if (amount > 0) {
        for (let i = 0; i < amount; i++) {
          gameContainer.appendChild(makeMiniCookiePopup());
        }
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
      clicksPerSecondDisplay.innerHTML =
        autoClickers * autoClicksMultiplier * cookieLevel;
      perClickDisplay.innerHTML = perClick * cookieLevel;
      autoClicksMultiplierDisplay.innerHTML = autoClicksMultiplier;
      cookieLevelDisplay.innerHTML = cookieLevel;
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
      money.addMoney(autoClickers * autoClicksMultiplier);
      if (autoClickers > 0) {
        cookieBtn.classList.add("clicked-cookie");
        setTimeout(() => {
          cookieBtn.classList.remove("clicked-cookie");
        }, 250);
      }
    },
    upgradeAutoClicksMultiplier() {
      if (total < autoClicksMultiplierUpgradeCost) {
        console.log("Insufficient Funds");
        return false;
      }

      money.removeMoney(autoClicksMultiplierUpgradeCost);
      money.increaseAutoClickerPerClick(1);
      autoClicksMultiplierUpgradeCost *= 2;
      autoClicksMultiplierUpgradeCostDisplay.innerHTML =
        autoClicksMultiplierUpgradeCost;
    },
    increaseAutoClickerPerClick(amount) {
      autoClicksMultiplier += amount;
      this.updateStats();
    },
    upgradeCookieLevel() {
      if (total < cookieLevelUpgradeCost) {
        console.log("Insufficient Funds");
        return false;
      }

      money.removeMoney(cookieLevelUpgradeCost);
      money.increaseCookieLevel(1);
      cookieLevelUpgradeCost *= 2;
      cookieLevelCostDisplay.innerHTML = cookieLevelUpgradeCost;
    },
    increaseCookieLevel(amount) {
      cookieLevel += amount;
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

upgradeAutoClicksMultiplierBtn.addEventListener("click", function () {
  money.upgradeAutoClicksMultiplier();
});

upgradeCookieLevelBtn.addEventListener("click", function () {
  money.upgradeCookieLevel();
});

setInterval(money.autoClick, 1000);
