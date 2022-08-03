// @ts-nocheck
(function () {
  "use strict";
  const themeSwitcherCheckbox = document.querySelector(
    ".js-theme-switcher-checkbox"
  );
  const themeSwitcherLabel = document.querySelector(".js-theme-switcher-label");
  const themeSwitcherIcon = document.querySelector(".js-theme-switcher-icon");
  const root = document.querySelector("html");

  const setThemeSwitcherStateForDarkMode = () => {
    themeSwitcherCheckbox.setAttribute("checked", "");
    themeSwitcherLabel.textContent = "light";
    themeSwitcherIcon.setAttribute("href", "/svg/sprite.svg#sun");
  };

  const setThemeSwitcherStateForLightMode = () => {
    themeSwitcherCheckbox.removeAttribute("checked");
    themeSwitcherLabel.textContent = "dark";
    themeSwitcherIcon.setAttribute("href", "/svg/sprite.svg#moon");
  };

  const changeTheme = () => {
    const isSystemThemeDark = matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (isSystemThemeDark) {
      root.classList.toggle("is-light");
      if (root.classList.contains("is-light")) {
        setThemeSwitcherStateForLightMode();
        localStorage.setItem("root-class", "is-light");
      } else {
        setThemeSwitcherStateForDarkMode();
        clearUsersColorSchemePreference();
      }
    } else {
      root.classList.toggle("is-dark");
      if (root.classList.contains("is-dark")) {
        setThemeSwitcherStateForDarkMode();
        localStorage.setItem("root-class", "is-dark");
      } else {
        setThemeSwitcherStateForLightMode();
        clearUsersColorSchemePreference();
      }
    }
  };

  const clearUsersColorSchemePreference = () => {
    root.classList.remove("is-light", "is-dark");
    localStorage.clear();
  };

  const setThemeSwitcherState = () => {
    const isSystemThemeDark = matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const rootClassList = document.querySelector("html").classList[0];

    if (rootClassList) {
      if (rootClassList === "is-dark") {
        setThemeSwitcherStateForDarkMode();
      } else {
        setThemeSwitcherStateForLightMode();
      }
    } else {
      if (isSystemThemeDark) {
        setThemeSwitcherStateForDarkMode();
      } else {
        setThemeSwitcherStateForLightMode;
      }
    }
  };

  themeSwitcherCheckbox.addEventListener("change", changeTheme);
  document.addEventListener("DOMContentLoaded", setThemeSwitcherState);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      const isSystemThemeDark = matches;
      clearUsersColorSchemePreference();

      if (isSystemThemeDark) {
        setThemeSwitcherStateForDarkMode();
      } else {
        setThemeSwitcherStateForLightMode();
      }
    });
})();
