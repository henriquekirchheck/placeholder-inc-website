<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import "../app.css";

  import "@fontsource-variable/inter";
  import "@fontsource/poppins";
  // Supports weights 400-700
  import "@fontsource-variable/dancing-script";
  import type { Snippet } from "svelte";
  import type { LayoutData } from "./$types";

  const { children, data }: { children: Snippet; data: LayoutData } = $props();
</script>

<div class="min-w-dvw layout grid min-h-dvh grid-cols-1 overflow-y-auto">
  <Header pathname={data.pathname} />
  {@render children()}
</div>

<style lang="postcss">
  :global(body) {
    @apply ctp-latte bg-ctp-crust text-ctp-text dark:ctp-mocha;
  }

  .layout {
    grid-template-rows: min-content 1fr;
  }
</style>
