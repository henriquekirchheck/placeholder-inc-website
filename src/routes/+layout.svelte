<script lang="ts">
  import { config } from "@fortawesome/fontawesome-svg-core";

  import "@fortawesome/fontawesome-svg-core/styles.css"; // Import the CSS
  config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

  import "../app.css";

  const { children } = $props();
</script>

<div class="h-screen w-screen overflow-y-auto">
  {@render children()}
</div>

<style lang="postcss">
  :global(body) {
    @apply ctp-latte bg-ctp-crust text-ctp-text dark:ctp-mocha;
  }
</style>