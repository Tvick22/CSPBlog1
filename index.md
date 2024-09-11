---
layout: base
title: Student Home
description: Home Page
hide: true
---

# Welcome to my Blog!

> Check out the <a href="./blogs">Blogs</a> tab in the header!

> Also check out the <a href="./2024/08/28/roulette_table.html">Roulette Game</a> under <a href="./blogs">Blogs</a>!

<img id="Mario" src="https://www.icegif.com/wp-content/uploads/2023/03/icegif-1490.gif"
alt="mario" style="width:130px; position:absolute; bottom:0; left:0; transition: all 0s;">

<script>
function moveMario() {
  const mario = document.getElementById("Mario");
  let position = 0;
  const speed = 3;
  const interval = setInterval(() => {
    position += speed;
    if (position >= window.innerWidth) {
      position = -100
    }
    mario.style.left = position + "px";
  }, 1);
}

moveMario();
</script>
