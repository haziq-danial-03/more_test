function toggleMode() {
  const body = document.body;
  const icon = document.getElementById("mode-icon");

  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("light-mode")) {
    icon.innerHTML = "&#127774;";
    localStorage.setItem("theme", "light");
  } else {
    icon.innerHTML = "&#127770;";
    localStorage.setItem("theme", "dark");
  }
}

window.onload = function () {
  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.add("light-mode");
  }

  // Update icon based on theme
  const icon = document.getElementById("mode-icon");
  if (icon) {
    if (document.body.classList.contains("light-mode")) {
      icon.innerHTML = "&#127774;";
    } else {
      icon.innerHTML = "&#127770;";
    }
  }

  // Back to Top
  const backToTop = document.getElementById("backToTop");

  window.onscroll = function () {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  };

  backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
};
