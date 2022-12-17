<script>
/* global PUBLIC_VERSION */
import Json5 from 'json5'
import { toast } from '@zerodevx/svelte-toast'
import { zipurl } from 'zipurl'
import { goto } from '$app/navigation'
import { theme, unformatted, formatted, zipped } from '$lib/stores'
import Icon from '$lib/icons'

// @ts-ignore
const version = PUBLIC_VERSION

function toggle() {
  $theme = $theme === 'dark' ? 'light' : 'dark'
}

function format() {
  try {
    $formatted = Json5.parse($unformatted)
  } catch {
    $formatted = undefined
    toast.push('Invalid JSON')
  }
  if ($formatted) {
    $zipped = zipurl($unformatted)
    goto($zipped)
  }
}
</script>

<svelte:head>
  <title>JSON Pretty Print Online</title>
</svelte:head>

<div class="container prose px-6 pt-8">
  <h1>JSON Pretty Print</h1>
  <div class="flex">
    <a
      class="btn mr-4"
      href="https://github.com/zerodevx/json-pretty-print"
      title="Fork me on Github"
    >
      <p class="font-mono text-xs normal-case m-0">v{version}</p>
      <Icon icon="github" class="w-6 h-6 ml-4" />
    </a>
    {#if $theme === 'dark'}
      <button class="btn" title="Turn lights on" on:click={toggle}>
        <p class="text-xs w-20">LIGHTS OFF</p>
        <Icon icon="light_off" class="w-6 h-6 ml-4" />
      </button>
    {:else}
      <button class="btn" title="Turn lights off" on:click={toggle}>
        <p class="text-xs w-20">LIGHTS ON</p>
        <Icon icon="light_on" class="w-6 h-6 ml-4" />
      </button>
    {/if}
  </div>
  <p>
    Convert <strong>unformatted</strong> JSON into <strong>pretty-printed</strong> JSON and send the
    view as a <strong>shareable</strong> web link. That's it!
  </p>
  <textarea
    class="textarea textarea-bordered w-full h-72 font-mono text-sm tracking-tight break-all"
    placeholder="Paste unformatted JSON here"
    spellcheck="false"
    bind:value={$unformatted}
  />
  <button class="btn w-full" disabled={!$unformatted} on:click={format}>MAKE IT PRETTY</button>
</div>
