document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  if (!header) return;

  const scrollContainer = document.querySelector(".post-content") || window;

  scrollContainer.addEventListener("scroll", () => {
    const scrollY = scrollContainer === window
      ? window.scrollY
      : scrollContainer.scrollTop;

    if (scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});
