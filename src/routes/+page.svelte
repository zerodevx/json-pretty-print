<script>
import { getContext } from 'svelte'
import favicon from '$lib/assets/logo.svg'
import { version } from '$app/environment'
//import { resolve } from '$app/paths'
//import { page } from '$app/state'

/** @type {{ header: import('svelte').Snippet | null }} */
let store = getContext('store')

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

/** @param {HashChangeEvent} e */
/*
function onhashchange(e) {
  const url = new URL(e.newURL)
  console.log(resolve(url.hash))
}
*/

$effect(() => {
  store.header = header
  return () => (store.header = null)
})
</script>

{#snippet header()}
  <img class="h-8 w-8" src={favicon} alt="logo" />
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
{/snippet}

<div class="mx-auto prose px-2 text-center">
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

  <textarea
    class="textarea mb-4 h-64 w-full font-mono text-sm leading-tight tracking-tight"
    spellcheck="false"
    placeholder="Paste unformatted JSON here"></textarea>

  <div class="aura mb-16 aura-rainbow">
    <div class="card-base-100 card">
      <button class="btn h-16 w-56 rounded-lg">MAKE IT PRETTY</button>
    </div>
  </div>

  <div class="mb-8 grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-base-300">
    {#each feats as { title, icon, desc } (title)}
      <div class="prose prose-sm mb-8 px-2 text-center">
        <span class="mx-auto {icon} h-8 w-8"></span>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    {/each}
  </div>
</div>

<footer>
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
  <p class="bg-base-content p-2 font-mono text-xs text-base-300">v{version}</p>
</footer>
