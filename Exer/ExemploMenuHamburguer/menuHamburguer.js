const hamburguer = document.querySelector(".hamburguer");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburguer.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});

// let n1=0;
// let n2=1;

// for(let i =0;i<13;i++){
//   let resultado = n1+n2;
//   console.log(`${n1} + ${n2} = ${resultado}`)
//   n2=n1
//   n1=resultado
// }