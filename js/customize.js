gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray(".slider-item");
let sliderEle = document.querySelector(".slider-item");
let guideboxs = document.querySelector(".guide-box");
let earthBackground = document.querySelector(".earth-background");

ScrollTrigger.matchMedia({
  "(maxn-width: 768px)": function () {
    ///Mouse Drag
    console.log("Hello");
    var isMouseDown = false;
    document.onmousedown = function () { isMouseDown = true };
    document.onmouseup = function () { isMouseDown = false };
    // document.onmousemove = function() { if(isMouseDown) {
    //   console.log(isMouseDown);
    //   gsap.to(sections, { xPercent: -100 * (sections.length - 1),});
    // } };

    //Mouse Scroll
    gsap.to(sections, {
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
    ///Mouse Drag
    var isMouseDown = false;
    document.onmousedown = function () { isMouseDown = true };
    document.onmouseup = function () { isMouseDown = false };
    // document.onmousemove = function() { if(isMouseDown) {
    //   console.log(isMouseDown);
    //   gsap.to(sections, { xPercent: -100 * (sections.length - 1),});
    // } };

    //Mouse Scroll
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      // ease: "none",
      scrollTrigger: {
        // trigger: ".earth-section",
        trigger: ".chip-horizontal-slider",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: () => {
          const guideLineHeight = (document.documentElement.clientHeight - document.querySelector(".chip-horizontal-slider .slider-container").offsetHeight) / 2;
          document.querySelector(".earth-slider-pos-container.top").style.height = guideLineHeight + "px";
          document.querySelector(".earth-slider-pos-container.down").style.height = guideLineHeight + "px";
          return "-" + (document.documentElement.clientHeight - document.querySelector(".chip-horizontal-slider").offsetHeight) / 2;
          // return "top -" + (document.querySelector(".chip-introduction").offsetHeight + 221);
        },
        end: () => "+=" + document.querySelector(".chip-horizontal-slider").offsetWidth * (sections.length - 1)
        // end: "+=10000"
      }
    });

    // guide_box = ".guide-box";
    // timeline1 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.chip-horizontal-slider',
    //     scrub: 1,
    //     end: "+=" + document.querySelector(".chip-horizontal-slider").offsetWidth * (sections.length - 1),
    //     pin: true
    //   }
    // });
    // timeline1.to(guide_box, { y: () => (document.documentElement.clientHeight - document.querySelector(".chip-horizontal-slider .slider-container").offsetHeight) / 2 - 15 })
  }
});
