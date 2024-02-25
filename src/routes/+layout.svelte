<script>
import '@fontsource-variable/inter'
import '../app.pcss'
import { SvelteToast } from '@zerodevx/svelte-toast'
import { dev } from '$app/environment'
</script>

<svelte:head>
  <title>JSON Pretty Print Online</title>
  {#if !dev}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MK7ZXHKMWC"></script>
    <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    // For privacy, we do not track data URLs.
    const BASE_URL = '/json-pretty-print/'
    gtag('config', 'G-MK7ZXHKMWC', {
      page_title: location.pathname === BASE_URL ? 'Home' : 'View',
      page_location: 'https://zerodevx.github.io' + BASE_URL,
      page_path: BASE_URL
    })
    </script>
  {/if}
</svelte:head>

<slot />

<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
