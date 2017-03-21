var link = document.querySelector(".buy");
var popup = document.querySelector(".catalog-popup");
var close = popup.querySelector(".close");

  link.addEventListener("click", function(event) {
		event.preventDefault();
		popup.classList.add("catalog-popup-show");
  });

  close.addEventListener("click", function(event) {
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

