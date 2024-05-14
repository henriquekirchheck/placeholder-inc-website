<script lang="ts">
  import type { SVGAttributes } from "svelte/elements";
  const { ...props }: SVGAttributes<SVGElement> = $props();
</script>

<svg
  id="visual"
  viewBox="0 0 4000 100"
  width="40em"
  height="1em"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  version="1.1"
  {...props}
>
  <path
    d="M0 36L29 37.7C58 39.3 116 42.7 174 41.7C232 40.7 290 35.3 348 36.8C406 38.3 464 46.7 522 52.8C580 59 638 63 696 62.2C754 61.3 812 55.7 869.8 55.5C927.7 55.3 985.3 60.7 1043.2 63.7C1101 66.7 1159 67.3 1217 61.5C1275 55.7 1333 43.3 1391 39.3C1449 35.3 1507 39.7 1565 43.5C1623 47.3 1681 50.7 1739 51.3C1797 52 1855 50 1913 46.3C1971 42.7 2029 37.3 2087 37.8C2145 38.3 2203 44.7 2261 48C2319 51.3 2377 51.7 2435 48.5C2493 45.3 2551 38.7 2609 39.7C2667 40.7 2725 49.3 2783 54.3C2841 59.3 2899 60.7 2956.8 61.5C3014.7 62.3 3072.3 62.7 3130.2 62C3188 61.3 3246 59.7 3304 54.8C3362 50 3420 42 3478 38.2C3536 34.3 3594 34.7 3652 35.3C3710 36 3768 37 3826 41.2C3884 45.3 3942 52.7 3971 56.3L4000 60"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="miter"
    stroke="currentColor"
    stroke-width="40"
  />
</svg>
