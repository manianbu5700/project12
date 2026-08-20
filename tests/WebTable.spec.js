//WebTable

import { test, expect } from '@playwright/test'
test('Webtable Handling', async ({ page }) => {
    await page.goto('https://qavbox.github.io/demo/webtable/')
    const rowData = await page.locator('//table[@id="table02"]//tbody//tr[2]//td').allTextContents()
    // console.log(rowData)
    await expect(rowData).toContain('Accountant')
    await expect(rowData).toEqual([
        'Garrett Winters',
        'Accountant',
        'Tokyo',
        '63',
        '2011/07/25',
        '$170,750'
    ])
    // rowData.forEach(value => console.log(value))
    const columnData = await page.locator('//table[@id="table02"]//tbody//tr//td[1]').allTextContents()
    // console.log(columnData)
    await expect(columnData).toContain('Yuri Berry')
    const data = await page.locator('//table[@id="table02"]//tbody//tr[3]//td[3]').textContent()
    console.log(data)
    await expect(data).toEqual('San Francisco')

})



