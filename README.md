# huddle-landing-page
# Frontend Mentor - Huddle landing page with curved sections solution

This is a solution to the [Huddle landing page with curved sections challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot
![](./1440email_error.png)
![](./1440px_button_active.png)
![](./1440px.png)
![](./375form_error.png)
![](./375px_button_active.png)
![](./375px.png)


### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- HTML Forms
- Mobile-first workflow
- [https://boxicons.com] (https://boxicons.com) - I copied the social media icons from this website.


### What I learned

- I coded the design for mobile and desktop sizes. The curved images aren´t appropriately sized for tablet sizes. 
- Using contact form API: creating a form which sends the data to the given email address after submitting the form. I followed the instructions of the website [https://web3forms.com]. The code below:

```html
 <form action="https://api.web3forms.com/submit" method="POST" id="form">

          <input type="hidden" name="access_key" id="access-key" value="db073e47-3004-42f4-9242-64af4e35b60b">

          <label for="email" style="display: none; width: 0rem; height: 0rem;">E-mail</label>
          <input type="email" name="email" id="email" spellcheck="true" contenteditable="true">
          <input type="hidden" name="redirect" id="redirect" value="https://web3forms.com/success">
          <button type="submit" id="email" class="subscribe">Subscribe</button>
        </form>
```


### Continued development

- JS skills
- Creating forms for email subscriptions [https://web3forms.com]
- Creative layouts 


### Useful resources

- [https://htmlcolors.com/hsl-to-hex] - (https://boxicons.com/?query=facebook) - I converted the hsl color to hex. 
- [https://w3schools.com] - (https://w3schools.com) - I converted the hsl color to hex. 
- [https://www.youtube.com/results?search_query=webdev+simplified] - (https://www.youtube.com/results?search_query=webdev+simplified) - help on email spell check

- [https://web3forms.com] (https://web3forms.com) - creating forms to collect form data, the submitted data will be sent to your email address.


## Author

- Website - [Andrea Hideg](https://www.your-site.com)
- Frontend Mentor - [@MirMurr](https://www.frontendmentor.io/profile/MirMurr)


## Acknowledgments

CodeCademy, Webdev simplified Youtube chanel, W3Schools website.
