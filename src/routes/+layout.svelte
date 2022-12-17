<script>
import '@fontsource/inter/variable-full.css'
import '../app.postcss'
import { dev, browser } from '$app/environment'
import { page } from '$app/stores'
import { theme } from '$lib/stores'
import { SvelteToast } from '@zerodevx/svelte-toast'

$: if (browser && $theme) document.documentElement.setAttribute('data-theme', $theme)
</script>

<svelte:head>
  {#if $page.route.id === '/'}
    <link rel="canonical" href="https://zerodevx.github.io/json-pretty-print/" />
  {:else}
    <meta name="robots" content="noindex" />
  {/if}
  {#if !dev}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MK7ZXHKMWC"></script>
    <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    // For privacy, we do not track data URLs.
    gtag('config', 'G-MK7ZXHKMWC', {
      page_title: document.head.querySelector('link[rel=canonical]') ? 'Home' : 'View',
      page_location: 'https://zerodevx.github.io/json-pretty-print/',
      page_path: '/json-pretty-print/'
    })
    </script>
  {/if}
</svelte:head>

<slot />

<div class="wrap">
  <SvelteToast options={{ reversed: true, intro: { y: 192 } }} />
</div>

<style>
.wrap {
  font-size: 0.875rem;
  --toastContainerTop: auto;
  --toastContainerRight: auto;
  --toastContainerBottom: 8rem;
  --toastContainerLeft: calc(50vw - 8rem);
}
</style>
