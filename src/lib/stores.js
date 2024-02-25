import { writable } from 'svelte/store'

const unformatted = writable()
const formatted = writable()

export { unformatted, formatted }
