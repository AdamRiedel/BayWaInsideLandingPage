const btn = document.querySelector(".download-button")

btn.addEventListener("click", function() {
  let link = document.createElement("a");
  link.setAttribute("type", "hidden"),
  link.href = "assets/baywaInside.apk",
  link.download = "BayWa-Inside.apk",
  document.body.appendChild(link),
  link.click(),
  link.remove()
});