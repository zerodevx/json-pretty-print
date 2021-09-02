<script>
import { JsonView } from '@zerodevx/svelte-json-view'
import { SvelteToast, toast } from '@zerodevx/svelte-toast'
import { zipurl, unzipurl } from 'zipurl'
import { decode } from 'js-base64'
import Copy from 'copy-to-clipboard'

let json = ''
let data = ''
let value = ''
let err = ''

const parse = d => {
  let out = ''
  err = ''
  try {
    out = JSON.parse(d)
  } catch (e) {
    err = e
  }
  return out
}
const params = new URLSearchParams(location.search)
const updateLocation = () => {
  history.replaceState(null, '', `${location.pathname}?${params.toString()}`)
}
const runLegacyChecks = () => {
  const done = () => {
    data = zipurl(value)
    params.set('data', data)
    params.delete('json')
    updateLocation()
  }
  value = decodeURIComponent(params.get('json'))
  json = parse(value)
  if (json) {
    done()
    return
  }
  value = decode(value)
  json = parse(value)
  if (json) {
    done()
    return
  }
  params.delete('json')
  updateLocation()
}
if (params.has('json')) {
  runLegacyChecks()
} else if (params.has('data')) {
  data = params.get('data')
  value = unzipurl(data)
  json = parse(value) || ''
}

let view = !!json
const run = () => {
  if (!value) return
  json = parse(value)
  if (json) {
    data = zipurl(value)
    params.delete('data')
    params.set('data', data)
    updateLocation()
    view = true
  }
}
const close = () => {
  view = false
  params.delete('data')
  updateLocation()
}

let depth = Infinity
const indentList = ['0.5rem', '1rem', '1.5rem', '2rem']
let indent = 1
const fontList = ['text-xs', 'text-sm', 'text-base', 'text-lg']
let font = 1
const copy = () => {
  Copy(JSON.stringify(json, null, 2))
  toast.push('JSON copied to clipboard')
}
const share = () => {
  if (navigator.share) {
    navigator.share({
      title: 'JSON Pretty Print Online',
      text: 'Share this JSON view',
      url: location.href
    })
  } else {
    Copy(location.href)
    toast.push('URL copied to clipboard')
  }
}
</script>

<div class="{view ? 'hidden ' : ''}select-none page container absolute inset-0 overflow-x-hidden overflow-y-auto px-2 md:px-1 pt-8 pb-16">
  <h1 class="text-4xl mb-1 text-center">JSON Pretty Print</h1>
  <div class="text-center">
    <a class="inline-block h-6 mb-4" href="https://github.com/zerodevx/json-pretty-print" title="Fork me on Github" target="_blank" rel="noopener">
      <img class="hover:opacity-80" src="https://img.shields.io/github/package-json/v/zerodevx/json-pretty-print?logo=github&style=for-the-badge&color=blue&label=fork+me+on+github" alt="@zerodevx">
    </a>
  </div>
  <p class="mb-8">Convert <strong>unformatted</strong> JSON into <strong>pretty-printed</strong> JSON and send it as a <strong>shareable</strong> web link. That's it!</p>
  <textarea
    class="w-full h-72 focus:outline-none focus:ring rounded-sm border border-gray-300 text-sm font-mono tracking-tight break-all p-2"
    placeholder="Paste unformatted JSON here"
    spellcheck="false"
    bind:value={value}></textarea>
  <div class="h-10 text-sm text-center text-red-500 overflow-x-hidden overflow-y-auto mb-2">{err}</div>
  <button class="btn w-full" on:click={run}>PRETTY PRINT</button>
</div>

{#if view === true}
<div class="absolute top-0 right-0 left-0 h-12 bg-white shadow-md flex flex-row select-none z-10">
  <button class="icon-btn" on:click={close}>
    <div class="material-icons">close</div>
    <p>CLOSE</p>
  </button>
  <button class="icon-btn" on:click={() => { depth = depth ? 0 : Infinity }}>
    <div class="material-icons">{depth ? 'first_page' : 'last_page'}</div>
    <p>{depth ? 'COLLAPSE' : 'EXPAND'}</p>
  </button>
  <button class="icon-btn" on:click={() => { indent = indent === indentList.length - 1 ? 0 : indent + 1 }}>
    <div class="material-icons">format_indent_increase</div>
    <p>INDENT</p>
  </button>
  <button class="icon-btn" on:click={() => { font = font === fontList.length - 1 ? 0 : font + 1 }}>
    <div class="material-icons">format_size</div>
    <p>FONT SIZE</p>
  </button>
  <button class="icon-btn" on:click={copy}>
    <div class="material-icons">content_copy</div>
    <p>COPY</p>
  </button>
  <button class="icon-btn" on:click={share}>
    <div class="material-icons">share</div>
    <p>SHARE URL</p>
  </button>
</div>
<div
  class="{fontList[font]} page absolute top-12 right-0 bottom-0 left-0 font-mono tracking-tight bg-gray-50 overflow-y-auto break-words px-2 pt-4 pb-12"
  style="--nodePaddingLeft:{indentList[indent]};">
  <JsonView {json} {depth} />
</div>
{/if}

<div class="toast select-none">
  <SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
</div>
