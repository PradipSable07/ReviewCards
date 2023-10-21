/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
<<<<<<< HEAD
		extend: {},
=======
		extend: {
			animation: {
				wobble: " wobble 1s linear ",
			},
			keyframes: {
				wobble: {
					"0%": { transform: "translateX(0%)" },
					"15%": { transform: "translateX(-5%) rotate(-5deg)" },

					"45%": { transform: "translateX(-7.5%) rotate(-3deg)" },

					"75%": { transform: "translateX(-5%) rotate(-1deg)" },
					"100%": { transform: "translateX(0%)" },
				},
			},
		},
>>>>>>> 757aeaa (done all implentation)
	},
	plugins: [],
};
