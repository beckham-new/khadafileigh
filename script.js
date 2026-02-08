/* =========================
   PASSWORD
========================= */
const correctPassword = "me";


document.addEventListener("DOMContentLoaded", () => {

  const lockscreen = document.getElementById("lockscreen");
  const menu       = document.getElementById("menu");
  const password   = document.getElementById("password");
  const error      = document.getElementById("error");


  /* =========================
     AUTO UNLOCK (NO LOGIN LAGI)
  ========================= */
  if(localStorage.getItem("unlocked") === "true"){
    showMenu();
  } else {
    showLock();
  }


  /* =========================
     PASSWORD CHECK
  ========================= */
  window.checkPassword = function(){

    if(password.value === correctPassword){

      localStorage.setItem("unlocked", "true");

      showMenu();

    } else {

      error.textContent = "Wrong password baby 💔";
      password.value = "";
      password.focus();

    }
  };


  /* =========================
     SMOOTH PAGE TRANSITION
  ========================= */
  document.querySelectorAll("a").forEach(link => {

    const target = link.getAttribute("href");

    if(target && !target.startsWith("#") && !target.startsWith("http")){

      link.addEventListener("click", e => {
        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = target;
        }, 600);
      });

    }
  });


  /* =========================
     ⭐ STAR GENERATOR
  ========================= */
  const starsContainer = document.getElementById("stars");

  if(starsContainer){
    for(let i = 0; i < 120; i++){

      const star = document.createElement("div");
      star.className = "star";

      star.style.top  = Math.random()*100 + "%";
      star.style.left = Math.random()*100 + "%";

      star.style.animationDelay    = Math.random()*3 + "s";
      star.style.animationDuration = (2 + Math.random()*4) + "s";

      const size = 1 + Math.random()*3;
      star.style.width  = size + "px";
      star.style.height = size + "px";

      starsContainer.appendChild(star);
    }
  }


  /* =========================
     HELPERS
  ========================= */

  function showMenu(){
    lockscreen.style.display = "none";
    menu.style.display = "flex";
  }

  function showLock(){
    lockscreen.style.display = "flex";
    menu.style.display = "none";

    password.value = "";
    error.textContent = "";

    setTimeout(() => password.focus(), 200);
  }

});


/* =========================
   LOGOUT / BACK TO LOCK
========================= */
function logout(){
  localStorage.removeItem("unlocked");
  location.reload();
}

function goBackLock(){

  const lock = document.getElementById("lockscreen");
  const menu = document.getElementById("menu");
  const pass = document.getElementById("password");
  const error = document.getElementById("error");

  menu.style.display = "none";
  lock.style.display = "flex";

  pass.value = "";
  error.textContent = "";

  pass.focus();
}
