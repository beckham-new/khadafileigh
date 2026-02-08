const message = `
My love,

Thank you for existing in my life.

Every little moment with you,
every laugh,
every silence,
every memory we share —
means more than you could ever imagine.

This small website is only a tiny piece
of how much you mean to me.

And if someday you feel tired,
lost, or unsure...

remember this:

You are loved.
Always.

— Movel ❤️
`;

const speed = 35; // smaller = faster typing

const el = document.getElementById("typewriter");

let i = 0;

function typeWriter(){
  if(i < message.length){
    el.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", () => {
  typeWriter();
});
