import { test } from '@playwright/test'

test('validate amazon application', async ({ page }) => {
    await page.goto('https://www.amazon.in/')
})