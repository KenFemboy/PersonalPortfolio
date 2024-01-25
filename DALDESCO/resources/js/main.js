function checkViewportWidth() {
    let menu = document.getElementById("menu")
    let content = document.body
    let copyright = document.getElementById("copyright")
    if (menu.style.left == "-100%" || menu.style.left == "-360px") {
        if (menu.clientWidth == 360) {
            menu.style.left = "-360px"
        }
        else {
            menu.style.left = "-100%"
        }
    }
    if (content.clientWidth < 1196) {
        document.getElementById("footer_container").appendChild(copyright)
    }
    if (content.clientWidth >= 1196) {
        document.getElementById("footer_socials").appendChild(copyright)
    }
}
function disableHyperlinkDrag() {
    for (const anchor of document.getElementsByTagName("a")) {
        anchor.draggable = false
    }
}
function transformIcon(icon) {
    icon.classList.toggle("transform_icon")
}
function showMenu() {
    let menu = document.getElementById("menu")
    let content = document.body
    if (menu.style.left == "0px") {
        if (menu.clientWidth == 360) {
            menu.style.left = "-360px"
        }
        else {
            menu.style.left = "-100%"
        }
        content.style.overflow = "scroll"
    }
    else {
        menu.style.left = "0px"
        content.style.overflow = "hidden"
    }
}
function enterMenu() {
    if (event.code == "Enter" || event.code == "NumpadEnter") {
        transformIcon(document.getElementById("menu_icon"))
        showMenu()
    }
}
window.addEventListener("load", () => {
    checkViewportWidth()
    disableHyperlinkDrag()
})
window.addEventListener("resize", () => {
    checkViewportWidth()
})