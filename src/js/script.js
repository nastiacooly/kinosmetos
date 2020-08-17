const enterScreen = document.getElementById("enterScreen");
const header = document.getElementById("header");
const blog = document.getElementById("blog");
const blogSecond = document.getElementById("blogSecond");
const footer = document.getElementById("footer");
const mainLogo = document.getElementById("mainLogo");
const moreButton = document.getElementById("moreButton");
const loadingBlock = document.getElementById("loading");

function removeClass(element, nameOfClass) {
    element.classList.remove(nameOfClass);
};

function addClass(element, nameOfClass) {
    element.classList.add(nameOfClass);
}

//welcome screen hiding (not used)

function toHide() {
    if (enterScreen.style.display === "none") {
        enterScreen.style.display = "block";
    } else {
        enterScreen.style.display = "none";
    }
}


//welcome screen animation (fadeOutUp)

function addFadeOutUpAnimation() {
    addClass(enterScreen, "animate__animated");
    addClass(enterScreen, "animate__fadeOutUp");
    removeClass(header, "notDisplayed");
    removeClass(blog, "notDisplayed");
    removeClass(footer, "notDisplayed");
}


//logo hover animation

window.onload = function () {
    let a = document.querySelector('#mainLogo');
    a.onmouseover = function(e) {
        addClass(mainLogo, "animate__animated");
        addClass(mainLogo, "animate__shakeY");
    };
    a.onmouseout = function(e) {
        removeClass(mainLogo, "animate__animated");
        removeClass(mainLogo, "animate__shakeY");
    };
  }

  //loading of content by clicking the button

  function loadContent() {
      addClass(moreButton, "animate__animated");
      addClass(moreButton, "animate__fadeOut");
      addClass(loadingBlock, "notDisplayed");
      removeClass(blogSecond, "notDisplayed");
      addClass(blogSecond, "animate__animated");
      addClass(blogSecond, "animate__fadeInUp");
      window.scrollBy({
        top: 500,
        behavior: 'smooth'
      });
  }

  //функция для фильтрации контента по типу (фильмы, сериалы, игры) - ДОДЕЛАТЬ И ПРОВЕРИТЬ (в html пока ничего не меняла)
  function filterByType(type) {
    let elements = document.querySelectorAll("article.blog__post");
    for (let elem of elements) {
        if (elem.matches(type) == false) {
          addClass(elem, "notDisplayed");
        };
      };
  }
  
  