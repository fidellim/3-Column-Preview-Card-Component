module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			lexendDeca: "var(--lexendDeca)",
			bigShouldersDisplay: "var(--bigShouldersDisplay)",
		},
		extend: {
			colors: {
				//add new colors
				brightOrange: "var(--brightOrange)",
				darkCyan: "var(--darkCyan)",
				veryDarkCyan: "var(--veryDarkCyan)",
				transparentWhite: "var(--transparentWhite)", //paragraphs
				veryLightGray: "var(--veryLightGray)", //bg, headings, buttons
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
//if you want to override dont put in extend
