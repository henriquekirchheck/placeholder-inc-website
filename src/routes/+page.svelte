<script>
  import Reservation from "$lib/components/Reservation.svelte";
  import { getLocalTimeZone, now } from "@internationalized/date";

  let dateTime = $state(
    now(getLocalTimeZone()).add({ hours: 2 }).set({ second: 0, millisecond: 0 })
  );
</script>

<div class="p-4">
  <Reservation bind:dateTime/>
</div>
