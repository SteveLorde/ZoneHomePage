let indexNavbarElement = document.getElementById("index-navbar");
let indexPageOutlet = document.getElementById("pageoutlet");



function AppendNavbarComponent() {
    fetch("partialviews/navbar.html").then(res => res.text()).then(navbarHTML => indexNavbarElement.innerHTML = navbarHTML)
}


export function SelectPageComponent(number) {
    if (number === 0) {
        fetch("pages/home.html").then(res =>res.text()).then(PageHTML => indexPageOutlet.innerHTML = PageHTML)
    } else if (number === 1) {
        fetch("pages/features.html").then(res =>res.text()).then(PageHTML => indexPageOutlet.innerHTML = PageHTML)
    }
}