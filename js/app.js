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

  const changeDarkTheme = () => {
    root.classList.toggle("is-light");
    const isLightTheme = root.classList.contains("is-light");
    if (isLightTheme) {
      setThemeSwitcherStateForLightMode();
      localStorage.setItem("root-class", "is-light");
    } else {
      setThemeSwitcherStateForDarkMode();
      clearUserThemePreference();
    }
  };

  const changeLightTheme = () => {
    root.classList.toggle("is-dark");
    const isDarkTheme = root.classList.contains("is-dark");
    if (isDarkTheme) {
      setThemeSwitcherStateForDarkMode();
      localStorage.setItem("root-class", "is-dark");
    } else {
      setThemeSwitcherStateForLightMode();
      clearUserThemePreference();
    }
  };

  const changeTheme = () => {
    const isDarkTheme = matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkTheme) {
      changeDarkTheme();
    } else {
      changeLightTheme();
    }
  };

  const clearUserThemePreference = () => {
    root.classList.remove("is-light", "is-dark");
    localStorage.clear();
  };

  const setThemeSwitcherState = () => {
    const isDarkTheme = matchMedia("(prefers-color-scheme: dark)").matches;
    const rootClassList = document.querySelector("html").classList[0];

    if (rootClassList) {
      if (rootClassList === "is-dark") {
        setThemeSwitcherStateForDarkMode();
      } else {
        setThemeSwitcherStateForLightMode();
      }
    } else {
      if (isDarkTheme) {
        setThemeSwitcherStateForDarkMode();
      } else {
        setThemeSwitcherStateForLightMode();
      }
    }
  };

  const changeThemeBasedOnSystemSettings = (isDarkTheme) => {
    clearUserThemePreference();

    if (isDarkTheme) {
      setThemeSwitcherStateForDarkMode();
    } else {
      setThemeSwitcherStateForLightMode();
    }
  };

  themeSwitcherCheckbox.addEventListener("change", changeTheme);
  document.addEventListener("DOMContentLoaded", setThemeSwitcherState);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      changeThemeBasedOnSystemSettings(matches);
    });
})();
