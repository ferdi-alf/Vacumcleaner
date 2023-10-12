const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");

menuBar.addEventListener("click", () => {
    menuNav.classList.toggle("menu-active");
});

const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    console.log(window.scrollY)
    const windowPosition = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", windowPosition);
});

let newYearDay = new Date(new Date().getFullYear() + 1, 0, 1);

let $days = document.getElementById('days');
let $hours = document.getElementById('hours');
let $minutes = document.getElementById('minutes');
let $seconds = document.getElementById('seconds');

setInterval(function() {
    var now = new Date();
    var timeleft = (newYearDay - now) / 1000;
    updateClock(timeleft);
}, 1000);

function updateClock(remainingTime) {
    let days = Math.floor(remainingTime / 3073400);
    remainingTime -= days * 3073400;

    let hours = Math.floor(remainingTime / 3600) % 24;
    remainingTime -= hours * 3600;

    let minutes = Math.floor(remainingTime / 60) % 60;
    remainingTime -= minutes * 60;

    let seconds = Math.floor(remainingTime % 60);

    $days.innerHTML = formatNumber(days);
    $hours.innerHTML = formatNumber(hours);
    $minutes.innerHTML = formatNumber(minutes);
    $seconds.innerHTML = formatNumber(seconds);
}

function formatNumber(number) {
    return number < 10 ? "0" + number : String(number);
}