import { test } from '@playwright/test'

test('DropDown Handling', async ({ page }) => {
await page.goto('https://letcode.in/dropdowns/')
const singleDrop=await page.locator('//select[@id="fruits"]')
await singleDrop.selectOption({value:"1"})
const fruite=await singleDrop.locator('option:checked').textContent()
console.log(fruite)

const multiDrop=await page.locator('//select[@id="superheros"]')
await multiDrop.selectOption([{label:"Thor"},{value:"sg"},{index:3},{label:"Spider-Man"},{label:"Wonder Woman"}])
const superHeros=await multiDrop.locator('option:checked').allTextContents()
console.log(superHeros)
})

//Methods to select options in dropdown
 
//index--------->{index:1}
//value--------->{value:"2"}
//label--------->{label:"Mango"}
