---
layout: post
title: Button!
description: Button Following the cool layout!
type: issues
comments: True
---

<div class="container">
    <div class="wrappertop">
        <p class="paragraph">p</p>
        <button class="greenButton" onclick="flipText()">button</button>
        <div class="floatingDivTop">div</div>
    </div>
    <div class="wrapperbtm">
        <div class="floatingDivBtm">div</div>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
            <div class="link">a</div>
        </a>
        <a href="https://www.youtube.com">
            <div class="link">a</div>
        </a>
        <p class="paragraph">p</p>
    </div>
</div>

<script>
    const animalFacts = [
    "Penguins can jump up to 6 feet in the air.",
    "Kangaroos cannot walk backward.",
    "Octopuses have three hearts.",
    "Owls can rotate their heads 270 degrees.",
    "A group of flamingos is called a 'flamboyance.'",
    "Elephants are excellent swimmers.",
    "Cats have a unique nose print, just like human fingerprints.",
    "Honeybees can recognize human faces.",
    "The cheetah is the fastest land animal.",
    "A newborn kangaroo is the size of a lima bean.",
    "A group of crows is called a 'murder.'",
    "A chameleon's tongue is longer than its body.",
    "Polar bears are left-handed.",
    "The mantis shrimp has 16 color receptors in its eyes."
    ];

    let factCount = 0;

    function flipText () {
        const paragraph = document.getElementsByClassName("paragraph")[0]
        if (factCount == animalFacts.length) {
            factCount = 0;
        }
        const randomFact = animalFacts[factCount]
        paragraph.innerText = randomFact;
        factCount++
        return;
    }
</script>

<style>
    .container {
        padding: 10px 10px 10px 10px;
        width: 640px;
        background-color: #ffff !important;
    }
    .wrappertop {
        background-color: #ffff;
        border: 3px solid black;
        padding: 5px;
        padding-bottom: 7.5%;
        margin-bottom: 25px;
    }
    .wrapperbtm {
        background-color: #ffff;
        border: 3px solid black;
        padding: 5px;
        margin-bottom: 10px;
        padding-bottom: 0%;
    }
    .paragraph {
        border: 3px solid red;
        color: red !important;
        margin-top: 0px;
        margin-bottom: 5px;
        text-align: center;
        font-size: 28px;
        font-weight: bold;
    }
    .greenButton {
        position: relative;
        border: 3px solid #59ff00;
        background-color: #ffff !important;
        color: #59ff00 !important;
        font-size: 24px;
        font-weight: bold;
        width: 33%;
        z-index: 10;
    }
    .greenButton:hover {
        position: relative;
        border: 3px outset #59ff00;
        background-color: #ffff !important;
        color: #59ff00 !important;
        font-size: 24px;
        font-weight: bold;
        width: 33%;
        z-index: 10;
    }
    .greenButton:active {
        position: relative;
        border: 3px inset #59ff00;
        background-color: #ffff;
        color: #59ff00;
        font-size: 24px;
        font-weight: bold;
        width: 33%;
        z-index: 10;
    }
    .floatingDivTop {
        position: relative;
        text-align: center;
        margin-top: -40px;
        color: black;
        font-size: 35px;
        font-weight: bold;
    }
    .floatingDivBtm {
        position: relative;
        text-align: center;
        color: black;
        font-size: 35px;
        margin-bottom: -75px;
        padding-top: 36px;
        font-weight: bold;
    }
    .link {
        position: relative;
        border: 3px solid blue;
        color: blue;
        background-color: #ffff;
        width: 33%;
        text-align: center;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 5px;
        z-index: 10;
    }
</style>
