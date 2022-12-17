<script>
import Json5 from 'json5'
import { unzipurl } from 'zipurl'
import { JsonView } from '@zerodevx/svelte-json-view'
import { toast } from '@zerodevx/svelte-toast'
import Copy from 'copy-to-clipboard'
import { browser } from '$app/environment'
import { page } from '$app/stores'
import { base } from '$app/paths'
import Icon from '$lib/icons'
import { unformatted, formatted } from '$lib/stores'

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
  if (browser) {
    if (navigator.share) {
      navigator.share({
        title: 'JSON Pretty Print Online',
        text: 'Share this JSON view',
        url: $page.url.href
      })
    } else {
      Copy(location.href)
      toast.push('URL copied to clipboard')
    }
  }
}

if (!$formatted) {
  try {
    $unformatted = unzipurl($page.params.data)
    $formatted = Json5.parse($unformatted)
  } catch (err) {
    console.error(err)
    toast.push('Data URL malformed')
  }
}
</script>

<div class="w-full h-14 sticky top-0 flex items-center bg-base-200 shadow">
  <a class="btn btn-square ml-1" title="Close" href="{base}/">
    <Icon icon="close" class="w-8 h-8" />
  </a>
  {#if depth}
    <button class="btn btn-square ml-1" title="Collapse all" on:click={() => (depth = 0)}>
      <Icon icon="collapse" class="w-8 h-8" />
    </button>
  {:else}
    <button class="btn btn-square ml-1" title="Expand all" on:click={() => (depth = Infinity)}>
      <Icon icon="expand" class="w-8 h-8" />
    </button>
  {/if}
  <button
    class="btn btn-square ml-1"
    title="Indent"
    on:click={() => {
      indent = indent === 3 ? 0 : indent + 1
    }}
  >
    <Icon icon="indent" class="w-8 h-8" />
  </button>
  <button
    class="btn btn-square ml-1"
    title="Font size"
    on:click={() => {
      font = font === 3 ? 0 : font + 1
    }}
  >
    <Icon icon="size" class="w-8 h-8" />
  </button>
  <button class="btn btn-square ml-1" title="Copy to clipboard" on:click={copy}>
    <Icon icon="copy" class="w-8 h-8" />
  </button>
  <button class="btn btn-square ml-1" title="Share URL" on:click={share}>
    <Icon icon="share" class="w-8 h-8" />
  </button>
</div>
<div
  class="wrap top-12 right-0 bottom-0 left-0 font-mono tracking-tight overflow-y-auto {fontList[
    font
  ]} break-words px-2 pt-4 pb-12"
  style="--jsonPaddingLeft: {indentList[indent]}rem;"
>
  <JsonView json={$formatted} {depth} />
</div>
