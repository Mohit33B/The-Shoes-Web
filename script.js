const hamburgermenu = document.querySelector("#hamburger-menu");
const header = document.querySelector("#header");

hamburgermenu.addEventListener("click", () => {
  hamburgermenu.classList.toggle("active");
});

var tl = gsap.timeline()

tl.from('header a',{
  y: -50,
  opacity:0,
  duration:1
})
// tl.from('#tag',{
//   y: -30,
//   opacity:0,
//   duration:1,
//   delay:1,
//   stagger: 0.3
// })


tl.from("#hero h1", {
  y: -80,
  opacity:0,
  delay:1,
  duration: 1,
  scale:0.2
});

// tl.from('.bg-cover',{
//   y:-30,
//   opacity:0,
//   delay:1,
//   duration:0.5
// })

tl.from('#hero img',{
  y: -50,
  opacity:0,
  delay:0,
  rotate: 30,
  duration:1,
  scale:0.5
})

// +++++++++++++ how to works+++++++++++++++++

tl.from('#how-it-works h2',{
  opacity: 0,
  duration:2,
  y:500,
  scrollTrigger:{
    trigger:'#how-it-works h2',
    scroller:'body',
    markers:true,
    start: 'top 60%'
  }
})

// +++++++++++++ about +++++++++++++++++++
tl.from('#about h2',{
  scale: 0.5,
  delay:2,
  duration:1,
  scrollTrigger:{
    trigger:'#about h2',
    scroller:'body',
    markers:true,
    start: 'top 60%'
  }
})