<script lang="ts">
  import { Calendar } from "$lib/components/time";
  import { getLocalTimeZone, today, type CalendarDate } from "@internationalized/date";
  let date: CalendarDate = $state(today(getLocalTimeZone()));
</script>

<h1>Welcome to Svelte</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<p>{date?.toString()}</p>
<div class="w-96 rounded-xl bg-ctp-mantle">
  <Calendar
    defineDisabledDates={(date) => date.compare(today(getLocalTimeZone())) < 0}
    bind:dateValue={date}
  />
</div>
