// @ts-check
import { test } from '@playwright/test';

test('validate Facebook Application', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
});

