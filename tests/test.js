import { expect, test } from '@playwright/test'

test('basic prettify', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })
  const textarea = page.locator('textarea')
  await textarea.click()
  await textarea.pressSequentially(` {foo:'bar'}`)
  await page.getByText('MAKE IT PRETTY').click()
  await page.screenshot({ path: 'test-results/screenshot.png' })
  expect(await page.locator('.wrap').textContent()).toBe(`{ "foo": "bar"  }`)
})

test('basic decode', async ({ page }) => {
  await page.goto('/H4sIAAAAAAAAA1OoTsvPt1JPSixSrwUAdjjZPQwAAAA/', { waitUntil: 'networkidle' })
  expect(await page.locator('.wrap').textContent()).toBe(`{ "foo": "bar"  }`)
})
