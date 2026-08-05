<script>
import Header from './Header.svelte'
import { store } from './store.svelte.js'
import { JsonView } from '@zerodevx/svelte-json-view'
import { fly, fade } from 'svelte/transition'

const indentList = ['0.5', '1', '1.5', '2']
const fontList = ['text-xs', 'text-sm', 'text-base', 'text-lg']
let depth = $state(Infinity)
let indent = $state(1)
let font = $state(1)
let alert = $state({ show: false, msg: '', type: '' })

function toast(msg = '', type = 'alert-success') {
  alert.type = type
  alert.msg = msg
  alert.show = true
  setTimeout(() => (alert.show = false), 4000)
}

async function copy(text = JSON.stringify(store.formatted, null, 2), msg = 'JSON') {
  try {
    await navigator.clipboard.writeText(text)
    toast(`${msg} copied to clipboard`)
  } catch (err) {
    console.log(err)
    toast('Failed to copy to clipboard', 'alert-error')
  }
}

async function share() {
  if (navigator.share) {
    navigator.share({
      title: 'JSON Pretty Print',
      text: 'Share this JSON view',
      url: location.href
    })
  } else {
    await copy(location.href, 'URL')
  }
}

function close() {
  history.back()
}
</script>

<Header>
  <div class="flex-1">
    <button class="btn btn-square btn-lg" title="Close" onclick={close}
      ><span class="icon-[mdi--close]"></span></button
    >
    {#if depth}
      <button class="btn btn-square btn-lg" title="Collapse all" onclick={() => (depth = 0)}
        ><span class="icon-[mdi--arrow-collapse-left]"></span></button
      >
    {:else}
      <button class="btn btn-square btn-lg" title="Expand all" onclick={() => (depth = Infinity)}
        ><span class="icon-[mdi--arrow-collapse-right]"></span></button
      >
    {/if}
    <button
      class="btn btn-square btn-lg"
      title="Indentation"
      onclick={() => {
        indent = indent === 3 ? 0 : indent + 1
      }}><span class="icon-[mdi--indent]"></span></button
    >
    <button
      class="btn btn-square btn-lg"
      title="Font size"
      onclick={() => {
        font = font === 3 ? 0 : font + 1
      }}><span class="icon-[mdi--format-size]"></span></button
    >
    <button class="btn btn-square btn-lg" title="Copy to clipboard" onclick={() => copy()}
      ><span class="icon-[mdi--content-copy]"></span></button
    >
    <button class="btn btn-square btn-lg" title="Share" onclick={share}
      ><span class="icon-[mdi--share]"></span></button
    >
  </div>
</Header>
<div class="flex justify-end pt-1 pr-2">
  <div class="badge badge-xs">
    {store.hash.length.toLocaleString('en-US')} bytes hashed
  </div>
</div>

<div
  class="overflow-y-auto px-2 pt-2 pb-12 font-mono {fontList[
    font
  ]} tracking-tight wrap-break-word select-text"
  style="--jsonPaddingLeft: {indentList[indent]}rem;"
>
  <JsonView json={store.formatted} {depth} />
</div>

{#if alert.show}
  <div class="toast toast-center" in:fly={{ y: 32 }} out:fade>
    <div class="alert {alert.type} mb-24">
      <span>{alert.msg}</span>
    </div>
  </div>
{/if}
