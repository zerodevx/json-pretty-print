<script>
import './layout.css'
import favicon from '$lib/assets/logo.svg'
import { setContext } from 'svelte'

let { children } = $props()

/** @type {{ header: import('svelte').Snippet | null }} */
let store = $state({ header: null })

setContext('store', store)
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <title>JSON Pretty Print | No ads, no tracking, open-source</title>
</svelte:head>

<header class="navbar mb-6 bg-base-100 shadow-sm">
  {#if store.header}{@render store.header()}{/if}
  <label class="toggle mx-2 text-base-content">
    <input type="checkbox" value="dark" class="theme-controller" />
    <span class="icon-[mdi--weather-sunny]"></span>
    <span class="icon-[mdi--weather-night]"></span>
  </label>
</header>

{@render children()}
