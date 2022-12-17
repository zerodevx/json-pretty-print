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
  {#if $page.route.id !== '/'}
    <meta name="robots" content="noindex" />
  {/if}
  {#if !dev}
    <!--
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-MK7ZXHKMWC"></script>
    <script>
    window.dataLayer = window.dataLayer || []
    function gtag() {
      dataLayer.push(arguments)
    }
    gtag('js', new Date())
    gtag('config', 'G-MK7ZXHKMWC', {
      page_title: location.search ? 'View' : 'Home',
      page_location: location.origin + location.pathname,
      page_path: location.pathname
    })
    </script>
    -->
  {/if}
  <meta
    name="description"
    content="Convert unformatted JSON into pretty-printed JSON and send the view as a shareable web link."
  />
</svelte:head>

<slot />

<div class="wrap">
  <SvelteToast />
</div>

<style>
.wrap {
  font-size: 0.875rem;
}
</style>
