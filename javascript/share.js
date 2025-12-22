document.addEventListener("DOMContentLoaded", () => {
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  const twitterBtn = document.getElementById("share-twitter");
  const facebookBtn = document.getElementById("share-facebook");

  if (twitterBtn) {
    twitterBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const twitterUrl =
        `https://twitter.com/intent/tweet?text=${pageTitle}&url=${pageUrl}`;
      window.open(twitterUrl, "_blank", "noopener,noreferrer");
    });
  }

  if (facebookBtn) {
    facebookBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const facebookUrl =
        `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
      window.open(facebookUrl, "_blank", "noopener,noreferrer");
    });
  }
});
