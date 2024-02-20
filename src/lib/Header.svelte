<script context="module">
import { browser } from '$app/environment'

let dark = false
if (browser && window.matchMedia('(prefers-color-scheme: dark)').matches) dark = true
</script>

<header class="sticky top-0 flex h-16 items-center border-b border-base-300 bg-base-100 px-4">
  <slot />
  <div class="flex-1" />
  <label
    class="ml-2 flex cursor-pointer items-center gap-1"
    title="Toggle theme"
    aria-label="Toggle theme"
  >
    <span class="icon-[mdi--weather-sunny] h-4 w-4" />
    <input
      class="theme-controller toggle toggle-sm"
      class:rotate-180={dark}
      type="checkbox"
      value={dark ? 'light' : 'dark'}
      aria-label="Toggle theme"
    />
    <span class="icon-[mdi--weather-night] h-4 w-4" />
  </label>
</header>
