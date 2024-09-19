function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.className === "") {
    menu.className = "active";
  } else {
    menu.className = "";
  }
}

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Message sent successfully !");
  });
