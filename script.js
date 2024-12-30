// banner animation -------------------------------------------------

gsap.to("nav div p", {
    x: "-200%", // Move text completely to the left
    duration: 20, // Speed for one full scroll (in seconds)
    ease: "linear", // Smooth linear movement
    repeat: -1, // Infinite loop
    onRepeat: () => {
        // Reset position after each loop
        gsap.set("nav div p", { x: "100%" });
    },
});