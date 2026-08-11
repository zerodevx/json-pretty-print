<script>
import './layout.css'
import logo from '$lib/assets/logo.svg'

let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={logo} />
  <title>JSON Pretty Print | Open source, privacy first</title>
</svelte:head>

<img
  src="https://ping.zerodevx.com/jpp"
  width="1"
  height="1"
  alt=""
  loading="eager"
  decoding="async"
  fetchpriority="low"
  style="position:absolute;width:1px;height:1px;opacity:0;pointer-events:none"
/>
{@render children()}
