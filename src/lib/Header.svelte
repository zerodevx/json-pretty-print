<script context="module">
import { browser } from '$app/environment'

let dark = false
if (browser && window.matchMedia('(prefers-color-scheme: dark)').matches) dark = true
</script>

<header class="sticky top-0 flex h-16 items-center border-b border-base-300 bg-base-100">
  <slot />
  <div class="flex-1" />
  <label
    class="mr-1 grid cursor-pointer place-items-center sm:mr-4"
    title="Toggle theme"
    aria-label="Toggle theme"
  >
    <input
      class="theme-controller toggle col-span-2 col-start-1 row-start-1 bg-base-content"
      class:rotate-180={dark}
      type="checkbox"
      value={dark ? 'light' : 'dark'}
      aria-label="Toggle theme"
    />
    <span class="icon-[mdi--weather-sunny] col-start-1 row-start-1 h-4 w-4" />
    <span class="icon-[mdi--weather-night] col-start-2 row-start-1 h-4 w-4" />
  </label>
</header>
