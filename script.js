particlesJS.load("particles-js", "/particlesjs-config.json");

const modal = document.getElementById("info-modal");
const btn = document.getElementById("info-btn");
const span = document.getElementsByClassName("close-btn")[0];

btn.onclick = function () {
  modal.classList.add("show");
}

span.onclick = function () {
  modal.classList.remove("show");
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
}

const parts = ["roy", "royryando", "me"];
const e = parts[0] + "@" + parts[1] + "." + parts[2];
const link = document.getElementById("contact-link");
if (link) {
  link.innerHTML = `<a href="mai` + `lto:${e}">${e}</a>`;
}
