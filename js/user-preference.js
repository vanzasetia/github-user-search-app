(function () {
  "use strict";
  const persistedColorPreference = localStorage.getItem("color-mode");
  const hasPersistedPreference = typeof persistedColorPreference === "string";
  if (hasPersistedPreference) {
    const rootElement = document.documentElement;
    rootElement.classList.add(persistedColorPreference);
  }
})();
