document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading time
    setTimeout(function () {
        // Add transition effect to the body
        document.body.style.transition = "opacity 0.5s ease-in-out";

        // Fade out the body
        document.body.style.opacity = 0;

        // Redirect to load.html after the transition
        setTimeout(function () {
            window.location.href = "load.html";
        }, 1000); // 0.5s transition duration
    }, 6000); // Adjust the time as needed
});
