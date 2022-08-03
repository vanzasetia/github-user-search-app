// @ts-nocheck
(function () {
  "use strict";
  const rootClassTheme = localStorage.getItem("root-class");

  if (rootClassTheme) {
    const root = document.querySelector("html");
    root.classList.add(rootClassTheme);
  }
})();
