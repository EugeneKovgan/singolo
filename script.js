console.log("hello");
const MENU = document.getElementById("menu");
const HEAD_NAV = document.getElementById("head_nav");
const SERVICE = document.getElementById("service");
const PORTFOLIO = document.getElementById("portfolio");




const BUTTON = document.getElementById("button");
const CLOSE_BUTTON = document.getElementById("close-button");
const SUBMIT = document.getElementById(".input_information submit");

// const subject = document.getElementById("subject").value.toString();



// buttons active

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

//nav


const ANCHORS = document.querySelectorAll("a[href*='#']")

for (let anchor of ANCHORS) {
    anchor.addEventListener("click", event => {
        event.preventDefault()
        const blockID = anchor.getAttribute("href").substr(1)
        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}
 //random

 HEAD_NAV.addEventListener("click", (event) => {
	var arrOfSrc = [];
	var arrOfPic = ["img_1", "img_2", "img_3", "img_4", "img_5", "img_6", "img_7", "img_8", "img_9", "img_10", "img_11", "img_12"];
	for (var i = 0; i < arrOfPic.length; i++) {
		arrOfSrc.push(document.getElementById(arrOfPic[i]).src)
	}
	for (var i = arrOfSrc.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arrOfSrc[i];
        arrOfSrc[i] = arrOfSrc[j];
        arrOfSrc[j] = temp;
    }
    for (var i = 0; i < arrOfPic.length; i++) {
    	document.getElementById(arrOfPic[i]).src = arrOfSrc[i]
    }
})

 
//scroll


//slider

let items = document.querySelectorAll(".slider");
let currentItem = 0;
let isEnabled = true;

function changeCurrentItem(n) {
    currentItem = (n + items.length) % items.length;
}

function hideItem(direction) {
    isEnabled = false;
    items[currentItem].classList.add(direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("active", direction);
    })
}

function showItem(direction) {
    items[currentItem].classList.add("next", direction);
    items[currentItem].addEventListener("animationend", function() {
        this.classList.remove("next", direction);
        this.classList.add("active");
        isEnabled = true;
    })
}

function previousItem(n) {
    hideItem("to-right");
    changeCurrentItem(n - 1);
    showItem("from-left");
}

function nextItem(n) {
    hideItem("to-left");
    changeCurrentItem(n + 1);
    showItem("from-right");
}
document.querySelector(".arrow_right").addEventListener("click", function() {
    if (isEnabled) {
        previousItem(currentItem)
    }
});
document.querySelector(".arrow_left").addEventListener("click", function() {
    if (isEnabled) {
        nextItem(currentItem)
    }
});

//tel_scr

const LEFT_MOBILE_CONTROL = document.querySelector("#phone_button_vert");
const RIGHT_MOBILE_CONTROL = document.querySelector("#phone_button_hor");

LEFT_MOBILE_CONTROL.onclick = () => {
  const BLACK_MIRROR = document.querySelector("#tel_vert_off");

  if (BLACK_MIRROR.classList.contains("screen_on")) {
    BLACK_MIRROR.classList.remove("screen_on");
  } else {
    BLACK_MIRROR.classList.add("screen_on");
  }
};

RIGHT_MOBILE_CONTROL.onclick = () => {
  const BLACK_MIRROR = document.querySelector("#tel_hor_off");

  if (BLACK_MIRROR.classList.contains("screen_on")) {
    BLACK_MIRROR.classList.remove("screen_on");
  } else {
    BLACK_MIRROR.classList.add("screen_on");
  }
};


//form
