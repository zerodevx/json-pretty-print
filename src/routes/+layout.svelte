<script>
import './layout.css'
import logo from '$lib/assets/logo.svg'

let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={logo} />
  <link rel="canonical" href="https://zerodevx.github.io/jpp/" />
  <title>JSON Pretty Print | Open source, privacy first</title>
</svelte:head>

<img
  src="https://pixel.zerodevx.com/v0/jpp"
  width="1"
  height="1"
  alt=""
  loading="eager"
  decoding="async"
  fetchpriority="low"
  style="position:fixed;top:0;left:0;width:1px;height:1px;pointer-events:none"
/>
{@render children()}
