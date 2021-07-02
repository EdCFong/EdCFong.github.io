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

const tl_titleDown = gsap.timeline();
const tl_fixedTitle = gsap.timeline();

tl_titleDown.to("#presentationMessage", { yPercent: 90, duration: 2, ease: "slow" })
    .to("#presentationMessage h3", { opacity: 0, duration: 0.5 }, 0.3);

tl_fixedTitle.to("#presentationMessage", { opacity: 0, duration: 0.5 })
    .to("#head nav h1", { opacity: 1, duration: 0.5 }, 0.3)


ScrollTrigger.create({
    animation: tl_titleDown,
    trigger: "#presentationMessage h1",
    start: "top top",
    end: "top top",
    scrub: 0.3
});

ScrollTrigger.create({
    animation: tl_fixedTitle,
    trigger: "#container",
    start: "top 50%",
    end: "top top", 
    scrub: 0.3
});


gsap.from("#head li", {
    duration: 1.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
  });

gsap.from("#presentationMessage", {xPercent:-100, duration: 0.7, ease:"customPower0"})


//   ###########################################################################################
//   Me

//   ###########################################################################################

const tl_Me = gsap.timeline();
tl_Me.from("#whoIam", {opacity:0, duration: 1.7, ease:"slow"})
.from("#skillsSection", {opacity:0, duration: 1.7, ease:"slow"},0.5)

ScrollTrigger.create({
    animation: tl_Me,
    trigger: "#whoIam img",
    start: "top 80%",
    end: "top 80%", 
    scrub: 1.5
});



//   ###########################################################################################
//   Certifications

//   ###########################################################################################

const tl_Certifications = gsap.timeline();
tl_Certifications.from("#certifications", {xPercent:140, duration: 0.7, ease:"customPower0"})

ScrollTrigger.create({
    animation: tl_Certifications,
    trigger: "#certifications",
    start: "top center",
    end: "top 80%", 
    scrub: 1.5
});




//   ###########################################################################################
//   Projects

//   ###########################################################################################

const tl_Projects = gsap.timeline();
tl_Projects.from("#projectsSection", {xPercent:-140, duration: 0.7, ease:"customPower0"})

ScrollTrigger.create({
    animation: tl_Projects,
    trigger: "#projectsSection",
    start: "top center",
    end: "top 80%", 
    scrub: 1.5
});



//   ###########################################################################################
//   Footer

//   ###########################################################################################

const tl_Information = gsap.timeline();

tl_Information.from("#social_media_box div", {
    duration: 2,
    scale: 0.5,  
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
    force3D: true
  });

  ScrollTrigger.create({
    animation: tl_Information,
    trigger: "#social_media_box",
    start: "bottom bottom",
    end: "bottom 60%", 
    scrub: 2.5
});

//document.querySelector(".social_media").hover