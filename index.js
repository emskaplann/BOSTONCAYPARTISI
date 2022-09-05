console.log("merhabalar amk");

fetch("https://api.countapi.xyz/get/bostonCayPartisi/ziyaretSayisi")
    .then((response) => response.json())
    .then((data) => document.getElementById("ziyaretSayisi").innerHTML = data.value + 1);

fetch("https://api.countapi.xyz/hit/bostonCayPartisi/ziyaretSayisi")
    .then((response) => response.json())
    .then((data) => console.log("ehehe arrtitrdirdikxD"));