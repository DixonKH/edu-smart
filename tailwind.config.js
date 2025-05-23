/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: "true",
        padding: {
          DEFAULT: "1rem",
          md: "3rem",
        },
      },
      colors: {
        green: " #00987b",
        green1: "#0b736b",
        green2: "#008e72",
        green3: "#0ba88d",
        bgGreen: "#1eba9e",
        red:"#b81343",
        blue: "#4379F2",
        yellow: "#f4ce14",
        royalBlue: "#4379f2",
        orange: "#ff6600",
        iris: "#7164f7",
        background: "hsl(var(--background))",
        background2: "#f5f5f5",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
      screens: {
        sm: "375px",
        base: "480px",
        md: "768px",
        lg: "1300px",
      },
      content: {
        view: "url(./assets/View.jpg)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        xl: "rgba(0, 0, 0, 0.25) 0px 5px 15px 0px",
        xl2: "rgba(0, 0, 0, 0.35) 0px 5px 15px 0px",
      },
      
    },
  },
  plugins: [require("tailwindcss-animate")],
};
