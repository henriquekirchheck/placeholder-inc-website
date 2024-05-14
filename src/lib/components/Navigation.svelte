<script lang="ts">
  import { crossfade } from "svelte/transition";

  const { pathname, class: className }: { pathname: string; class?: string } = $props();
  type Route = {
    readonly href: string;
    readonly name: string;
    readonly external: boolean;
  };
  const routes: Route[] = [
    {
      href: "/",
      name: "Home",
      external: false,
    },
    {
      href: "/menu",
      name: "Cardapio",
      external: false,
    },
    {
      href: "/about",
      name: "Sobre",
      external: false,
    },
  ];

  const key = Symbol();
  const [send, receive] = crossfade({
    duration: 500,
  });

  $inspect(pathname);
</script>

<nav class={className}>
  <ul class="flex h-full w-full items-center justify-center gap-2 font-poppins">
    {#each routes as route}
      <li
        class="group relative rounded-lg bg-ctp-crust p-1.5 text-ctp-text transition-all hover:ctp-latte"
      >
        <a href={route.href}>{route.name}</a>
        {#if route.href === pathname}
          <div
            class="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-1 rounded-sm bg-ctp-text transition-all group-hover:bottom-1 group-hover:left-1 group-hover:right-1"
            in:receive={{ key }}
            out:send={{ key }}
          ></div>
        {/if}
      </li>
    {/each}
  </ul>
</nav>
