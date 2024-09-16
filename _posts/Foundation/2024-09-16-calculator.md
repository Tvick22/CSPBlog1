---
toc: true
comments: false
layout: post
title: Calculator
description: Calculator for Basic Math
type: tangibles
courses: { blogs: { week: 4 } }
---

<!-- Add a container for the animation -->
<div class="calculator-container">
    <!--result-->
    <div class="calculator-output" id="output">0</div>
    <!--row 1-->
    <div class="calculator-number btn btn-outline">1</div>
    <div class="calculator-number btn btn-outline">2</div>
    <div class="calculator-number btn btn-outline">3</div>
    <div class="calculator-operation btn btn-outline btn-accent">+</div>
    <!--row 2-->
    <div class="calculator-number btn btn-outline">4</div>
    <div class="calculator-number btn btn-outline">5</div>
    <div class="calculator-number btn btn-outline">6</div>
    <div class="calculator-operation btn btn-outline btn-accent">-</div>
    <!--row 3-->
    <div class="calculator-number btn btn-outline">7</div>
    <div class="calculator-number btn btn-outline">8</div>
    <div class="calculator-number btn btn-outline">9</div>
    <div class="calculator-operation btn btn-outline btn-accent">*</div>
    <!--row 4-->
    <div class="calculator-clear btn btn-primary">A/C</div>
    <div class="calculator-number btn btn-outline">0</div>
    <div class="calculator-number btn btn-outline">.</div>
    <div class="calculator-operation btn btn-outline btn-accent">/</div>
    <!--row 5-->
    <div class="calculator-operation btn btn-outline btn-accent">√</div>
    <div class="calculator-operation btn btn-outline btn-accent">^</div>
    <div></div>
    <div class="calculator-equals btn btn-primary">=</div>
</div>

<!-- JavaScript (JS) implementation of the calculator. -->

<script src="{{site.baseurl}}/assets/js/calculator.js"></script>
