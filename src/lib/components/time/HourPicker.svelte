<script lang="ts">
  import { ZonedDateTime } from "@internationalized/date";

  type Enumerate<N extends number, Acc extends number[] = []> = Acc["length"] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc["length"]]>;

  type IntRange<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>;

  function createTimeUnit<Min extends number, Max extends number, Range extends IntRange<Min, Max>>(
    min: Min,
    max: Max,
    defaultValue: NoInfer<Range>,
    checkFn: (value: Range) => boolean = () => false
  ) {
    let timeUnit = $state(defaultValue);

    return {
      get value(): Range {
        return timeUnit;
      },
      set value(value: string) {
        const numericValue = Number(value);
        if (
          numericValue < min ||
          numericValue >= max ||
          isNaN(numericValue) ||
          checkFn(numericValue as Range)
        )
          return;
        timeUnit = Number(value) as Range;
      },
    };
  }

  let {
    minimumTimeValue,
    time = $bindable(),
    valid = $bindable(true),
  }: { minimumTimeValue: ZonedDateTime; time: ZonedDateTime; valid?: boolean } = $props();

  const hour = createTimeUnit(0, 24, time.hour as any);
  const minute = createTimeUnit(0, 60, time.minute as any);

  $effect(() => {
    valid = minimumTimeValue.compare(time.set({ hour: hour.value, minute: minute.value })) < 0;
  });

  $effect(() => {
    time = time.set({ hour: hour.value, minute: minute.value });
  });
</script>

{#snippet timeInput(name, label, placeholder, timeUnit)}
  <div class="flex h-16 w-16 flex-col gap-1">
    <label for={name} class="sr-only">
      <span>{label}</span>
    </label>

    <input
      {name}
      type="text"
      class="flex h-full w-full items-center justify-between rounded-lg border-none bg-ctp-surface0 p-1 text-center text-3xl text-ctp-text"
      placeholder={placeholder.padStart(2, "0")}
      inputmode="numeric"
      oninput={(e) => {
        timeUnit.value = e.currentTarget.value;
        e.currentTarget.value = String(timeUnit.value).padStart(2, "0");
      }}
    />
  </div>
{/snippet}

<div
  class="flex items-center justify-between gap-2 rounded-lg border-2"
  class:border-transparent={valid}
  class:border-ctp-red={!valid}
>
  {@render timeInput("hour", "Hora", String(time.hour), hour)}
  <div class="text-4xl">:</div>
  {@render timeInput("minute", "Minuto", String(time.minute), minute)}
</div>
