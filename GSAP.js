CustomEase.create("customPower0", "M0,0 C0.083,0.294 0.122,0.82 0.388,1.01 0.477,1.073 0.497,0.989 0.684,0.968 0.742,0.961 0.803,0.988 0.86,1 0.887,1.005 0.96,1.014 1,1 ")
gsap.registerPlugin(ScrollTrigger);



//   ###########################################################################################
//   Certifications

//   ###########################################################################################   

var animationTime = 0.8;
var dotColor = "#000000";
// Dot 0 *************************************************************************************** 
//Activate dot
var dot1Activate = gsap.to("#dot0", {
    duration: 0.3,
    backgroundColor: dotColor,
    ease: "power4",
});
//play animation
document.querySelector("#dot0").onclick = () => {
    dot1Activate.play();
    dot2Activate.reverse();
    gsap.to("#boardContainer", { duration: animationTime, xPercent: 0, ease: "customPower0" });
}

// Dot 1 ************************************************************************************* 
//Activate dot
var dot2Activate = gsap.to("#dot1", {
    duration: 0.3,
    backgroundColor: dotColor,
    ease: "power4",
    paused: true
});
//play animation
document.querySelector("#dot1").onclick = () => {
    dot2Activate.play();
    dot1Activate.reverse();
    gsap.to("#boardContainer", { duration: animationTime, xPercent: -100, ease: "customPower0" });
}





//   ###########################################################################################
//   Head

//   ###########################################################################################   

const tl = gsap.timeline({ defaults: { duration: 1 } });
tl.to("#presentationMessage", { yPercent: 90, xPercent: -40  })
    .to("#presentationMessage h3", { opacity: 0, duration: 0.5 }, 0.3)
    //.to("#presentationMessage", { opacity: 0 }, 2)
   // .to("#head nav h1", {opacity:1}, 1.5)


ScrollTrigger.create({
    animation: tl,
    trigger: "#presentationMessage h1",
    start: "top top",
    end: "top top",
    scrub: 0.5
});