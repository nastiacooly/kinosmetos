//welcome screen hiding

function toHide() {
    const enterScreen = document.getElementById("enterScreen");
    if (enterScreen.style.display === "none") {
        enterScreen.style.display = "block";
    } else {
        enterScreen.style.display = "none";
    }
}


//welcome screen animation (slide to top)

function addHideAnimation() {
    let name, arr;
    name = "enterOverlay_animated";
    arr = enterScreen.className.split(" ");
    if (arr.indexOf(name) == -1) {
        enterScreen.className += " " + name;
    };
}
