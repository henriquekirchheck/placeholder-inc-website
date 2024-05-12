<script lang="ts">
  import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import {
    ZonedDateTime,
    getLocalTimeZone,
    isToday,
    today,
    type DateValue,
  } from "@internationalized/date";
  import { createCalendar, melt } from "@melt-ui/svelte";

  let {
    label,
    date = $bindable(),
    maxDateValue: maxValue,
    minDateValue: minValue,
    disabled,
    defineDisabledDates,
    defineUnavailableDates,
  }: {
    label?: string;
    date: ZonedDateTime;
    minDateValue: ZonedDateTime;
    maxDateValue?: DateValue;
    disabled?: boolean;
    defineDisabledDates?: (date: DateValue) => boolean;
    defineUnavailableDates?: (date: DateValue) => boolean;
  } = $props();

  const {
    elements: { calendar, cell, grid, heading, nextButton, prevButton },
    states: { headingValue, months, value, weekdays },
    helpers: { isDateDisabled, isDateUnavailable },
  } = createCalendar({
    locale: "pt-br",
    fixedWeeks: true,
    preventDeselect: true,
    weekdayFormat: "short",
    calendarLabel: label,
    isDateDisabled: defineDisabledDates,
    isDateUnavailable: defineUnavailableDates,
    minValue: isToday(minValue, minValue.timeZone)
      ? today(getLocalTimeZone())
      : today(getLocalTimeZone()).add({ days: 1 }),
    maxValue,
    disabled,
    defaultValue: date,
  });

  $effect(() => {
    date = $value!;
  });

  const capitalizeFirstCharacter = (text: string) => {
    return text.charAt(0).toUpperCase() + text.slice(1);
  };
  const removeLastCharacter = (text: string) => {
    return text.slice(0, text.length - 1);
  };
</script>

<div use:melt={$calendar} class="flex w-full flex-col gap-4">
  <header class="flex items-center justify-between">
    <div use:melt={$heading} class="font-bold">{capitalizeFirstCharacter($headingValue)}</div>
    <div class="flex justify-between gap-4">
      <button
        use:melt={$prevButton}
        class="block rounded-lg p-1 transition-all hover:bg-ctp-sapphire/20 aria-disabled:pointer-events-none aria-disabled:opacity-40"
      >
        <FontAwesomeIcon icon={faAngleLeft} class="flex h-5 w-5 items-center justify-center" />
      </button>
      <button
        use:melt={$nextButton}
        class="block rounded-lg p-1 transition-all hover:bg-ctp-sapphire/20 aria-disabled:pointer-events-none aria-disabled:opacity-40"
      >
        <FontAwesomeIcon icon={faAngleRight} class="flex h-5 w-5 items-center justify-center" />
      </button>
    </div>
  </header>
  <div class="flex items-center gap-6">
    {#each $months as month}
      <table use:melt={$grid} class="grid w-full grid-cols-7 justify-items-center gap-1">
        <thead aria-hidden="true" class="contents">
          <tr class="contents">
            {#each $weekdays as day}
              <th>
                <div class="flex items-center justify-center text-sm">
                  {removeLastCharacter(capitalizeFirstCharacter(day))}
                </div>
              </th>
            {/each}
          </tr>
        </thead>
        <tbody class="contents">
          {#each month.weeks as weekDates}
            <tr class="contents">
              {#each weekDates as date}
                <td
                  role="gridcell"
                  aria-disabled={$isDateDisabled(date) || $isDateUnavailable(date)}
                >
                  <div
                    use:melt={$cell(date, month.value)}
                    class="flex h-6 w-6 cursor-pointer select-none items-center justify-center rounded-lg p-4 transition-all hover:bg-ctp-sapphire/20 focus:ring focus:ring-ctp-red/15 aria-disabled:pointer-events-none aria-disabled:opacity-40 aria-selected:bg-ctp-sapphire aria-selected:text-ctp-crust"
                  >
                    {date.day}
                  </div>
                </td>
              {/each}
            </tr>
          {/each}
        </tbody>
      </table>
    {/each}
  </div>
</div>
