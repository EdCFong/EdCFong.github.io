function PageNotReady_message() {
    alert("Coming soon. This site is under construction");
}




// intersection observer API ################################
// Documentation: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API 

// Set things up
let target;
let prevRatio = 0.0;
let titleEduardo = document.querySelector("#presentationMessage h1");
window.addEventListener("load", (event) => {
    target = document.querySelector("#head");

    createObserver();
}, false);


//Creating the intersection observer
function createObserver() {
    let observer;

    let options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };

    observer = new IntersectionObserver(handleIntersect, options);
    observer.observe(target);
}


//Handling intersection changes
function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
        if(entry.intersectionRatio > prevRatio)
        {
            titleEduardo.style.backgroundColor = "rgb(0, 102, 255)";
        }
        else
        {
            titleEduardo.style.backgroundColor = "red";
        }
        prevRatio = entry.intersectionRatio;
    });
}