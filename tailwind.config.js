module.exports = {
  mode: "jit",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        "chat-body-bgimg": "url('/chat-body-bgimg.png')",
      }),
    },
  },
  plugins: [],
}
