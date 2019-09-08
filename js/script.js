if (document.querySelector(".site-navigation-item__submenu") !== null) {
  var submenu = document.querySelector(".site-navigation-item__submenu");
  var submenu_link = document.querySelector(".submenu-link");
  submenu_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    submenu.classList.toggle("submenu-show");
  })
}

if (document.querySelector(".modal-map") !== null) {
  var modal_map = document.querySelector(".modal-map");
  var map_link = document.querySelector(".contacts__map-link");
  var close_map = document.querySelector(".button-close-map");

  map_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.add("modal-show");
  })

  close_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal-show");
  })
}

if (document.querySelector(".modal-map") && document.querySelector(".modal-map__big-map") !== null) {
  var modal_map = document.querySelector(".modal-map");
  var google_link = document.querySelector(".google-map__link");
  var close_map = document.querySelector(".button-close-google-map");
  var show_google_map = document.querySelector(".google-map")

  google_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_map.classList.remove("modal-show");
    show_google_map.classList.add("modal-show");
  })

  close_map.addEventListener("click", function(evt) {
    evt.preventDefault();
    show_google_map.classList.remove("modal-show");
  })
}


if (document.querySelector(".modal-message") !== null) {
  var modal_message  = document.querySelector(".modal-message");
  var link_message = document.querySelector(".contacts__link")
  var close_button = document.querySelector(".button-close-message");
  var user_name = document.querySelector("[name=user-name]");
  var user_email = document.querySelector("[name=user-email");
  var user_message = document.querySelector(".message-form__user-input-message");
  var message_form = document.querySelector(".message-form");

  link_message.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_message.classList.add("modal-show");
  })

  close_button.addEventListener("click", function(evt) {
    evt.preventDefault();
    modal_message.classList.remove("modal-show");
  })

  message_form.addEventListener("submit", function(evt) {
    if (!user_name.value || !user_email.value || !user_message.value) {
      evt.preventDefault();
      modal_message.classList.remove("form-error");
      void modal_message.offsetWidth;
      modal_message.classList.add("form-error");
    }
  })
}

if (document.querySelector(".user-menu") !== null) {
  var header__in_account  = document.querySelector(".user-menu__in-account");
  var header__not_logged  = document.querySelector(".user-menu__account_not-logged");
  var footer__in_account = document.querySelector(".footer__in-account");
  var footer__not_logged = document.querySelector(".footer__not-logged");
  var signin__link = document.querySelector(".user-menu__signin-link");
  var logout__link = document.querySelector(".user-menu__logout-link");
  var footer__signin_link = document.querySelector(".footer-user-menu__signin-link");
  var footer__logout_link = document.querySelector(".footer-user-menu__logout-link");

  signin__link.addEventListener("click", function(evt) {
    evt.preventDefault();
    header__not_logged.classList.remove("user-menu_show");
    header__in_account.classList.add("user-menu_show");
    footer__not_logged.classList.remove("user-menu_show");
    footer__in_account.classList.add("user-menu_show");
  })

  footer__signin_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    header__not_logged.classList.remove("user-menu_show");
    header__in_account.classList.add("user-menu_show");
    footer__not_logged.classList.remove("user-menu_show");
    footer__in_account.classList.add("user-menu_show");
  })

  logout__link.addEventListener("click", function(evt) {
    evt.preventDefault();
    header__in_account.classList.remove("user-menu_show");
    header__not_logged.classList.add("user-menu_show");
    footer__in_account.classList.remove("user-menu_show");
    footer__not_logged.classList.add("user-menu_show");
  })

  footer__logout_link.addEventListener("click", function(evt) {
    evt.preventDefault();
    header__in_account.classList.remove("user-menu_show");
    header__not_logged.classList.add("user-menu_show");
    footer__in_account.classList.remove("user-menu_show");
    footer__not_logged.classList.add("user-menu_show");
  })
}



