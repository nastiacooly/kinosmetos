//welcome screen hiding

function toHide() {
    const enterScreen = document.getElementById("enterScreen");
    if (enterScreen.style.display === "none") {
        enterScreen.style.display = "block";
    } else {
        enterScreen.style.display = "none";
    }
}
