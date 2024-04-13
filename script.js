document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading time
    setTimeout(function () {
        // Add transition effect to the body
        document.body.style.transition = "opacity 0.5s ease-in-out";

        // Fade out the body
        document.body.style.opacity = 0;

        // Redirect to error.html after the transition
        setTimeout(function () {
            window.location.href = "error.html";
        }, 800); // 0.8s transition duration
    }, 9000); // Adjust the time as needed
    
    // Full screen mode functionality
    const fullscreenBtn = document.getElementById('fullscreen-btn');

    fullscreenBtn.addEventListener('click', () => {
        if (document.fullscreenElement) {
            exitFullscreen();
        } else {
            enterFullscreen();
        }
    });

    function enterFullscreen() {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) { /* Safari */
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) { /* IE11 */
            element.msRequestFullscreen();
        }
    }

    function exitFullscreen() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
    }
});
