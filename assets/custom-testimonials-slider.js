// initialize slideshow

// config:
// assume there is just one single slider on the page
const slideshow_container = document.querySelector(".testimonial-slider");
const slider = new Flickity(slideshow_container, {
    // the slides or cells should be aligned to the left side on initialization.
    cellAlign: "left",
    // infinite loop
    wrapAround: true,
    // no autoplay
    autoPlay: false,
    // pauseAutoPlayOnHover: false
    pauseAutoPlayOnHover: false,
    // navigation dots should be disabled
    pageDots: false,
    fullscreen: true,
});
