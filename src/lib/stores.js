import { writable } from 'svelte/store'
import { browser } from '$app/environment'

function persist(name = '') {
  const _store = browser && sessionStorage.getItem(name)
  const store = writable(_store ? JSON.parse(_store) : '')
  if (browser) {
    store.subscribe((i) => sessionStorage.setItem(name, JSON.stringify(i)))
  }
  return store
}

export const theme = persist('_theme')
export const unformatted = writable()
export const formatted = writable()
