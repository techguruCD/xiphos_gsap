gsap.registerPlugin(ScrollTrigger);
const tl = gsap.timeline();

let sections = gsap.utils.toArray(".slider-item");
let sliderEle = document.querySelector(".slider-item");
let guideboxs = document.querySelector(".guide-box");
let earthBackground = document.querySelector(".earth-background");

let fadeInUps = gsap.utils.toArray(".fade-in-up");

tl.to('.title-fade-in', {
  x: 0,
  opacity: 1,
  duration: 0.5,
})
gsap.timeline().to('.subtitle-fade-in', {
  x: 0,
  opacity: 1,
  duration: 0.5,
})

gsap.timeline().to('.earth-section', {
  // y: 0,
  opacity: 1,
  duration: 1
}).to('.title-image', {
  opacity: 1,
  duration: 1
})


ScrollTrigger.matchMedia({
  "(maxn-width: 768px)": function () {
    //Mouse Scroll
    tl.to(sections, {
      xPercent: -100 * 3.2,
      ease: "none",
      scrollTrigger: {
        trigger: ".chip-horizontal-slider",
        pin: true,
        scrub: 1,
        snap: 0,
        end: () => "+=" + document.querySelector(".chip-horizontal-slider").offsetWidth
      }
    });
  },
  "all": function () {
    //Mouse Scroll
    const scrollTrigger = {
      trigger: ".chip-horizontal-slider",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      start: () => {
        const guideLineHeight = (document.documentElement.clientHeight - document.querySelector(".chip-horizontal-slider .slider-container").offsetHeight) / 2;
        document.querySelector(".earth-slider-pos-container.top").style.height = guideLineHeight + "px";
        document.querySelector(".earth-slider-pos-container.down").style.height = guideLineHeight + "px";
        return "0";
      },
      end: () => "+=" + document.querySelector(".chip-horizontal-slider").offsetWidth * (sections.length - 1)
    }

    tl.to(sections, {
      xPercent: -100 * (sections.length - 1),
      // ease: "none",
      scrollTrigger
    });

    tl.to(".guide-box", {
      y: () => (document.documentElement.clientHeight - document.querySelector(".chip-horizontal-slider .slider-container").offsetHeight) / 2 - 15,
      scrollTrigger
    })

    gsap.timeline({
      scrollTrigger: {
        trigger: '.whatdo-section',
        scrub: 1,
        end: "+=" + document.querySelector(".whatdo-section").offsetWidth,
        pin: false
      }
    }).to('.whatdo-section', { opacity: 1 })

    timeline3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.application-section',
        scrub: 1,
        end: "+=" + document.querySelector(".application-section").offsetWidth,
        pin: true
      }
    })
    timeline3.to('.application-section', { opacity: 1 });


    gsap.timeline({
      scrollTrigger: {
        trigger: '.application-section',
        scrub: 1,
        end: "+=" + document.querySelector(".application-section").offsetWidth,
        pin: true
      }
    })
      .fromTo('.search-exploration', { x: 300, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo('.launches', { x: 300, opacity: 0 }, { x: 0, opacity: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.application-section',
        scrub: 1,
        end: "+=" + document.querySelector(".application-section").offsetWidth,
        pin: true
      }
    })
      .fromTo('.earth-orbit-title', { x: -300, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo('.earth-orbit-description', { x: -300, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo('.earth-orbit-image', { x: -300, opacity: 0 }, { x: 0, opacity: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.xiphos-section',
        scrub: 1,
        start: "top 100",
        end: "+=" + document.querySelector(".xiphos-section").offsetWidth,
        pin: true
      }
    })
      .fromTo('.xiphos-left-section', { x: -300, opacity: 0 }, { x: 0, opacity: 1 });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.xiphos-section',
        scrub: 1,
        start: "top 100",
        end: "+=" + document.querySelector(".xiphos-section").offsetWidth,
        pin: true
      }
    })
      .fromTo('.xiphos-right-section', { x: 300, opacity: 0 }, { x: 0, opacity: 1 })
      .fromTo('.xiphos-down-section', { opacity: 0 }, { opacity: 1 });
  }
});


