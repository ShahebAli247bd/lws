module.exports = {
    darkMode: "class", // Enable dark mode using a class
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                darkblueish: "#0A1F44",
                lightblue: "#00A9E2",
            },
            keyframes: {
                "bounce-2": {
                    "0%, 100%": { transform: "translateY(0)" }, // Start and end at original position
                    "25%": { transform: "translateY(-8px)" }, // Move up slightly
                    "50%": { transform: "translateY(0)" }, // Back to original position
                    "75%": { transform: "translateY(8px)" }, // Move down slightly
                },
            },
            animation: {
                "bounce-2":
                    "bounce-2 1s cubic-bezier(0.42, 0, 0.58, 1) infinite", // smoother bounce using cubic-bezier
            },
        },
    },
    plugins: [],
};
