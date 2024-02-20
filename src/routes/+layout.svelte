<script>
import '@fontsource-variable/inter'
import '../app.pcss'
import { SvelteToast } from '@zerodevx/svelte-toast'
import { dev } from '$app/environment'
</script>

<svelte:head>
  <title>JSON Pretty Print Onling</title>
  {#if !dev}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MK7ZXHKMWC"></script>
    <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    // Disable pageview measurement
    gtag('config', 'G-MK7ZXHKMWC', {
      send_page_view: false
    })
    </script>
  {/if}
</svelte:head>

<slot />

<div class="wrap">
  <SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
</div>

<style lang="postcss">
.wrap {
  font-size: 0.875rem;
  --toastContainerTop: auto;
  --toastContainerRight: auto;
  --toastContainerBottom: 8rem;
  --toastContainerLeft: calc(50vw - 8rem);
  --toastBackground: #57534e;
  --toastBorderRadius: 9999px;
  --toastMinHeight: 1rem;
  --toastPadding: 0 0.5rem;
}
</style>
