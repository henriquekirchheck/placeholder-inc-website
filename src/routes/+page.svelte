<script>
  import Reservation from "$lib/components/Reservation.svelte";
  import { getLocalTimeZone, now } from "@internationalized/date";

  let dateTime = $state(
    now(getLocalTimeZone()).add({ hours: 2 }).set({ second: 0, millisecond: 0 })
  );
</script>

<div class="flex flex-col justify-between gap-8 p-4 sm:flex-row">
  <Reservation bind:dateTime class="h-fit w-full sm:h-full sm:min-w-80 sm:max-w-md" />
</div>
