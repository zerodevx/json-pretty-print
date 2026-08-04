<script>
import { zipurl, unzipurl } from 'zipurl'
import Json5 from 'json5'
import Main from './Main.svelte'
import View from './View.svelte'
import { store } from './store.svelte.js'
import { tick, onMount } from 'svelte'
import { pushState, replaceState } from '$app/navigation'
import { resolve } from '$app/paths'

function prettify() {
  try {
    store.formatted = Json5.parse(store.unformatted)
    if (store.hash) {
      pushState(resolve(`/#/${store.hash}`), {})
    } else {
      zipurl(store.unformatted).then((zipped) => {
        store.hash = zipped
        pushState(resolve(`/#/${zipped}`), {})
      })
    }
    store.err = ''
    store.view = true
    tick().then(() => scrollTo(0, 0))
  } catch (err) {
    console.log(err)
    store.formatted = {}
    store.err = 'JSON syntax error!'
  }
}

onMount(async () => {
  const hash = location.hash.replace(/[#/]/g, '')
  if (!hash) return
  try {
    store.unformatted = await unzipurl(hash)
    await tick()
    store.hash = hash
    replaceState(resolve('/'), {})
    prettify()
  } catch (err) {
    console.log(err)
    pushState(resolve('/'), {})
    store.err = 'Error decoding hash link!'
  }
})
</script>

{#if store.view}
  <View />
{:else}
  <Main {prettify} />
{/if}
