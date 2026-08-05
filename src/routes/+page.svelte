<script>
import { zipurl, unzipurl } from 'zipurl'
import Json5 from 'json5'
import Main from './Main.svelte'
import View from './View.svelte'
import { store } from './store.svelte.js'
import { tick, onMount } from 'svelte'
import { pushState, replaceState } from '$app/navigation'
import { resolve } from '$app/paths'
import { page } from '$app/state'

let err = $state('')

function prettify() {
  try {
    store.formatted = Json5.parse(store.unformatted)
    if (store.hash) {
      pushState(resolve(`/#/${store.hash}`), { view: true })
    } else {
      zipurl(store.unformatted).then((zipped) => {
        store.hash = zipped
        pushState(resolve(`/#/${zipped}`), { view: true })
      })
    }
    err = ''
  } catch (e) {
    console.log(e)
    store.formatted = {}
    err = 'JSON syntax error!'
  }
}

onMount(async () => {
  const hash = location.hash.replace(/[#/]/g, '')
  if (hash) {
    try {
      store.unformatted = await unzipurl(hash)
      await tick()
      store.hash = hash
      replaceState(resolve('/'), { view: false })
      prettify()
    } catch (e) {
      console.log(e)
      pushState(resolve('/'), { view: false })
      err = 'Error decoding hash link!'
    }
  }
})
</script>

{#if page.state.view}
  <View />
{:else}
  <Main {prettify} bind:err />
{/if}
