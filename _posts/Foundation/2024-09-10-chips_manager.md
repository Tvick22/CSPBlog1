---
layout: post
title: Chip Manager
description: Manager for poker chips!
type: issues
comments: False
---

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
