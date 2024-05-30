const indexNavbarElement = document.getElementById('index-navbar');
const indexPageOutlet = document.getElementById('index-pageoutlet');

fetch("pages/home.html").then(res => res.text()).then(PageHTML => indexPageOutlet.innerHTML = PageHTML)

async function AppendNavbarComponent() {
    const navbarComponentHTML = await fetch("partialviews/navbar.html").then(res => res.text())
    indexNavbarElement.innerHTML = navbarComponentHTML
}

function SelectPageComponent(number) {
    if (number === 0) {
        fetch("pages/home.html").then(res => res.text()).then(PageHTML => indexPageOutlet.innerHTML = PageHTML)
    } else if (number === 1) {
        fetch("pages/features.html").then(res =>res.text()).then(PageHTML => indexPageOutlet.innerHTML = PageHTML)
    }
}

window.onload = AppendNavbarComponent

