<script>
import Header from './Header.svelte'
import { store } from './store.svelte.js'
import logo from '$lib/assets/logo.svg'
import { fly, fade } from 'svelte/transition'
import { version } from '$app/environment'

let { prettify } = $props()

const feats = [
  {
    title: 'Runs locally',
    icon: 'icon-[mdi--lock]',
    desc: 'Your data never leaves your browser.',
    color: 'badge-success'
  },
  {
    title: 'Open source',
    icon: 'icon-[mdi--code]',
    desc: 'Transparent, auditable and community-driven.',
    color: 'badge-info'
  },
  {
    title: 'No tracking',
    icon: 'icon-[mdi--account-off]',
    desc: 'No cookies, no analytics, no fingerprinting.',
    color: 'badge-warning'
  },
  {
    title: 'No ads',
    icon: 'icon-[mdi--cancel]',
    desc: 'Just a simple tool, forever ad-free.',
    color: 'badge-error'
  }
]
</script>

<Header>
  <img class="h-8 w-8" src={logo} alt="logo" />
  <h1 class="ml-2 text-2xl font-bold">json-pretty-print</h1>
  <div class="flex-1"></div>
  <a
    class="btn mx-2 hidden sm:flex"
    href="https://github.com/zerodevx/json-pretty-print"
    target="_blank"
  >
    <span class="icon-[mdi--github] h-6 w-6"></span>
    GitHub
  </a>
</Header>

<div class="mx-auto prose px-2 pt-8 text-center select-text">
  <h1>
    Prettify JSON. <span
      class="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent"
      >Privately.</span
    >
  </h1>
  <p>
    Convert <strong>unformatted</strong> JSON into <strong>pretty-printed</strong> JSON on-device,
    then send the tree view as a <strong>shareable</strong> web link. That's it! 🤪
  </p>

  <div class="mb-6 hidden flex-wrap items-center justify-center gap-2 sm:flex">
    {#each feats as { title, icon, color } (title)}
      <div class="badge badge-lg {color}">
        <span class={icon}></span>
        {title}
      </div>
    {/each}
  </div>

  <div class="relative">
    <textarea
      class="textarea h-80 w-full font-mono text-sm leading-tight tracking-tight"
      spellcheck="false"
      bind:value={store.unformatted}
      onchange={() => (store.hash = '')}
      placeholder="Paste unformatted JSON here"></textarea>
    {#if store.err}
      <div class="absolute bottom-0 w-full p-2" in:fly={{ y: 16 }} out:fade>
        <div role="alert" class="alert w-full alert-soft alert-error opacity-95">
          <span class="icon-[mdi--error]"></span><span>{store.err}</span>
          <div>
            <button
              class="btn-small btn btn-square btn-soft btn-error"
              title="Close"
              onclick={() => (store.err = '')}><span class="icon-[mdi--close]"></span></button
            >
          </div>
        </div>
      </div>
    {/if}
  </div>
  <div class="mt-1 mb-4 flex justify-end pr-1">
    <div class="badge badge-xs">
      {store.unformatted.length.toLocaleString('en-US')} bytes
    </div>
  </div>

  <div class="aura mb-24 aura-rainbow">
    <div class="card-base-100 card">
      <button class="btn h-16 w-56 rounded-lg" onclick={prettify}>MAKE IT PRETTY</button>
    </div>
  </div>
</div>

<div
  class="mx-auto mb-16 grid max-w-5xl grid-cols-1 divide-y divide-base-300 sm:grid-cols-4 sm:divide-x sm:divide-y-0"
>
  {#each feats as { title, icon, desc } (title)}
    <div class="prose prose-sm px-2 text-center">
      <span class="mx-auto {icon} mt-8 h-8 w-8"></span>
      <h3>{title}</h3>
      <p class="mb-8">{desc}</p>
    </div>
  {/each}
</div>

<footer class="select-text">
  <div
    class="flex h-20 w-full flex-row items-center justify-center border-t border-base-300 text-sm"
  >
    <p>
      Sponsor <a
        class="link font-bold"
        href="https://github.com/sponsors/zerodevx?frequency=one-time"
        target="_blank">@zerodevx <span class="icon-[mdi--open-in-new]"></span></a
      >
    </p>
    <div class="flex w-16 justify-center">|</div>
    <p>
      View on <a
        class="link font-bold"
        href="https://github.com/zerodevx/json-pretty-print"
        target="_blank">GitHub <span class="icon-[mdi--open-in-new]"></span></a
      >
    </p>
  </div>
  <p class="border-t border-base-100 p-2 font-mono text-xs">v{version}</p>
</footer>
