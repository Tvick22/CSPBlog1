---
layout: base
title: Student Home
description: Home Page
hide: true
---

# Welcome to my Blog!

> Check out the <a href="./blogs">Blogs</a> tab in the header!

> Also check out the <a href="./2024/08/28/roulette_table.html">Roulette Game</a> under <a href="./blogs">Blogs</a>!

---

| Page | Description |
| ---- | ---- |
| [About]({{site.baseurl}}/about ) | Page about me and also page with peer reviews of my pages features (09/19/24) |
| [Cookie Cliker]({{site.baseurl}}/2024/09/16/cookie_clicker) | Simple cookie clicker project I worked on |
| [Calculator]({{site.baseurl}}/2024/09/16/calculator) | Calculator that outputs both binary and base-10 numbers |
| [Chip Manager]({{site.baseurl}}/2024/09/10/chips_manager) | Simple manager for poker chips |
| [Roulette Table]({{site.baseurl}}/2024/08/28/roulette_table) | Simple roulette table to bet on colors |

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
