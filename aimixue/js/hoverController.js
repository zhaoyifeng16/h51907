"use strict";window.onload=function(){for(var t=document.querySelectorAll(".hoverJ"),e=0;e<t.length;e++)t[e].onmouseenter=function(t){var e=t.target.getAttribute("aniname");t.target.classList.add("animated"),t.target.classList.add(e)},t[e].onmouseleave=function(t){var e=t.target.getAttribute("aniname");t.target.classList.remove("animated"),t.target.classList.remove(e)}};