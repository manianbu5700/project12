//Alert Handling

import { test, expect } from '@playwright/test'

test('Alert Handling', async ({ page }) => {
    await page.goto('https://demo.automationtesting.in/Alerts.html')
    await page.once('dialog', async (dialog) => {
        await dialog.accept()
        console.log("Simple Alert:", dialog.message())
    })

    await page.locator('//button[@onclick="alertbox()"]').click() //Alert box

    //Confirmation Alert
    await page.locator('(//a[@class="analystic"])[2]').click() //Switch to next alert

    await page.once('dialog', async (dialog) => {
        await dialog.dismiss()
        console.log("Confirmation Alert:", dialog.message())
    })
    await page.locator('//button[@class="btn btn-primary"]').click() //Alert button

    //Prompt Alert
    await page.locator('(//a[@class="analystic"])[3]').click() //Switch to next alert

    await page.once('dialog', async (dialog) => {
        await dialog.accept('Hii Buddy')
        console.log("Prompt Alert :", dialog.message())

    })

    await page.locator('//button[@class="btn btn-info"]').click()//Alert button

    // await page.waitForTimeout(3000)
    const text = await page.locator('//p[@id="demo1"]').textContent()
    console.log(text)
    await expect(text).toContain('Hii Buddy')
})
