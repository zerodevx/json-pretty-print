<script module>
import { browser } from '$app/environment'

let checked = $state(false)
let dark = $state(false)

const icons = ['icon-[mdi--weather-sunny]', 'icon-[mdi--moon-waning-crescent]']
const reversed = [...icons].reverse()

if (browser && window.matchMedia('(prefers-color-scheme: dark)').matches) dark = true
</script>

<script>
let { children } = $props()
</script>

<header class="navbar sticky top-0 z-10 bg-base-100 shadow-sm">
  {@render children()}
  <label class="toggle mr-2 text-base-content" title="Toggle theme">
    <input
      type="checkbox"
      value={dark ? 'light' : 'dark'}
      class="theme-controller"
      class:rotate-180={dark}
      bind:checked
    />
    {#if dark}
      {#each reversed as i (i)}<span class={i}></span>{/each}
    {:else}
      {#each icons as i (i)}<span class={i}></span>{/each}
    {/if}
  </label>
</header>
