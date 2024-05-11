<script lang="ts">
  import { Calendar } from "$lib/components/time";
  import { getLocalTimeZone, today, type CalendarDate } from "@internationalized/date";
  let date: CalendarDate = $state(today(getLocalTimeZone()));
</script>

<h1 class="text-xl font-bold">{date?.toString()}</h1>
<div class="w-96 rounded-xl bg-ctp-mantle">
  <Calendar
    minDateValue={today(getLocalTimeZone())}
    maxDateValue={today(getLocalTimeZone()).add({months: 1, weeks: 2})}
    bind:dateValue={date}
  />
</div>
