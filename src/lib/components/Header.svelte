<script lang="ts">
  import { FaPizzaSlice } from "$lib/assets/icons/fontAwesome";
  import WigglySeparator from "$lib/assets/wigglySeparator.svelte";
  import { identicon } from "@dicebear/collection";
  import { createAvatar } from "@dicebear/core";
  import type { HTMLAttributes } from "svelte/elements";

  const { class: className, ...props }: HTMLAttributes<HTMLDivElement> = $props();
  const avatar = createAvatar(identicon, {
    seed: "Test Seed",
    size: 120,
  }).toDataUriSync();
</script>

<div class={`flex flex-col ${className}`} {...props}>
  <header class="flex justify-between">
    <div class="flex items-center justify-between gap-3 p-2 sm:p-3">
      <FaPizzaSlice class="text-3xl text-ctp-red sm:text-4xl" />
      <span class="font-dancing-script text-2xl font-bold sm:text-3xl">Placeholder Inc.</span>
    </div>
    <div class="flex items-center justify-between gap-3 p-2 font-poppins sm:p-3">
      <span>&lbrace;name&rbrace;</span>
      <img src={avatar} class="w-8 rounded-lg sm:w-10" alt="Avatar" />
    </div>
  </header>
  <WigglySeparator class="h-7 w-full text-ctp-peach" preserveAspectRatio="none" />
</div>
