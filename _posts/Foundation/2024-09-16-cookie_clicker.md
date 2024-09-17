---
layout: post
title: Cookie Clicker
description: Cookie Clicker Game
type: issues
comments: False
---

<div id="game-container" class="cookie-clicker-container">
    <div class="top-container">
        <div class="money-display">Money: <span id="money">0</span></div>
    </div>
    <div class="top-container-stats">
        <div>clicks per second: <span id="clicks-per-second">0</span></div>
        <div>money per click: <span id="per-click">1</span></div>
    </div>
    <div class="top-container-upgrade">
        <button class="upgrade-btn" id="upgrade-btn">Upgrade: <span id="upgrade-cost">10</span></button>
        <button class="upgrade-auto-clicker-btn" id="upgrade-auto-clicker-btn">Buy Auto Clicker: <span id="upgrade-auto-clicker-cost">500</span></button>

    </div>
    <div class="cookie-clicker-btn-container">
        <button class="cookie-clicker-btn" id="cookie-clicker-btn"></button>
    </div>

</div>

<script src="{{site.baseurl}}/assets/js/cookie_clicker.js"></script>
