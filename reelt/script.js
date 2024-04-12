function init(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init ()

gsap.from(".nav ",{
    duration:1,
    opacity:0,
    ease: "expo.out",
    y:200
})



var t1 = gsap.timeline({
    scrollTrigger:{
        trigger:".text1",
        scroller:".main",
        start:"top 40%",
        end:"top 0%",
        scrub:1
    }
})

t1.to(".text1",{
    y:257
})

var t2 = gsap.timeline({
    scrollTrigger:{
        trigger:".text5",
        scroller:".main",
        start:"top 10%",
        end:"top 0%",
        scrub:3
    }
})

t2.to(".text5 h1",{
    x:257
},'a')
t2.to(".text5 h2",{
    x:-257
},'a')


var t3 = gsap.timeline({
    scrollTrigger:{
        trigger:".text6",
        scroller:".main",
        start:"top 10%",
        end:"top 0%",
        scrub:3
    }
})

t3.to(".text6 h1",{
    x:257
},'a')
t3.to(".text6 h2",{
    x:-257
},'a')






