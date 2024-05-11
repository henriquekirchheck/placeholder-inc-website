<script lang="ts">
  import { config } from "@fortawesome/fontawesome-svg-core";

  import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
  config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

  import "../app.css";

  const { children } = $props();
</script>

<div class="ctp-latte h-screen w-screen bg-ctp-crust text-ctp-text dark:ctp-mocha">
  {@render children()}
</div>
