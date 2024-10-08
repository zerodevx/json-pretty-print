<script>
import Json5 from 'json5'
import { unzipurl } from 'zipurl'
import { toast } from '@zerodevx/svelte-toast'
import { JsonView } from '@zerodevx/svelte-json-view'
import Copy from 'copy-to-clipboard'
import { page } from '$app/stores'
import { base } from '$app/paths'
import Header from '$lib/Header.svelte'
import { unformatted, formatted } from '$lib/stores'
import { onMount } from 'svelte'

const indentList = ['0.5', '1', '1.5', '2']
const fontList = ['text-xs', 'text-sm', 'text-base', 'text-lg']
let depth = Infinity
let indent = 1
let font = 1

function copy() {
  Copy(JSON.stringify($formatted, null, 2))
  toast.push('JSON copied to clipboard')
}

function share() {
  if (navigator.share) {
    navigator.share({
      title: 'JSON Pretty Print Online',
      text: 'Share this JSON view',
      url: $page.url.href
    })
  } else {
    Copy($page.url.href)
    toast.push('URL copied to clipboard')
  }
}

onMount(() => {
  if (!$formatted) {
    try {
      $unformatted = unzipurl($page.params.data)
      $formatted = Json5.parse($unformatted)
    } catch (err) {
      console.error(err)
      toast.push('Data URL malformed')
    }
  }
})
</script>

<svelte:head>
  <meta name="robots" content="noindex" />
</svelte:head>

<Header>
  <a class="btn btn-square ml-2 mr-1" title="Close" href="{base}/">
    <span class="iconify h-6 w-6 mdi--close" />
  </a>
  {#if depth}
    <button class="btn btn-square mr-1" title="Collapse all" on:click={() => (depth = 0)}>
      <span class="iconify h-6 w-6 mdi--arrow-collapse-left" />
    </button>
  {:else}
    <button class="btn btn-square mr-1" title="Expand all" on:click={() => (depth = Infinity)}>
      <span class="iconify h-6 w-6 mdi--arrow-collapse-right" />
    </button>
  {/if}
  <button
    class="btn btn-square mr-1"
    title="Indent"
    on:click={() => {
      indent = indent === 3 ? 0 : indent + 1
    }}
  >
    <span class="iconify h-6 w-6 mdi--indent" />
  </button>
  <button
    class="btn btn-square mr-1"
    title="Font size"
    on:click={() => {
      font = font === 3 ? 0 : font + 1
    }}
  >
    <span class="iconify h-6 w-6 mdi--format-size" />
  </button>
  <button class="btn btn-square mr-1" title="Copy to clipboard" on:click={copy}>
    <span class="iconify h-6 w-6 mdi--content-copy" />
  </button>
  <button class="btn btn-square mr-1" title="Share URL" on:click={share}>
    <span class="iconify h-6 w-6 mdi--share" />
  </button>
</Header>

<div
  class="wrap bottom-0 left-0 right-0 top-12 overflow-y-auto font-mono tracking-tight {fontList[
    font
  ]} break-words px-2 pb-12 pt-4"
  style="--jsonPaddingLeft: {indentList[indent]}rem;"
>
  <JsonView json={$formatted} {depth} />
</div>
