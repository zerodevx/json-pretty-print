import { expect, test } from '@playwright/test'

const b = (url = '') => `/jpp${url}`

test.describe('Basic', () => {
  test('prettify forgivingly', async ({ page }) => {
    await page.goto(b('/'))
    await page.locator('textarea').click()
    await page.locator('textarea').pressSequentially(` {foo:'bar'}`)
    await page.getByRole('button', { name: 'MAKE IT PRETTY' }).click()
    expect(await page.locator('.view').textContent()).toBe(`{ "foo": "bar" }`)
    await page.getByRole('button', { name: 'Close' }).click()
    await expect(page.locator('textarea')).toHaveValue(` {foo:'bar'}`)
  })

  test('hash link view', async ({ page }) => {
    await page.goto(b('/#/H4sIAAAAAAAAE1OoTsvPt1JPSixSrwUAdjjZPQwAAAA'))
    expect(await page.locator('.view').textContent()).toBe(`{ "foo": "bar" }`)
    await page.getByRole('button', { name: 'Close' }).click()
    await expect(page.locator('textarea')).toHaveValue(` {foo:'bar'}`)
  })
})
