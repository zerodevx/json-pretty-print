<script>
import Game from 'svelte-games/Snake.svelte'
import Header from './Header.svelte'
import logo from '$lib/assets/logo.svg'
import { page } from '$app/state'
import { resolve } from '$app/paths'
</script>

<Header>
  <img class="h-8 w-8" src={logo} alt="logo" />
  <a class="ml-2 text-2xl font-bold" href={resolve('/')}>json-pretty-print</a>
  <div class="flex-1"></div>
  <a
    class="btn mx-2 hidden sm:flex"
    href="https://github.com/zerodevx/json-pretty-print"
    target="_blank"
  >
    <span class="icon-[mdi--github] h-6 w-6"></span>
    GitHub
  </a>
</Header>

<div class="mx-auto prose mt-8 mb-8 w-full text-center">
  <h2>{page.status}: {page.error?.message}</h2>
  <div class="w-full px-4 md:px-20">
    <Game />
  </div>
</div>
