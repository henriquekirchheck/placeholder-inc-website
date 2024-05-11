<script lang="ts">
  import "../app.css";

  const { children } = $props();
</script>

<div class="ctp-latte h-screen w-screen bg-ctp-base text-ctp-text dark:ctp-mocha">
  {@render children()}
</div>
