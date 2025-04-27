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
    delay:3,
})

tl.from("#page1",{
    y:1600,
    delay:0.2,
    duration:.5,
    opacity:0,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})