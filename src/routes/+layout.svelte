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
    // Disable auto pageview measurement
    gtag('config', 'G-MK7ZXHKMWC', {
      send_page_view: false
    })
    </script>
  {/if}
</svelte:head>

<slot />

<SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
