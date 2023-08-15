
function light() {
  
  var theme = document.getElementsByTagName('link')[2];

  if (theme.getAttribute('href') == 'css/light.css') {
      theme.setAttribute('href', 'css/dark.css');
  } else {
      theme.setAttribute('href', 'css/light.css');
  }
};

const cursorDot=document.querySelector("[data-cursor-dot]");
const cursorOutline=document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",function(e){

  const posX = e.clientX;
  const posY = e.clientY;

  cursorDot.style.left=`${posX}px`;
  cursorDot.style.top=`${posY}px`;

  // cursorOutline.style.left=`${posX}px`;
  // cursorOutline.style.top=`${posY}px`;

  cursorOutline.animate({
    left: `${posX}px`,
    top: `${posY}px`
  }, {duration:500, fill: "forwards" });

});

let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = ()=>{
  sections.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top>= offset && top< offset + height){
        navLinks.forEach(links=>{
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        })
    };
  });

  let header = document.querySelector('header');

  header.classList.toggle('sticky',window.scrollY>100);

  
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

ScrollReveal({
  // reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading ', { origin: 'top' });
ScrollReveal().reveal('.home-img, .education-row, .skills-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .education-row', { origin: 'left' });
ScrollReveal().reveal('.home-content p', { origin: 'right' });


// typed
const typed= new Typed('.multiple-text',{
    strings: ['Full-Stack Developer','Public Speaker'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop:true
});
