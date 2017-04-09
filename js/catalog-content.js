var link = document.querySelectorAll(".buy");
var popup = document.querySelector(".catalog-popup");
var close = popup.querySelector(".modal-content-close");
var shut = popup.querySelector(".purchases")

  for (var i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("catalog-popup-show");
    });
  }

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("catalog-popup-show");
  });

  shut.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("catalog-popup-show");
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
    if (popup.classList.contains("catalog-popup-show")) {
        popup.classList.remove("catalog-popup-show");
      }
    }
  });

