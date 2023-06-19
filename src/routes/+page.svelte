<script>
/* global PUBLIC_VERSION */
import Json5 from 'json5'
import { zipurl } from 'zipurl'
import { toast } from '@zerodevx/svelte-toast'
import { browser } from '$app/environment'
import { page } from '$app/stores'
import { base } from '$app/paths'
import { goto } from '$app/navigation'
import { theme, unformatted, formatted } from '$lib/stores'
import Icon from '$lib/icons'

// @ts-ignore
const version = PUBLIC_VERSION

function toggle() {
  $theme = $theme === 'dark' ? 'light' : 'dark'
}

function format() {
  try {
    $formatted = Json5.parse($unformatted)
    goto(`${base}/${zipurl($unformatted)}/`)
  } catch (err) {
    console.error(err)
    toast.push('Invalid JSON')
  }
}

// Legacy support
if (browser) {
  const params = $page.url.searchParams
  const data = params.get('json') || params.get('data') || undefined
  if (data) goto(`${base}/${data}/`)
}
</script>

<div class="max-w-4xl mx-auto px-2 pt-8">
  <div class="flex flex-wrap items-center justify-center mb-6">
    <div class="flex flex-col md:flex-row items-center mb-4 md:mb-0">
      <h1 class="text-4xl font-extrabold mb-2 md:mb-0">JSON Pretty Print</h1>
      <span class="badge badge-sm font-mono md:ml-3 md:mt-3">v{version}</span>
    </div>
    <div class="md:flex-1" />
    <div class="join border">
      <a
        class="btn btn-ghost join-item"
        href="https://github.com/zerodevx/json-pretty-print"
        title="Visit Github repo"><Icon class="w-6 h-6 mr-1" icon="github" />Github</a
      >
      <a
        class="btn btn-ghost join-item"
        href="https://github.com/sponsors/zerodevx"
        title="Sponsor this project"><Icon class="w-6 h-6 mr-1" icon="coffee" />SPONSOR</a
      >
      {#if $theme === 'dark'}
        <button class="btn btn-square btn-ghost join-item" title="Turn lights on" on:click={toggle}>
          <Icon icon="light_off" class="w-6 h-6" />
        </button>
      {:else}
        <button
          class="btn btn-square btn-ghost join-item"
          title="Turn lights off"
          on:click={toggle}
        >
          <Icon icon="light_on" class="w-6 h-6" />
        </button>
      {/if}
    </div>
  </div>
  <p class="text-center mb-6">
    Convert <strong>unformatted</strong> JSON into <strong>pretty-printed</strong> JSON and send the
    view as a <strong>shareable</strong> web link. That's it! 🤪
  </p>
  <div
    class="mockup-window border bg-base-300 mb-8 outline-2 outline-offset-2 focus-within:outline"
  >
    <div class="bg-base-100 p-2">
      <textarea
        class="w-full h-48 md:h-72 bg-transparent font-mono text-sm tracking-tight break-all focus:outline-none"
        placeholder="Paste unformatted JSON here"
        spellcheck="false"
        bind:value={$unformatted}
      />
    </div>
  </div>
  <button class="btn btn-primary w-full" disabled={!$unformatted} on:click={format}
    >MAKE IT PRETTY</button
  >
</div>
