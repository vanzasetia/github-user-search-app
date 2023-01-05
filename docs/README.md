# Documentation

This is the place where I put all the resources that I find useful to build this project. This can be used for future reference or help anyone that is doing this challenge.

## Web documentation

- [XMLHttpRequest - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [Ajax - Developer guides | MDN](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX)
- [XMLHttpRequest.readyState - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)
- [HTTP response status codes - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [Using Promises - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Common mistakes when composing promise chains.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#common_mistakes)
- [How to make search `form` accessible (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search#search_form_labels_and_accessibility)
- [Labeling Controls | Web Accessibility Initiative (WAI) | W3C](https://www.w3.org/WAI/tutorials/forms/labels/) - this tutorial tells me different ways to give a label to an `input`.
- [WAI-ARIA basics - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/WAI-ARIA_basics)
- [HTMLElement: change event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
- [HTMLElement: input event - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
- [Error - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error)
- [`<a>`: The Anchor element - HTML: HyperText Markup Language | MDN (Security and privacy)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#security_and_privacy)
- [EventTarget.addEventListener() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)
- [String.prototype.trim() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [The HTML5 input types - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Forms/HTML5_input_types) - This MDN documentation clearly shows the benefit of using the right type of `input`.
- [RegExp.prototype.exec() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
- [`<time>`: The (Date) Time element - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time)
- [Date.prototype.toUTCString() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString)
- [Date - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Date and Time Formats | w3.org](https://www.w3.org/TR/NOTE-datetime)
- [`word-break` - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break) - I used this to fix the link issue. If the link is too long then it will break into two lines. You can see toggle the `word-break` styling on the `320px` width to see the issue and how it fixes the issue.
- [<input type="url"> - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/url) - it has an interesting example about the use case of [`<detalist>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist) element.
- [aria-labelledby - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-labelledby) - MDN documentation says, "*The `aria-labelledby` property value can include content from elements that aren't even visible.*".
- [Accessible Rich Internet Applications (WAI-ARIA) 1.3 - `aria-lablledby` Specifications](https://w3c.github.io/aria/#aria-labelledby)
- [HTML attribute: `rel` - HTML: HyperText Markup Language | MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/rel)
- [ARIA live regions - Accessibility | MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions)

## Articles

- [How to Disable Links | CSS-Tricks](https://css-tricks.com/how-to-disable-links/)
- [Error handling while using native fetch API in JavaScript | Learn with Param](https://learnwithparam.com/blog/how-to-handle-fetch-errors/)
- [Accessibility Matters - Search Form](https://www.a11ymatters.com/pattern/accessible-search/) - this article recommends to put the `role="search"` on the `form` element.
- [Where to Put Your Search Role — Adrian Roselli](https://adrianroselli.com/2015/08/where-to-put-your-search-role.html) - his article recommends to put the `role="search"` on the `form` element.
- [WebAIM: Creating Accessible Forms - Advanced Form Labeling](https://webaim.org/techniques/forms/advanced) - this tutorial helps me understand different ways to give label to an `input` and some important information.
- [Building a theme switch component | web.dev](https://web.dev/building-a-theme-switch-component/) - it makes me know about the `change` event. This can help me make the site change the theme when the users change their them preferences through their browser or system setting.
- [Contextually Marking up accessible images and SVGs | scottohara.me](https://www.scottohara.me/blog/2019/05/22/contextual-images-svgs-and-a11y.html) -  it shows me how to take care decorative SVG.
- [Optimizing resource loading with Priority Hints | web.dev](https://web.dev/priority-hints/) - I don't use `fetchpriority` on the site but it is an interesting thing that I found when I building the project.
- [Preconnect to required origins | web.dev](https://web.dev/uses-rel-preconnect/)
- [Fast load times | web.dev](https://web.dev/fast/) - It contains a lot of resources about "fast website".
- [A Theme Switcher | Inclusive Components](https://inclusive-components.design/a-theme-switcher/)
- [Toggle Buttons | Inclusive Components](https://inclusive-components.design/toggle-button/)
- [Target="_blank" - the most underestimated vulnerability ever](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/)
- [Pure CSS Custom Checkbox Style | Modern CSS Solutions](https://moderncss.dev/pure-css-custom-checkbox-style/)
- [CSS transitions and hover animations, an interactive guide](https://www.joshwcomeau.com/animation/css-transitions/) - a nice blog post by Josh Comeau. It helps me learn more about animation and transition.
- [prefers-color-scheme: Hello darkness, my old friend | web.dev](https://web.dev/prefers-color-scheme/) - a complete guide to create dark mode. It includes everything you need to know to create a good dark mode.
- [JavaScript naming conventions: do’s and don’ts](https://www.freecodecamp.org/news/javascript-naming-conventions-dos-and-don-ts-99c0e2fdd78a/)
- [Accessible Icon Buttons – Sara Soueidan, inclusive design engineer](https://www.sarasoueidan.com/blog/accessible-icon-buttons/) - I found a statement that `aria-labelledby` can be used to reference hidden elements.
- [Inclusively Hidden | scottohara.me](https://www.scottohara.me/blog/2017/04/14/inclusively-hidden.html) - I found the same statement that `aria-labelledby` can be used to reference hidden elements.
- [Inclusively Hiding & Styling Checkboxes and Radio Buttons – Sara Soueidan, inclusive design engineer](https://www.sarasoueidan.com/blog/inclusively-hiding-and-styling-checkboxes-and-radio-buttons/) - This article helps me to hide the checkbox inclusively.
- [WebAIM: Skip Navigation Links (#multiple)](https://webaim.org/techniques/skipnav/#multiple) - This article says that, *"For pages that have very few navigable items preceding the main content, a skip link may not be necessary at all."* So, "Skip to main content" link for this challenge is not a necessary thing. But, I need to keep in mind that, *"[...] the purpose of skip navigation links is to make keyboard navigation more efficient."*
- [I Used The Web For A Day With Just A Keyboard — Smashing Magazine](https://www.smashingmagazine.com/2018/07/web-with-just-a-keyboard/) - An incredible article that helps me understand how the keyboard's user interacts with websites. Also, I learn a new ARIA attribute, [`aria-keyshortcuts`](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-keyshortcuts).
- [Maybe Ignore type=search — Adrian Roselli](https://adrianroselli.com/2019/07/ignore-typesearch.html)

## Tools

- [RegExr](https://regexr.com/) - create RegEx
- [Site-Shot](https://www.site-shot.com/) - take screenshot of the website
- [Squoosh](https://squoosh.app/) - optimize images
- [Canva](https://www.canva.com/) - design the banner
- [Chicago - Title Capitalization Tool - Capitalize My Title - Title Case Tool](https://capitalizemytitle.com/style/Chicago/)

## Validations

- [Meta Tags — Preview, Edit and Generate](https://metatags.io/)
- [The W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/)
- [HTML Validator](https://validator.w3.org/nu/) - [The site has two warnings regarding the `ul` element has a `role="list"`](https://validator.w3.org/nu/?doc=https%3A%2F%2Fofficialdevfinder.netlify.app%2F). The reason I added a `role="list"` because I set the `list-style` to `none` which will remove the semantic meaning of the `ul` element.
- [Checklist - The A11Y Project](https://www.a11yproject.com/checklist/)
- [Grammarly](https://www.grammarly.com/) - it helps me fixing the grammar errors in the `README`.

## Others

- [Space Mono](https://fonts.google.com/specimen/Space+Mono)
- [Useful GitHub gist to learn XMLHttpRequest()](https://gist.github.com/jesperorb/c889de6195ee036724b6263148308c86)
- [Search | U.S. Web Design System (USWDS)](https://designsystem.digital.gov/components/search/)
- [JSONPlaceholder - Free Fake REST API](https://jsonplaceholder.typicode.com/) - I played around with this while learning promises and async/await.
- [ipify - A Simple Public IP Address API](https://www.ipify.org/) - I used this API just in case the users fetch too much data from the GitHub API. With this API I can tell the users IP address and then tell them that they have exceeded the limit rate. (I follow the GitHub error message).
- [Phishing by navigating browser tabs - Invalid Reports - Learn - Google Bug Hunters](https://bughunters.google.com/learn/invalid-reports/web-platform/navigation/5825028803002368/phishing-by-navigating-browser-tabs)
- [npm dependencies and devDependencies](https://nodejs.dev/learn/npm-dependencies-and-devdependencies)
- [Visual Studio Code April 2022 - Update (markdown drop into editor to create link)](https://code.visualstudio.com/updates/v1_67#_markdown-drop-in)
- [GitHub Username Policy - GitHub Docs](https://docs.github.com/en/site-policy/other-site-policies/github-username-policy)to-editor-to-create-link)
- [javascript - Extract month, day and year from date regex - Stack Overflow](https://stackoverflow.com/questions/26934703/extract-month-day-and-year-from-date-regex)
- [shinnn/github-username-regex: A regular expression that only matches a currently valid Github username](https://github.com/shinnn/github-username-regex)
- [ryanmcdermott/clean-code-javascript: Clean Code concepts adapted for JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) - this is an amazing repository that I found when I refactored the JavaScript. It contained all guidelines to write good JavaScript.
- [Async/await - Wikipedia](https://en.wikipedia.org/wiki/Async/await)
- [Ajax (programming) - Wikipedia](https://en.wikipedia.org/wiki/Ajax_(programming))
- [XMLHttpRequest - Wikipedia](https://en.wikipedia.org/wiki/XMLHttpRequest)
- [Title Capitalization Rules | Grammarly](https://www.grammarly.com/blog/capitalization-in-the-titles/)
- [:focus-within CSS pseudo-class | Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com/css-focus-within)
