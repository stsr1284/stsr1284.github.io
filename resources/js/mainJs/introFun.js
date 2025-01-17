document.addEventListener("DOMContentLoaded", function () {
    const introWrapper = document.querySelector(".introWrapper");
    setTimeout(() => {
        introWrapper.classList.add("fade-out");
    }, 1000);
});
