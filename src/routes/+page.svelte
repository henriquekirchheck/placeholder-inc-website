<script lang="ts">
  import { Calendar } from "$lib/components/time";
  import type { DateValue } from "@internationalized/date";
  let date: DateValue | undefined = $state();
</script>

<h1>Welcome to Svelte</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>{date?.toString()}</p>
<div class="w-96 rounded-xl bg-ctp-mantle">
  <Calendar bind:dateValue={date} />
</div>
