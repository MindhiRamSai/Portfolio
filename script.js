let light = document.querySelector(".sun")
let night = document.querySelector(".moon")
let mode = document.querySelector(".Mode")
let list = document.querySelector(".list")
let remove = document.querySelector(".close")
let menu = document.querySelector(".Menu")
let links = document.querySelectorAll(".links")

window.addEventListener('DOMContentLoaded', function () {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
        document.body.classList.add("Dark");
        light.style.visibility = "hidden";
        night.style.visibility = "visible";
        mode.style.backgroundColor = "black";
    } else {
        document.body.classList.remove("Dark");
        light.style.visibility = "visible";
        night.style.visibility = "hidden";
        mode.style.backgroundColor = "transparent";
    }
});


light.addEventListener('click', function () {
    light.style.visibility = "hidden"
    night.style.visibility = "visible"
    mode.style.backgroundColor = "black"
    document.body.classList.add("Dark")
    localStorage.setItem("theme", "dark");
})

night.addEventListener('click', function () {
    night.style.visibility = "hidden"
    light.style.visibility = "visible"
    document.body.classList.remove("Dark")
    mode.style.backgroundColor = "transparent"
    localStorage.setItem("theme", "light");
})

list.addEventListener('click', function () {
    menu.style.display = "flex"
    remove.style.display = "flex"
    list.style.display = "none"
})
remove.addEventListener('click', function () {
    menu.style.display = "none"
    remove.style.display = "none"
    list.style.display = "flex"
})

links.forEach(function (link) {
    link.addEventListener('click', function () {
        if (window.innerWidth < 426) {
            menu.style.display = "none"
            remove.style.display = "none"
            list.style.display = "flex"
        }
    })
})
