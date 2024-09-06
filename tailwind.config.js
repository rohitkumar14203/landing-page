// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./*.{html,js}"],
//   theme: {
//     extend: {
//       backgroundImage: {
//         Image: "url('./css/img/header-img.avif')",
//       },
//     },
//   },
//   plugins: [],
// };
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('./css/img/headerImg.avif')",
      },
    },
  },
  plugins: [],
};
