<script>
import { zipurl, unzipurl } from 'zipurl'
import jaison from 'jaison'
import Main from './Main.svelte'
import View from './View.svelte'
import { onMount, tick } from 'svelte'
import { pushState, replaceState } from '$app/navigation'
import { resolve } from '$app/paths'
import { page } from '$app/state'

let formatted = $state.raw()
let unformatted = $state('')
let hashed = $state('')
let err = $state('')

async function prettify() {
  if (!unformatted) return
  if (hashed && formatted) {
    pushState(resolve(`/#/${hashed}`), { view: true })
    return
  }
  try {
    formatted = JSON.parse(unformatted)
  } catch {
    try {
      const parsed = jaison(unformatted)
      if (typeof parsed !== 'object') throw new Error('Not an object?')
      formatted = parsed
    } catch (e) {
      console.log(e)
      err = 'Error parsing JSON'
      return
    }
  }
  err = ''
  if (!hashed) hashed = await zipurl(unformatted)
  pushState(resolve(`/#/${hashed}`), { view: true })
}

onMount(async () => {
  // Legacy v2 support
  const params = new URLSearchParams(location.search)
  const data = params.get('json') || params.get('data')
  if (data) {
    await tick()
    replaceState(resolve(`/#/${data}`), {})
  }

  const hash = location.hash.replace(/[#/]/g, '')
  if (!hash) return
  try {
    unformatted = await unzipurl(hash)
  } catch (e) {
    console.log(e)
    unformatted = hash
    err = 'Error decoding hash link'
    return
  } finally {
    await tick()
    replaceState(resolve('/'), {})
  }
  hashed = hash
  prettify()
})
</script>

{#if page.state.view}
  <View {hashed} {formatted} />
{:else}
  <Main {prettify} reset={() => (hashed = '')} bind:unformatted bind:err />
{/if}
