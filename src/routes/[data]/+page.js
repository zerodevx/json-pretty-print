import { redirect } from '@sveltejs/kit'
import { resolve } from '$app/paths'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  throw redirect(307, resolve(`/#/${params.data}`))
}

export const prerender = false
