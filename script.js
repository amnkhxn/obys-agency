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
    document.body.classList.add("no-scroll");
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
    duration:0.0001,
    onComplete: function(){
        document.body.classList.remove("no-scroll");
    }
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
function mousemagnet(){
    Shery.makeMagnet("#nav #navpart1 #svg #firstsvg, #nav #navpart2 h3");
}
function vplay(){
    var vd=document.querySelector("#video-container video");


var videoContainer=document.querySelector("#video-container");
videoContainer.addEventListener("mouseenter",function(){
    videoContainer.addEventListener("mousemove",function(dets){
        videoContainer.style.cursor="none",
        gsap.to("#crsr",{
            opacity:0
        })
        gsap.to("#play-button",{
            left:dets.x-570,
            top:dets.y-300
        })
    })
});

videoContainer.addEventListener("mouseleave",function(){
    gsap.to("#play-button",{
        left:"68%",
        top:"-12%"
    })
})




var flag=0;
videoContainer.addEventListener('click',function(){
    if(flag==0){
        vd.play();
        vd.style.opacity=1;
        document.querySelector("#play-button").innerHTML=`<i class="ri-pause-mini-line"></i>`;
        gsap.to("#play-button",{
            scale:0.5,
            
        })
        flag=1;
    } 
    else{
        vd.pause();
        vd.style.opacity=0;
        document.querySelector("#play-button").innerHTML=`<i class="ri-play-large-fill"></i>`;
        gsap.to("#play-button",{
            scale:1,
            
        })
        flag=0;
    }
})
}
function sheryanimate(){
    Shery.imageEffect(".image-div",{
        style:5,
        config:{"a":{"value":2,"range":[0,30]},"b":{"value":1,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7615719672344299},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0,"range":[0,10]},"metaball":{"value":0.52,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":6.87,"range":[0,100]}},
        gooey:true,
    })
}
var trgt=document.querySelector("#hero3");
var flgg=document.querySelector("#flag");
trgt.addEventListener("mouseenter",function(){
    gsap.to("#flag",{
        opacity:1
    })
})
trgt.addEventListener("mouseleave",function(){
    gsap.to("#flag",{
        opacity:0
    })
})
document.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
        left:dets.x,
        top:dets.y
    })
})


mousemagnet();
sheryanimate();
vplay();
lcmt();
loader();




