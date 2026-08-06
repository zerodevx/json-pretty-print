<script>
import Main from './Main.svelte'
import View from './View.svelte'
import { zipurl, unzipurl } from 'zipurl'
import Json5 from 'json5'
import { onMount, tick } from 'svelte'
import { pushState, replaceState } from '$app/navigation'
import { resolve } from '$app/paths'
import { page } from '$app/state'

let unformatted = $state('')
let hashed = $state('')
let err = $state('')
let formatted = $state.raw({})

function prettify() {
  if (!unformatted) return
  try {
    formatted = Json5.parse(unformatted)
    if (hashed) {
      pushState(resolve(`/#/${hashed}`), { view: true })
    } else {
      zipurl(unformatted).then((zipped) => {
        hashed = zipped
        pushState(resolve(`/#/${zipped}`), { view: true })
      })
    }
    err = ''
  } catch (e) {
    console.log(e)
    formatted = {}
    err = 'Error: JSON syntax error'
  }
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
  if (hash) {
    await tick()
    replaceState(resolve('/'), {})
    try {
      unformatted = await unzipurl(hash)
      hashed = hash
      prettify()
    } catch (e) {
      console.log(e)
      unformatted = hash
      err = 'Error: Invalid hash link'
    }
  }
})
</script>

{#if page.state.view}
  <View {hashed} {formatted} />
{:else}
  <Main {prettify} reset={() => (hashed = '')} bind:unformatted bind:err />
{/if}
