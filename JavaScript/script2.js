// SELECTEURS
// document.querySelector("h4").style.background = "yellow";
// const baliseHtml = document.querySelector("h4");
// console.log(baliseHtml);
// baliseHtml.style.background = "yellow";

// CLICK EVENT
const questionContainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

questionContainer.addEventListener("click", () => {
  questionContainer.classList.toggle("question-clicked");
});
btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

/* <div></div> #id > .class > baliseHtml */

//-------------------------------------------------------------------------------------
// MOUSE EVENTS
const mousemove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mousemove.style.left = e.pageX + "px";
  mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
  mousemove.style.transform = "scale(2) translate(-25%,-25%)";
});

window.addEventListener("mouseup", () => {
  mousemove.style.transform = "scale(1) translate(-50%,-50%)";
  mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener("mouseenter", () => {
  questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener("mouseout", () => {
  questionContainer.style.background = "pink";
});
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//------------------------------------------------------------------------
// KEYPRESS EVENT

document.addEventListener("DOMContentLoaded", () => {
  const keypressContainer = document.querySelector(".keypress");
  const key = document.getElementById("key");

  const ring = () => {
    const audio = new Audio();
    audio.src = "./son.mp3";
    audio.play();
  };

  document.addEventListener("keypress", (e) => {
    key.textContent = e.key;

    if (e.key === "j") {
      keypressContainer.style.background = "pink";
    } else if (e.key === "h") {
      keypressContainer.style.background = "teal";
    } else {
      keypressContainer.style.background = "red";
    }
    ring();
  });
});

//--------------------------------------------------------------
// SCROLL EVENTS
const nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 120) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

//------------------------------------------------------------------
// FORM EVENTS
const inputName = document.querySelector("input[type=text]");
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

// Permet de ne pas changer de page
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form>div").innerHTML = `
    <h3>Pseudo : ${pseudo}</h3>
    <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//--------------------------------------------------------------
// load event

window.addEventListener("load", () => {});

//------------------------------------------------------------------
// FOREACH

const boxes = document.querySelectorAll(".box");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    e.target.style.transform = "scale(0.7)";
  });
});

//---------------------------------------------------------------------
// addEventListener vs onclick
// document.body.onclick = () => {};

// Bubbling
document.body.addEventListener(
  "click",
  () => {
    console.log(click1);
  },
  false
);

// Usecapture
document.body.addEventListener(
  "click",
  () => {
    console.log(click2);
  },
  true
);

// -----------------------------------------------------------------
// stop propagation
questionContainer.addEventListener("click", (e) => {
  e.stopPropagation();
});

// removeEvenlistener
// ---------------------------------------------------------------
// BOM
// window.open("hhtps://google.com", "cours js", "height=600,widht=800");
// window.close

//  Evénements adossés à window
// alert("hello")

// confirm
btn2.addEventListener("click", () => {
  confirm("Voulez vous vraiment vous tromper ?");
});

// prompt (= Alerte dans laquelle je peux entrez qlq chose)
btn1.addEventListener("click", () => {
  let answer = prompt("Entrez votre nom");
  questionContainer.innerHTML += "<h3>Bravo " + answer + "</h3>";
});

setTimeout(() => {
  // Logique è exécuter
  //   "temps en millisecondes avant de déclencher";
  questionContainer.style.borderRadius = "300px";
}, 2000);

// let interval = setInterval(() => {
//   document.body.innerHTML += `
//          <div class='box'>
//             <h2>Nouvelle Boite !</h2>
//          </div>
//      `;
// }, 1000);

document.body.addEventListener("click", () => {
  clearInterval(interval);
});

// // Location
// console.log(location.href);
// console.log(location.host);
// console.log(location.pathname);
// console.log(location.search);

// location.replace('https://lequipe.fr');
