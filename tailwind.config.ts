import catppuccin from "@catppuccin/tailwindcss";
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import theme from "tailwindcss/defaultTheme"
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  safelist: ["mocha", "macchiato", "frappe", "latte"],

  theme: {
    extend: {
      fontFamily: {
        "poppins": ["Poppins", ...theme.fontFamily.sans],
        "inter": ["Inter Variable", ...theme.fontFamily.sans],
        "dancing-script": ["Dancing Script Variable", "cursive"]
      }
    },
  },

  plugins: [catppuccin({ prefix: "ctp" }), typography, forms],
} satisfies Config;
