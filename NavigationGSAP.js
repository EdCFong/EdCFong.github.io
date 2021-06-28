gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
tl.to("#presentationMessage", {yPercent: 90, xPercent:-40, duration:1})


ScrollTrigger.create({
animation: tl,
trigger: "#presentationMessage h1",
start: "top top",
end: "top top",
scrub: 2,
markers: true
});