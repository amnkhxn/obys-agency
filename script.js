function lcmt(){
    gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  }
function loader(){
    var tl=gsap.timeline();


tl.from(".line h1",{
    y:300,
    stagger:0.2,
    duration:0.6,
    delay:0.5
})


tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var timer=document.querySelector(".line #line1-part1 h5");
        var grow=0;
        setInterval(function(){
            if(grow<100){
                timer.innerHTML=grow++;
            }
            else{
                timer.innerHTML=grow;
            }
        },30)
    }
})

tl.to(".line h2",{
    animationName:"anime",
    opacity:0
})

tl.to("#loader",{
    opacity:0,
    duration:.2,
    delay:2.2,
})

tl.from("#page1",{
    y:1600,
    // delay:0.2,
    duration:.4,
    opacity:0,
    ease:Power4
})

tl.to("#loader",{
    display:"none",
    duration:0.0001
},"<")

tl.from(".hero h1,#hero3 h2",{
    delay:0.2,
    y:150,
    stagger:0.2,
},"<")

tl.from("#nav",{
    opacity:0,
    duration:2,
    delay:0.5
},"<")
tl.to("#main",{
    backgroundColor:"#151515",
    duration:1
},"<")
}
function crsrmgnt(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#crsr",{
            left:dets.x,
            top:dets.y
        })
    })
    
    Shery.makeMagnet("#nav #navpart1 #svg #firstsvg, #nav #navpart2 h3", {});
}
lcmt();
loader();
crsrmgnt();


