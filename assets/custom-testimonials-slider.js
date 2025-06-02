// initialize slideshow

// Select all elements with the class 'testimonial-slider'
const slideshow_container = document.querySelectorAll(".testimonial-slider");

// Loop through each and create a Flickity instance
slideshow_container.forEach((slide) => {
    // Get the data attribute for autoPlay, default to 5000 if not set
    const autoPlay = slide.getAttribute("data-autoplay");

    new Flickity(slide, {
        cellAlign: "left",
        contain: true,
        wrapAround: true,
        fullscreen: true,
        autoPlay: autoPlay ? parseInt(autoPlay, 10) : 5000,
        pageDots: false,
    });
});
