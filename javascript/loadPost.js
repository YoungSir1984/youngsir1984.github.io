document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("article-container");
  if (!container) {
    console.error("[loadPost] #article-container not found");
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const post = params.get("post");

  if (!post) {
    container.innerHTML = "<p style='color:#888;'>No post specified.</p>";
    return;
  }

  fetch(`/posts/${post}.html`)
    .then(res => {
      if (!res.ok) {
        throw new Error("Post not found");
      }
      return res.text();
    })
    .then(html => {
      container.innerHTML = html;

      const titleElem = container.querySelector(".post-title");
      if (titleElem) {
        document.title = `${titleElem.innerText} | YoungSirSpace`;
      }

      if (typeof initTOC === "function") {
        initTOC();
      }
    })
    .catch(err => {
      console.error(err);
      container.innerHTML =
        "<p style='color:#888;'>Failed to load post.</p>";
    });
});
