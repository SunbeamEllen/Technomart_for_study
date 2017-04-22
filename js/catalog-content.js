var link = document.querySelectorAll(".buy");
var catPopup = document.querySelector(".catalog-popup");
var overlay = document.querySelector(".modal-overlay");
var close = catPopup.querySelector(".modal-content-close");
var shut = catPopup.querySelector(".purchases")

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (event) {
    event.preventDefault();
    catPopup.classList.add("catalog-popup-show");
    overlay.classList.add("modal-overlay-show");
    });
  }

  close.addEventListener("click", function(event) {
    event.preventDefault();
    catPopup.classList.remove("catalog-popup-show");
    overlay.classList.remove("modal-overlay-show");
  });

  shut.addEventListener("click", function(event) {
    event.preventDefault();
    catPopup.classList.remove("catalog-popup-show");
    overlay.classList.remove("modal-overlay-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
    if (catPopup.classList.contains("catalog-popup-show")) {
        catPopup.classList.remove("catalog-popup-show");
        overlay.classList.remove("modal-overlay-show");
      }
    }
  });

