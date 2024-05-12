<script lang="ts">
  import { DatePicker, HourPicker } from "$lib/components/time";
  import { ZonedDateTime, getLocalTimeZone, now, today } from "@internationalized/date";
  import type { EventHandler } from "svelte/elements";

  let {
    minimumTime = now(getLocalTimeZone())
      .add({ hours: 1, minutes: 30 })
      .set({ second: 0, millisecond: 0 }),
    dateTime = $bindable(),
    onsubmit,
  }: {
    minimumTime?: ZonedDateTime;
    dateTime: ZonedDateTime;
    onsubmit?: EventHandler<SubmitEvent, HTMLFormElement>;
  } = $props();

  let valid = $state(false);
</script>

<form {onsubmit} class="flex w-96 flex-col justify-between gap-8 rounded-xl bg-ctp-mantle p-5">
  <div class="flex flex-col justify-between gap-6 rounded-xl bg-ctp-mantle">
    <DatePicker
      minDateValue={minimumTime}
      maxDateValue={today(getLocalTimeZone()).add({ months: 1, weeks: 2 })}
      bind:date={dateTime}
    />
    <div class="flex items-center justify-between">
      <span class="text-2xl">Horário:</span>
      <HourPicker minimumTimeValue={minimumTime} bind:time={dateTime} bind:valid />
    </div>
  </div>
  <button
    type="submit"
    class="rounded-xl bg-ctp-green p-4 font-bold text-ctp-crust disabled:bg-ctp-red/20"
    disabled={!valid}
    aria-disabled={!valid}>Confirmar Reserva</button
  >
</form>
