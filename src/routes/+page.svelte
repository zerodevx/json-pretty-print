<script>
import Json5 from 'json5'
import { zipurl } from 'zipurl'
import { toast } from '@zerodevx/svelte-toast'
import { browser, version } from '$app/environment'
import { page } from '$app/stores'
import { base } from '$app/paths'
import { goto } from '$app/navigation'
import { unformatted, formatted, sendPageView } from '$lib/stores'
import Header from '$lib/Header.svelte'

function submit() {
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
  if (data) goto(`${base}/${data}/`, { replaceState: true })
}

sendPageView()
</script>

<Header>
  <img class="ml-4 mr-2 h-8 w-8" src="{base}/favicon.png" alt="logo" />
  <h1>JSON Pretty Print Online</h1>
  <span class="flex-1" />
</Header>

<section class="prose mx-auto mb-12 mt-8 text-pretty px-6">
  <p>
    Convert <strong>unformatted</strong> JSON into <strong>pretty-printed</strong> JSON and send the
    view as a <strong>shareable</strong> web link. That's it! 🤪
  </p>
  <form on:submit|preventDefault={submit}>
    <textarea
      class="textarea textarea-bordered h-72 w-full font-mono text-sm leading-tight tracking-tight"
      placeholder="Paste unformatted JSON here"
      spellcheck="false"
      bind:value={$unformatted}
    />
    <button class="btn btn-primary btn-block" type="submit">MAKE IT PRETTY</button>
  </form>
  <ul class="mt-8 text-xs">
    <li>JSON Pretty Print Online runs entirely on your device - no JSON data is transmitted.</li>
    <li>Page view analytics are scrubbed of any identifying JSON data.</li>
    <li>
      Project is <a class="link" href="https://github.com/zerodevx/json-pretty-print"
        >open-sourced at Github</a
      > and statically hosted on Github Pages.
    </li>
  </ul>
  <div class="flex justify-end"></div>
</section>

<footer
  class="fixed bottom-0 left-0 flex h-10 w-full items-center justify-between border-t border-base-300 bg-base-200 px-4"
>
  <p class="font-mono text-xs">v{version}</p>
  <a class="btn btn-outline btn-xs" href="https://github.com/sponsors/zerodevx"
    >BUY ME A COFFEE<span class="icon-[mdi--coffee] h-4 w-4" /></a
  >
</footer>
