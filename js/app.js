(function () {
  "use strict";

  const lightThemeRadioButton = document.querySelector(
    ".js-light-theme-radio-button"
  );
  const darkThemeRadioButton = document.querySelector(
    ".js-dark-theme-radio-button"
  );
  const rootElement = document.documentElement;
  const searchForm = document.querySelector(".js-search-form");
  const searchInput = document.querySelector(".js-search-input");
  const alertMessage = document.querySelector(".js-alert-message");

  const setThemeSwitcherStateForDarkMode = () => {
    darkThemeRadioButton.setAttribute("checked", "");
    lightThemeRadioButton.removeAttribute("checked");
  };

  const setThemeSwitcherStateForLightMode = () => {
    lightThemeRadioButton.setAttribute("checked", "");
    darkThemeRadioButton.removeAttribute("checked");
  };

  const toggleDarkTheme = () => {
    rootElement.classList.toggle("is-light");
    const isLightTheme = rootElement.classList.contains("is-light");
    if (isLightTheme) {
      setThemeSwitcherStateForLightMode();
      localStorage.setItem("color-mode", "is-light");
    } else {
      setThemeSwitcherStateForDarkMode();
      clearUserThemePreference();
    }
  };

  const toggleLightTheme = () => {
    rootElement.classList.toggle("is-dark");
    const isDarkTheme = rootElement.classList.contains("is-dark");
    if (isDarkTheme) {
      setThemeSwitcherStateForDarkMode();
      localStorage.setItem("color-mode", "is-dark");
    } else {
      setThemeSwitcherStateForLightMode();
      clearUserThemePreference();
    }
  };

  const changeTheme = () => {
    const isDarkTheme = matchMedia("(prefers-color-scheme: dark)").matches;

    if (isDarkTheme) {
      toggleDarkTheme();
    } else {
      toggleLightTheme();
    }
  };

  const clearUserThemePreference = () => {
    rootElement.classList.remove("is-light", "is-dark");
    localStorage.clear();
  };

  const setThemeSwitcherState = () => {
    const isDarkTheme = matchMedia("(prefers-color-scheme: dark)").matches;
    const rootClassList = rootElement.classList[0];

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

  const showError = (message = "Something went wrong") => {
    alertMessage.textContent = message;
  };

  const getUserIPAddress = async () => {
    try {
      const response = await fetch("https://api.ipify.org/");
      const text = await response.text();
      return text;
    } catch (error) {
      showError();
      console.error(error);
    }
  };

  const fetchUserData = async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const OK = 200;
      const NOT_FOUND = 404;
      const FORBIDDEN = 403;

      if (response.status === OK && response.ok) {
        const json = await response.json();
        return json;
      } else if (response.status === NOT_FOUND && !response.ok) {
        showError("No results");
      } else if (response.status === FORBIDDEN && !response.ok) {
        const ip = await getUserIPAddress();
        showError(`API rate limit exceeded for ${ip} (403 Forbidden)`);
      }
    } catch (error) {
      showError();
      console.error(error);
    }
  };

  const validateData = (data) => {
    if (!data) {
      return "Not Available";
    }

    return data;
  };

  const createAnchorTag = (url, text, className) => {
    const a = document.createElement("a");
    a.href = url;
    a.textContent = text;
    a.classList.add(className);
    a.rel = "nofollow me";
    return a;
  };

  const removeAnchorTag = (parentElement) => {
    if (parentElement.querySelector("a")) {
      parentElement.removeChild(parentElement.firstElementChild);
    }
  };

  const setElementStateToNotAvailable = (
    elementToStyle,
    elementToHoldValue,
    text,
    classToAdd = "is-not-available"
  ) => {
    elementToStyle.classList.add(classToAdd);
    elementToHoldValue.textContent = text;
  };

  const setLinkToAvailable = (
    elementToStyle,
    childElement,
    anchorTag,
    classToRemove = "is-not-available"
  ) => {
    elementToStyle.classList.remove(classToRemove);
    removeAnchorTag(childElement);
    childElement.appendChild(anchorTag);
  };

  const setTextToAvailable = (
    elementToStyle,
    elementToHoldValue,
    text,
    classToRemove = "is-not-available"
  ) => {
    elementToStyle.classList.remove(classToRemove);
    elementToHoldValue.textContent = text;
  };

  const showAvatar = (url, alternativeText) => {
    const avatar = document.querySelector(".js-avatar");
    avatar.src = url;
    avatar.alt = alternativeText;
  };

  const showName = (nickname, username) => {
    const name = document.querySelector(".js-name");
    nickname = validateData(nickname);

    if (nickname === "Not Available") {
      nickname = `${username}'s GitHub Profile`;
      setElementStateToNotAvailable(name, name, nickname, "sr-only");
    } else {
      setTextToAvailable(name, name, nickname, "sr-only");
    }
  };

  const showUserName = (username, url) => {
    const userGitHubLink = document.querySelector(".js-user-github-link");
    userGitHubLink.href = url;
    userGitHubLink.textContent = `@${username}`;
  };

  const showJoinDate = (date) => {
    const time = document.querySelector(".js-time");
    const dateRegEx = /\d{2} [A-Z][a-z]{2} \d{4}/;
    const formattedDate = new Date(date).toUTCString().match(dateRegEx)[0];
    time.setAttribute("datetime", date);
    time.textContent = formattedDate;
  };

  const showBio = (description) => {
    const bio = document.querySelector(".js-bio");
    description = validateData(description);

    if (description === "Not Available") {
      setElementStateToNotAvailable(bio, bio, "This profile has no bio");
    } else {
      setTextToAvailable(bio, bio, description);
    }
  };

  const showRepositories = (totalPublicRepositories) => {
    const repository = document.querySelector(".js-repository");
    repository.textContent = totalPublicRepositories;
  };

  const showFollowers = (totalFollowers) => {
    const followers = document.querySelector(".js-followers");
    followers.textContent = totalFollowers;
  };

  const showFollowing = (totalFollowing) => {
    const following = document.querySelector(".js-following");
    following.textContent = totalFollowing;
  };

  const showLocation = (locationData) => {
    const location = document.querySelector(".js-location");
    const element = location.querySelector(".js-value");
    locationData = validateData(locationData);

    if (locationData === "Not Available") {
      setElementStateToNotAvailable(location, element, locationData);
    } else {
      setTextToAvailable(location, element, locationData);
    }
  };

  const showWebsite = (url) => {
    const website = document.querySelector(".js-website");
    const element = website.querySelector(".js-value");
    element.textContent = "";
    url = validateData(url);
    const whitespaceRegEx = /\s/;
    const isContainWhiteSpace = url.match(whitespaceRegEx);
    const HTTPRegEx = /^https?:\/\//;
    const isContainHTTP = url.match(HTTPRegEx);

    if (url === "Not Available") {
      setElementStateToNotAvailable(website, element, url);
    } else if (isContainWhiteSpace) {
      setTextToAvailable(website, element, url);
    } else if (!isContainHTTP) {
      const anchorTag = createAnchorTag(`http://${url}`, url, "result__link");
      setLinkToAvailable(website, element, anchorTag);
    } else {
      const anchorTag = createAnchorTag(url, url, "result__link");
      setLinkToAvailable(website, element, anchorTag);
    }
  };

  const showTwitter = (username) => {
    const twitter = document.querySelector(".js-twitter");
    const element = twitter.querySelector(".js-value");
    element.textContent = "";
    username = validateData(username);

    if (username === "Not Available") {
      setElementStateToNotAvailable(twitter, element, username);
    } else {
      const anchorTag = createAnchorTag(
        `https://twitter.com/${username}`,
        `@${username}`,
        "result__link"
      );
      setLinkToAvailable(twitter, element, anchorTag);
    }
  };

  const showCompany = (company) => {
    const office = document.querySelector(".js-office");
    const element = office.querySelector(".js-value");
    element.textContent = "";
    company = validateData(company);
    const companyRegEx = /@/;
    const isCompanyOnGitHub = company.match(companyRegEx);

    if (company === "Not Available") {
      setElementStateToNotAvailable(office, element, company);
    } else if (isCompanyOnGitHub) {
      company = company.substring(1);
      const anchorTag = createAnchorTag(
        `https://github.com/${company}`,
        `@${company}`,
        "result__link"
      );
      setLinkToAvailable(office, element, anchorTag);
    } else {
      setTextToAvailable(office, element, company);
    }
  };

  const notifyUser = (username) => {
    const notification = document.querySelector(".js-notification");
    notification.textContent = `results updated to ${username}'s GitHub profile`;
  };

  const showUserData = async (data) => {
    try {
      const {
        avatar_url: avatar,
        name,
        login: username,
        html_url: githubProfileURL,
        created_at: joinDate,
        bio,
        public_repos: publicRepositories,
        followers,
        following,
        location,
        blog,
        twitter_username: twitter,
        company
      } = await data;
      document.title = `${username} | devfinder`;
      notifyUser(username);
      showAvatar(avatar, username);
      showName(name, username);
      showUserName(username, githubProfileURL);
      showJoinDate(joinDate);
      showBio(bio);
      showRepositories(publicRepositories);
      showFollowers(followers);
      showFollowing(following);
      showLocation(location);
      showWebsite(blog);
      showTwitter(twitter);
      showCompany(company);
    } catch (error) {
      console.error(error);
    }
  };

  const validateUserInput = (value) => {
    if (typeof value === "string") {
      const githubUserNameRegEx = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
      return value.match(githubUserNameRegEx);
    }

    return false;
  };

  const setURLParameter = (query) => {
    const url = new URL(document.location);
    url.searchParams.set("user", query);
    window.history.pushState({}, "", url);
  };

  const getUserDataBasedOnURL = async () => {
    try {
      const params = new URLSearchParams(document.location.search);
      let username = params.get("user");

      if (username) {
        username = username.trim();
        const isUserNameValid = validateUserInput(username);
        searchInput.value = username;
        if (isUserNameValid) {
          const json = await fetchUserData(username);
          showUserData(json);
        } else {
          showError("Invalid username");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const searchGitHubUser = async (event) => {
    try {
      event.preventDefault();
      alertMessage.textContent = "";
      const username = searchInput.value.trim();
      const isUserNameValid = validateUserInput(username);
      if (isUserNameValid) {
        setURLParameter(username);
        const json = await fetchUserData(username);
        showUserData(json);
      } else {
        showError("Invalid username");
      }
    } catch (error) {
      console.error(error);
    }
  };

  lightThemeRadioButton.addEventListener("change", changeTheme);
  darkThemeRadioButton.addEventListener("change", changeTheme);
  document.addEventListener("DOMContentLoaded", setThemeSwitcherState);
  document.addEventListener("DOMContentLoaded", getUserDataBasedOnURL);
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", ({ matches }) => {
      changeThemeBasedOnSystemSettings(matches);
    });
  searchForm.addEventListener("submit", searchGitHubUser);
})();
