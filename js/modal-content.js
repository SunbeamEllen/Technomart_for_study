var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-content");
var overlay = document.querySelector(".modal-overlay");
var close = popup.querySelector(".modal-content-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=username]");
var email = popup.querySelector("[name=mail]");
var storage = localStorage.getItem("username");

  link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-content-show");
    overlay.classList.add("modal-overlay-show");

    if (storage) {
        username.value = storage;
        mail.focus();
    } else {
      username.focus();
    }    
  });

  close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-content-show");
    popup.classList.remove("modal-error");
    overlay.classList.remove("modal-overlay-show");
  });

  form.addEventListener("submit", function(event) {
    if (!username.value || !mail.value) {
      event.preventDefault();
      popup.classList.remove("modal-error");
      popup.offsetWidth = popup.offsetWidth;
      popup.classList.add("modal-error"); 
    } else {
        localStorage.setItem("username", username.value);
    }
  });

  window.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) {
      if (popup.classList.contains("modal-content-show")) {
        popup.classList.remove("modal-content-show");
        popup.classList.remove("modal-error");
        overlay.classList.remove("modal-overlay-show");
      }
    }
  });