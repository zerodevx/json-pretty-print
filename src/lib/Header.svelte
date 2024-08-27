<script context="module">
import { browser } from '$app/environment'

let checked = false
let dark = false
if (browser && window.matchMedia('(prefers-color-scheme: dark)').matches) dark = true
</script>

<header class="sticky top-0 flex h-16 items-center border-b border-base-300 bg-base-100">
  <div class="flex h-16 flex-1 items-center overflow-x-auto">
    <slot />
  </div>
  <label
    class="mr-4 grid cursor-pointer place-items-center"
    title="Toggle theme"
    aria-label="Toggle theme"
  >
    <input
      class="theme-controller toggle col-span-2 col-start-1 row-start-1 bg-base-content"
      class:rotate-180={dark}
      type="checkbox"
      value={dark ? 'light' : 'dark'}
      aria-label="Toggle theme"
      bind:checked
    />
    <span class="iconify col-start-1 row-start-1 mdi--weather-sunny" />
    <span class="iconify col-start-2 row-start-1 mdi--weather-night" />
  </label>
</header>