document.addEventListener('DOMContentLoaded', () => {
  console.error("asdasdfasdf");
  const animButtons = document.querySelectorAll('.btn-anim');
  animButtons.forEach((button, index) => {
    // const dot = button.querySelector('.dot');
    // const buttonRect = button.getBoundingClientRect();
    button.addEventListener('mousemove', (event) => {
      const buttonContainer = event.target;
      const buttonRect = buttonContainer.getBoundingClientRect();
      const dot = buttonContainer.querySelector('.dot');
      const mouseX = event.clientX - buttonRect.left;
      const dotPosition = Math.min(Math.max(mouseX, 15), buttonRect.width - 15);
      dot.style.left = dotPosition + 'px';
    });
    // button.addEventListener('mouseleave', (event) => {
    //   const dot = event.target.querySelector('.dot');
    //   dot.style.left = '20%';
    // })
  })
})

function k() {
  // gsap.set(".container", { perspective: 800 });

  const images = gsap.utils.toArray(".image");
  const tl = gsap.timeline();

  images.forEach((image, index) => {
    const row = Math.floor(index / 2); // Determine the row

    tl.fromTo(
      image,
      { opacity: 0, rotation: 0, x: -100, y: -100 },
      {
        duration: 1.5,
        opacity: 1,
        rotation: (row % 2 === 0) ? -5 : 10, // Alternate between clockwise and counterclockwise rotations per row
        x: ((index % 2) * 300) + (row % 2 === 0 ? 40 : 110), // Arrange in two columns with slight offsets
        y: row * 300, // Arrange in rows
        ease: "power2.out", // Optional easing function for animation
      },
      index * 0.5 // Stagger each animation by 0.5 seconds
    );
  });

  //letter effect
  const textContainer = document.getElementById('textContainer');
  const partt = gsap.timeline();
  partt.fromTo(
    textContainer.querySelectorAll('div'),
    { opacity: 0 },
    { opacity: 1, duration: 4, stagger: 0.1 }
  );
  partt.play();

  //letter effect2
  const textContainer2 = document.getElementById('textContainer2');
  const partt2 = gsap.timeline();
  partt2.fromTo(
    textContainer2.querySelectorAll('div'),
    { opacity: 0 },
    { opacity: 1, duration: 1, stagger: 0.1 }
  );
  partt2.play();

  //letter effect3
  const textContainer3 = document.getElementById('textContainer3');
  const partt3 = gsap.timeline();
  partt3.fromTo(
    textContainer3.querySelectorAll('div'),
    { opacity: 0 },
    { opacity: 1, duration: 5, stagger: 0.1 }
  );
  partt3.play();

  //letter effect3
  const textContainer4 = document.getElementById('textContainer4');
  const partt4 = gsap.timeline();
  partt4.fromTo(
    textContainer4.querySelectorAll('div'),
    { opacity: 0 },
    { opacity: 1, duration: 6, stagger: 0.1 }
  );
  partt4.play();


  // let t1 = gsap.timeline();

  // t1.from(".top-line", {
  //   duration: 5,
  //   width: 0,
  //   marginLeft: 400
  // });

  // let t2 = gsap.timeline();

  // t2.from(".top-left", {
  //   delay: 5,
  //   duration: 5,
  //   height: 0,
  //   marginTop: 0
  // });

  // let t3 = gsap.timeline();

  // t3.from(".top-bottom", {
  //   delay: 10,
  //   duration: 5,
  //   width: 0,
  //   marginRight: 1400,
  //   marginLeft: "-250px",
  //   marginTop: 131
  // });

  // let t4 = gsap.timeline();

  // t4.from(".top-right", {
  //   delay: 15,
  //   duration: 5,
  //   height: 0,
  // });

  // let t5 = gsap.timeline();

  // t5.from(".top-line1", {
  //   delay: 20,
  //   duration: 5,
  //   width: 0,
  //   marginLeft: 1000,
  //   marginRight: "-200px"
  // });
}
k();
