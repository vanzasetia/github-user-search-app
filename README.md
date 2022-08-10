**This README is not finished yet. But of course, feel free to take a look!**

![It's finally done! GitHub User Search App. Challenge by Frontend Mentor. Coded by Vanza Setia](./images/banner.jpg)

<p align="left">
  <a href="https://www.frontendmentor.io/challenges?difficulties=2"><img src="https://img.shields.io/badge/Difficulty-Junior-91BD28?style=for-the-badge&logo=frontendmentor" alt="Challenge Difficulty - Junior"></a>
  <img alt="Repo size" src="https://img.shields.io/github/repo-size/vanzasetia/github-user-search-app?style=for-the-badge&logo=github">
  <a href="https://twitter.com/vanzasetia"><img src="https://img.shields.io/twitter/follow/vanzasetia?logo=twitter&style=for-the-badge" alt="Twitter followers." /></a>
  <img alt="Last commit" src="https://img.shields.io/github/last-commit/vanzasetia/github-user-search-app?style=for-the-badge&logo=git">
  <img alt="Netlify" src="https://img.shields.io/netlify/b6cfb4ab-d176-43b9-a5fa-9fcf256608ff?style=for-the-badge&logo=netlify">
  <img alt="License" src="https://img.shields.io/github/license/vanzasetia/github-user-search-app?color=green&style=for-the-badge&logo=github">
</p>

<p>
  <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fofficialdevfinder.netlify.app&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en">
    <img style="border:0;width:88px;height:31px"
        src="http://jigsaw.w3.org/css-validator/images/vcss-blue"
        alt="Valid CSS!" />
    </a>
    <a href="https://github.com/standard/semistandard">
      <img style="border:0;height:31px"
        src="https://raw.githubusercontent.com/standard/semistandard/master/badge.svg"
        alt="JavaScript Semistandard Code Style" />
    </a>
</p>

# GitHub User Search App

## Table of contents
- [Overview](#overview)
  - [Introduction](#introduction)
  - [The challenge](#the-challenge)
  - [Links](#links)
  - [Screenshots](#screenshots)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgements](#acknowledgements)
- [License](#license)
- [References](#references)

## Overview
[(Back to top)](#table-of-contents)

### Introduction
Welcome to the `README.md` of this repo! The purpose of creating this project is to sharpen my coding skill.

In this file I'm going to tell you everything, starting from the tools that I used, and much more.

That's it for the introduction and **happy reading!**
### The Challenge

My challenge is to build out this GitHub user search app using the [GitHub users API](https://docs.github.com/en/rest/users/users#get-a-user) and get it looking as close to the design as possible.

My users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- See visible focus states for interactive elements when navigating by keyboard
- Search for GitHub users by their username
- See relevant user information based on their search
- Switch between light and dark themes
- Understand and be able to navigate page content while using assistive technology
- Have the correct color scheme chosen for them based on their computer preferences.

### Links
- [Live Review](https://officialdevfinder.netlify.app/)
- [Frontend Mentor Solution Page]()

### Screenshots

![Desktop light theme](./screenshots/desktop-light.jpg)

![Desktop dark theme](./screenshots/desktop-dark.jpg)

## My Process
[(Back to top)](#table-of-contents)

### Built With
- **Following best practices**\* 
- HTML Semantic Tags
- [BEM (Block, Element, Modifier)](https://sparkbox.com/foundry/bem_by_example) Class *Naming Convention*
- [Sass](https://sass-lang.com/)
- JavaScript Async Await
- JavaScript Fetch API
- CSS Flexbox
- CSS Grid
- [GitHub user API](https://docs.github.com/en/rest/users/users#get-a-user)
- [ipify - A Simple Public IP Address API](https://www.ipify.org/)
- Mobile-first workflow

> \* I follow guidelines. [See what guidelines that I follow.](./docs/README.md#guidelines)

### What I Learned

#### GitHub User API

Here is the URL.

```
https://api.github.com/users/{username}
```

The [documentation](https://docs.github.com/en/rest/users/users#get-a-user) shows it clearly that we will get:
- User's data in JSON format
- For the HTTP response status code, we can get either `200` or `404`

Now, for the status code, there is a chance that we can get `403`. This will happen if you do a lot of requests. As a result, you will not allow to do any request with that IP address.

![](./images/api-rate-limit-exceeded.png)

Now, we have a good understanding of what can we possibly get when making a request to the API. It's time to talk about asynchronous programming!

#### Asynchronous Programming

Based on my understanding, asynchronous programming is a program that doesn't block the main process of executing JavaScript. Simple, right? Well, try to take a look yourself at the [Wikipedia definition for asynchronous programming](https://en.wikipedia.org/wiki/Asynchrony_(computer_programming)) for the complete definition. (It's confusing for me. 😅)

The easiest example of asynchronous programming that I could think of is the `setTimeout()` function.

```javascript
setTimeout(() => {
  console.log("What did I miss?");
}, 3000)
console.log("I don't get blocked by the setTimeout() function");
console.log("Me too!");

// Expected output:
// > I don't get blocked by the setTimeout() function
// > Me too!
// > What did I miss?
```

The example above reminds me of the Internet Explorer meme.

![](./images/internet-explorer-meme.jpg)

##### XMLHttpRequest

Before diving into the `XMLHttpRequest`, I want to explain a little bit about AJAX.

AJAX stands for Asynchronous JavaScript XML. Even though its acronyms only contain XML, it is not only able to receive and send information or data in XML. It can also send and receive data in JSON, text, and HTML.

There are two major features of AJAX that allow us as web developers to make:

- Make requests to the server without reloading the page
- Receive and work with data from the server

> Reference: [MDN documentation AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)

Now, let's dive in to the XMLHttpRequest!

Before I start explaining, let me give you some code snippets to fetch user data with `XMLHttpRequest`.

```javascript
const fetchUserData = (username) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.github.com/users/${username}`);

  xhr.responseType = "json";

  xhr.onreadystatechange = () => {
    const DONE = 4;
    const OK = 200;
    const NOT_FOUND = 404;
    const FORBIDDEN = 403;

    if (xhr.readyState === DONE) {
      if (xhr.status === OK) {
        const json = xhr.response;
        showUserData(json);
      } else if (xhr.status === NOT_FOUND) {
        showError("No results");
      } else if (xhr.status === FORBIDDEN) {
        getUserIPAddress();
      }
    }
  };

  xhr.onerror = () => {
    showError("Something went wrong");
  };

  xhr.send();
};
```

Now, the way I use `XMLHttpRequest` to get the user data is the following:

- First, I need to create a new `XMLHttpRequest()` object.
```javascript
const xhr = new XMLHttpRequest();
```
- Then, I create a request with the `open()` method. The first parameter is the HTTP request method which in this case is the `GET` method. The second parameter is the URL.
```javascript
xhr.open("GET", `https://api.github.com/users/${username}`);
```
- After that, I specify the `responseType` to JSON.
```javascript
xhr.responseType = "json";
```
- Next, to handle the server response, I use the `onreadystatechange` event handler property.
  - First, I need to make sure that the work is done by creating an `if` statement.
  - After that, if the `xhr.status` returns `200` then the program continues to show the user data. But, if the status code is `404` then shows an error message. Lastly, if the status code is `403` then I want to get the user's IP address and then show an error message that tells the user, that his/her IP address has been blocked because of too many requests.
```javascript
xhr.onreadystatechange = () => {
  const DONE = 4;
  const OK = 200;
  const NOT_FOUND = 404;
  const FORBIDDEN = 403;

  if (xhr.readyState === DONE) {
    if (xhr.status === OK) {
      const json = xhr.response;
      showUserData(json);
    } else if (xhr.status === NOT_FOUND) {
      showError("No results");
    } else if (xhr.status === FORBIDDEN) {
      getUserIPAddress();
    }
  }
};
```
- If there is an error then I want to show the user a message. So, I call the `showError()` function.
```javascript
xhr.onerror = () => {
  showError("Something went wrong");
};
```
- Lastly, I need to make sure to send the request to the server. Otherwise, nothing will happen.
```javascript
xhr.send();
```

If you want to learn more about `XMLHttpRequest` then I recommend taking a look at the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest).

##### Fetch

There is another way to create a request to a server by using [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). `fetch()` will return a `Promise` so, I need to use `Promise`.

Now, here is how I fetch the GitHub user API with `Promise`.

```javascript
const handleResponse = (response) => {
  return new Promise((resolve) => {
    const OK = 200;
    const NOT_FOUND = 404;
    const FORBIDDEN = 403;

    if (response.status === OK && response.ok) {
      return resolve(response);
    } else if (response.status === NOT_FOUND && !response.ok) {
      showError("No results");
    } else if (response.status === FORBIDDEN && !response.ok) {
      getUserIPAddress();
    }
  });
};

const fetchUserData = (username) => {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => handleResponse(response))
    .then((data) => data.json())
    .then((json) => showUserData(json))
    .catch((error) => {
      showError();
      console.error(error);
    });
};
```

So, with `fetch()` here is how it goes:
- First, fetch the API.
```javascript
fetch(`https://api.github.com/users/${username}`)
```
- Second, since it will return a `Promise` then I will use `.then()` to access the data.
- Then, I need to handle the response before converting the data to JSON. It is simply because I need to check if the status code is `404` then I want to show the alert message (the same reasons as the `XMLHttpRequest`).
```javascript
fetch(`https://api.github.com/users/${username}`)
  .then((response) => handleResponse(response))
```
- After that, convert the response to JSON.
```javascript
fetch(`https://api.github.com/users/${username}`)
  .then((response) => handleResponse(response))
  .then((data) => data.json())
```
- Then, pass in the JSON data to the `showUserData()` function.
```javascript
fetch(`https://api.github.com/users/${username}`)
  .then((response) => handleResponse(response))
  .then((data) => data.json())
  .then((json) => showUserData(json))
```
- Finally, end the promise chaining with `.catch()` to catch any error that happens.
```javascript
fetch(`https://api.github.com/users/${username}`)
  .then((response) => handleResponse(response))
  .then((data) => data.json())
  .then((json) => showUserData(json))
  .catch((error) => {
    showError();
    console.error(error);
  });
```

##### Async Await

My favorite way to write asynchronous JavaScript in my opinion is using `async` and `await` keywords. In my opinion, it makes the code much easier to understand since everything is linear (no `.then()` or creating a new `xhr` object).

So, the way I did the program with `async` and `await` keywords are the following.

```javascript
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
```

The explanation:
- First, I still use `fetch()` to create a request to the server.
- Second, I handle the HTTP status code responses. If the status code is `200` then return the data, ect.
- Third, instead of using `.catch` to catch errors, I use `try...catch` statement to catch any errors that will happen.
- Lastly, instead of having the `showUserData()` inside the async function, I could just return the data.


### Feedback and Suggestions

I am still new at asynchronous programming. So, if you notice some mistakes or spot some bad practices then feel free to let me know. I will update the code as well as the `README`! Also, I will add your name to the **Acknowledgements**.

### Useful Resources

## Author
[(Back to top)](#table-of-contents)

- Frontend Mentor - [@vanzasetia](https://frontendmentor.io/profile/vanzasetia)
- Twitter - [@vanzasetia](https://twitter.com/vanzasetia)
- Code Newbie - [@vanzasetia](https://community.codenewbie.org/vanzasetia)
- Want to see me on other platform? [Check my linktree!](https://linktr.ee/vanzasetia)

## Acknowledgements
[(Back to top)](#table-of-contents)

Thanks to [@shinnn](https://officialdevfinder.netlify.app/?user=shinnn) for the Regular Expression to validate the user's input! It saves a lot of my time and energy for sure! 👍

## License
[(Back to top)](#table-of-contents)

>You can check out [the full license](./LICENSE)

This project is licensed under the terms of the MIT license.

## References

[(Back to top)](#table-of-contents)

> See the [documentation.](./docs/README.md)
