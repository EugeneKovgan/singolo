console.log("hello");
const MENU = document.getElementById("menu");
const HEAD_NAV = document.getElementById("head_nav");
const BUTTON = document.getElementById("button");
const CLOSE_BUTTON = document.getElementById("close-button");
// const subject = document.getElementById("subject").value.toString();
const PORTFOLIO = document.getElementById("portfolio_img");

MENU.addEventListener("click", (event) => {
    MENU.querySelectorAll("a").forEach(el => el.classList.remove("active"));
    event.target.classList.add("active");
});


HEAD_NAV.addEventListener("click", (event) => {
    HEAD_NAV.querySelectorAll("button").forEach(el => el.classList.remove("active"));
    event.target.classList.add("active");
});

PORTFOLIO.addEventListener("click", (event) => {
    PORTFOLIO.querySelectorAll("img").forEach(el => el.classList.remove("boarder"));
    event.target.classList.add("boarder");
});

// BUTTON.addEventListener("click", () => {
//    document.getElementById("result").innerText = subject;
//    document.getElementById("message-block").classList.remove("hidden");
// });


// CLOSE_BUTTON.addEventListener("click", () => {
//     document.getElementById("result").innerText = "";
//     document.getElementById("message-block").classList.add("hidden");
// });
