const btnToggleNav = document.querySelector(".btn-toggle-nav");

function toggleNav() {
  const ulNav = document.querySelector("#ul-nav");
  const btnLogin = document.querySelector("#btn-login");

  if (ulNav.style.display == "" && btnLogin.style.display == "") {
    ulNav.style.display = "flex";
    ulNav.style.transition = "1s fade";
    btnLogin.style.display = "block";
  } else {
    ulNav.style.display = "";
    btnLogin.style.display = "";
  }
}
