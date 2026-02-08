const correctPassword = "me"; // change this password if needed

document.addEventListener("DOMContentLoaded", () => {

  const lockscreen = document.getElementById("lockscreen");
  const menu = document.getElementById("menu");

  /* =========================
     AUTO UNLOCK (NO RELOGIN)
  ========================= */
  if(localStorage.getItem("unlocked") === "true"){
    if(lockscreen) lockscreen.style.display = "none";
    if(menu) menu.style.display = "flex";
  }

  /* =========================
     PASSWORD CHECK
  ========================= */
  window.checkPassword = function(){
    const input = document.getElementById("password").value;
    const error = document.getElementById("error");

    if(input === correctPassword){
      localStorage.setItem("unlocked", "true");

      lockscreen.style.display = "none";
      menu.style.display = "flex";
    } else {
      error.textContent = "Wrong password baby";
    }
  };

  /* =========================
     SMOOTH PAGE TRANSITION
  ========================= */
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    const target = link.getAttribute("href");

    if(target && !target.startsWith("#") && !target.startsWith("http")){
      link.addEventListener("click", function(e){
        e.preventDefault();

        document.body.classList.add("fade-out");

        setTimeout(() => {
          window.location.href = target;
        }, 900); // sync with CSS
      });
    }
  });

});

/* =========================
   OPTIONAL: LOGOUT / LOCK
========================= */
function logout(){
  localStorage.removeItem("unlocked");
  location.reload();
}
