import { writable } from 'svelte/store'
import { dev } from '$app/environment'

const unformatted = writable()
const formatted = writable()

function sendPageView(page_title = 'Home') {
  if (!dev && window.gtag) {
    // Strip data URL from pageview
    gtag('event', 'page_view', {
      page_title,
      page_location: 'https://zerodevx.github.io/json-pretty-print/'
    })
  }
}

export { unformatted, formatted, sendPageView }
