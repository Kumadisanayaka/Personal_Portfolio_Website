let tablinks = document.getElementsByClassName("tab-link");
let tabcontent = document.getElementsByClassName("tab-content");

function opentab(tabname) {

    for (let link of tablinks) {
        link.classList.remove("active-link");
    }

    for (let content of tabcontent) {
        content.classList.remove("active-tab");
    }

  event.currentTarget.classList.add("active-link");

  document.getElementById(tabname).classList.add("active-tab");
}

let sideMenu = document.getElementById("sideMenu");

function openMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-250px";
}