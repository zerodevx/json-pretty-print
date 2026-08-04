<script>
import './layout.css'
import logo from '$lib/assets/logo.svg'

let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={logo} />
  <title>JSON Pretty Print | Open-source, no tracking, no ads</title>
  <meta
    name="description"
    content="Prettify JSON on-device, then send the tree view as a shareable web link. Open-source, no tracking, no ads."
  />
</svelte:head>

{@render children()}
