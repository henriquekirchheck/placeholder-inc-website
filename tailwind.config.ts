import catppuccin from "@catppuccin/tailwindcss";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  safelist: ["mocha", "macchiato", "frappe", "latte"],

  theme: {
    extend: {},
  },

  plugins: [catppuccin({ prefix: "ctp" }), typography],
} satisfies Config;
