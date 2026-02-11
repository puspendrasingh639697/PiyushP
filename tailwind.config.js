// // /** @type {import('tailwindcss').Config} */
// // export default {
// //   content: [
// //     "./index.html",
// //     "./src/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   theme: {
// //     extend: {},
// //   },
// //   plugins: [],
// // }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//    extend: {
//   animation: {
//     typing: "typing 2.5s steps(12)",
//     blink: "blink 1s step-end infinite",
//   },
//   keyframes: {
//     typing: {
//       from: { width: "0%" },
//       to: { width: "100%" },
//     },
//     blink: {
//       "50%": { borderColor: "transparent" },
//     },
//   },
// },

//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "40%": { width: "100%" },
          "60%": { width: "100%" },
          "100%": { width: "0%" },
        },
        blink: {
          "0%, 50%, 100%": { borderColor: "transparent" },
          "25%, 75%": { borderColor: "#111827" },
        },
      },
      animation: {
        typing: "typing 5s steps(12) infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
}
