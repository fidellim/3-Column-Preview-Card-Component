# Frontend Mentor - 3-column preview card component solution

This is a solution to the [3-column preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/3column-preview-card-component-pH92eAR2-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

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

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements

### Screenshot

![Solution PC](./images/Solution%20PC.png)
![Solution Mobile](./images/Solution%20Mobile.png)

### Links

- Solution URL: [Solution URL](https://github.com/fidellim/3-Column-Preview-Card-Component)
- Live Site URL: [Add live site URL here](https://elastic-darwin-f188bb.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Tailwindcss

### What I learned

What I learned from this challenge is on how to implement tailwindcss. I was able to familiarize myself from using it and try to mimick the design as similar as possible. I was able to use make the challenge responsive as well.

```html
<div class="p-8 card-container bg-brightOrange">
	<img src="./images/icon-sedans.svg" alt="sedans" class="pb-5" />
	<h1
		class="uppercase pb-6 font-bigShouldersDisplay font-bold text-3xl text-veryLightGray"
	>
		sedans
	</h1>
	<p
		class="pb-5 pr-8 md:pr-0 md:w-44 lg:w-48 min-w-min md:pb-20 leading-6 text-transparentWhite text-sm font-lexendDeca"
	>
		Choose a sedan for its affordability and excellent fuel economy. Ideal for
		cruising in the city or on your next road trip.
	</p>
	<button
		class="px-7 py-2 rounded-3xl font-lexendDeca bg-veryLightGray text-brightOrange text-base"
	>
		Learn More
	</button>
</div>
```

```js
theme: {
  fontFamily: {
    lexendDeca: "var(--lexendDeca)",
    bigShouldersDisplay: "var(--bigShouldersDisplay)",
  },
};
```

### Continued development

I am looking forward to use more tailwindcss to familiarize myself with the technology.

### Useful resources

- [Intro & Setup](https://www.youtube.com/watch?v=bxmDnn7lrnk) - This video helped me install tailwindcss.
- [Tailwindcss Documentation](https://tailwindcss.com/docs/) - This documentation helped me with the specifications I need to adjust with my markup.

## Author

- Website - [Fidel Lim](https://fidellim-portfolio.netlify.app/)
- Frontend Mentor - [@fidellim](https://www.frontendmentor.io/profile/fidellim)
- Github - [@fidellim](https://github.com/fidellim)
