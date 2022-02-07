{
    let togle = document.querySelector(".toggle-bar");
    let men_bar = document.querySelector(".nav-menu-1");
    console.log((men_bar.style.transform = "translateY(-710px)"));
    togle.addEventListener("click", () => {
        if (men_bar.style.transform === "translateY(-710px)") {
            men_bar.style.transform = "translateY(0px)";
        } else {
            men_bar.style.transform = "translateY(-710px)";
        }
    });
}