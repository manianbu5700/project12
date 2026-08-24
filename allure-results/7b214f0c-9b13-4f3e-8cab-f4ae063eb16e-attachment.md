# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Frame.spec.js >> Frame Handling
- Location: tests\Frame.spec.js:4:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//iframe[@src="MultipleFrames.html"]').contentFrame().locator('//iframe[@src="SingleFrame.html"]').contentFrame().locator('//input[@type="text"]')
    - locator resolved to <input type="text"/>
    - fill("Hello Bro")
  - attempting fill action
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and editable
      - element is not visible
    - retrying fill action
      - waiting 100ms
    14 × waiting for element to be visible, enabled and editable
       - element is not visible
     - retrying fill action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e7] [cursor=pointer]:
        - /url: http://www.automationtesting.in
      - heading [level=1] [ref=e10]: Automation Demo Site
    - navigation [ref=e11]:
      - list [ref=e14]:
        - listitem [ref=e15]:
          - link [ref=e16] [cursor=pointer]:
            - /url: Index.html
            - text: Home
        - listitem [ref=e17]:
          - link [ref=e18] [cursor=pointer]:
            - /url: Register.html
            - text: Register
        - listitem [ref=e19]:
          - link [ref=e20] [cursor=pointer]:
            - /url: WebTable.html
            - text: WebTable
        - listitem [ref=e21]:
          - link [ref=e22] [cursor=pointer]:
            - /url: SwitchTo.html
            - text: SwitchTo
          - generic [ref=e23]: 
        - listitem [ref=e24]:
          - link [ref=e25] [cursor=pointer]:
            - /url: Widgets.html
            - text: Widgets
          - generic [ref=e26]: 
        - listitem [ref=e27]:
          - link [ref=e28] [cursor=pointer]:
            - /url: Interactions.html
            - text: Interactions
          - generic [ref=e29]: 
        - listitem [ref=e30]:
          - link [ref=e31] [cursor=pointer]:
            - /url: SwitchTo.html
            - text: Video
          - generic [ref=e32]: 
        - listitem [ref=e33]:
          - link [ref=e34] [cursor=pointer]:
            - /url: WYSIWYG.html
            - text: WYSIWYG
          - generic [ref=e35]: 
        - listitem [ref=e36]:
          - link [ref=e37] [cursor=pointer]:
            - /url: "#"
            - text: More
          - generic [ref=e38]: 
        - listitem [ref=e39]:
          - link [ref=e40] [cursor=pointer]:
            - /url: http://practice.automationtesting.in/
            - text: Practice Site
  - generic [ref=e41]:
    - generic [ref=e45]:
      - list [ref=e48]:
        - listitem [ref=e49]:
          - link [ref=e50]:
            - /url: "#Single"
            - text: Single Iframe
        - listitem [ref=e51]:
          - link [ref=e52] [cursor=pointer]:
            - /url: "#Multiple"
            - text: Iframe with in an Iframe
      - iframe [ref=e54]: <p>Your browser does not support iframes.</p>:
        - generic [ref=f1e3]:
          - heading "iFrame Demo" [level=5] [ref=f1e4]
          - textbox [ref=f1e7]: Hii Buddy
    - generic [ref=e56]:
      - insertion [ref=e59]:
        - generic [ref=e62]:
          - heading [level=2] [ref=e64]: Discover more
          - link [ref=e65] [cursor=pointer]:
            - generic [ref=e66]: Process automation software
          - link [ref=e70] [cursor=pointer]:
            - generic [ref=e71]: Software
          - link [ref=e75] [cursor=pointer]:
            - generic [ref=e76]: Constitutional Law & Civil Rights
          - link [ref=e80] [cursor=pointer]:
            - generic [ref=e81]: Automation testing courses
          - link [ref=e85] [cursor=pointer]:
            - generic [ref=e86]: Test automation tools
          - link [ref=e90] [cursor=pointer]:
            - generic [ref=e91]: Internet & Telecom
          - link [ref=e95] [cursor=pointer]:
            - generic [ref=e96]: UI testing tools
          - link [ref=e100] [cursor=pointer]:
            - generic [ref=e101]: Selenium WebDriver tutorial
      - insertion [ref=e107]:
        - generic [ref=e110]:
          - heading [level=2] [ref=e112]: Discover more
          - link [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: Development Tools
          - link [ref=e118] [cursor=pointer]:
            - generic [ref=e119]: Programming
          - link [ref=e123] [cursor=pointer]:
            - generic [ref=e124]: Software quality assurance
          - link [ref=e128] [cursor=pointer]:
            - generic [ref=e129]: Iframe testing guide
          - link [ref=e133] [cursor=pointer]:
            - generic [ref=e134]: Automation demo site
          - link [ref=e138] [cursor=pointer]:
            - generic [ref=e139]: Automation consulting services
          - link [ref=e143] [cursor=pointer]:
            - generic [ref=e144]: Ethics
          - link [ref=e148] [cursor=pointer]:
            - generic [ref=e149]: Factory Automation
      - insertion [ref=e155]:
        - generic [ref=e158]:
          - heading [level=2] [ref=e160]: Discover more
          - link [ref=e161] [cursor=pointer]:
            - generic [ref=e162]: Web application testing
          - link [ref=e166] [cursor=pointer]:
            - generic [ref=e167]: Web Browsers
          - link [ref=e171] [cursor=pointer]:
            - generic [ref=e172]: Browser compatibility testing
          - link [ref=e176] [cursor=pointer]:
            - generic [ref=e177]: Web automation training
          - link [ref=e181] [cursor=pointer]:
            - generic [ref=e182]: Web development resources
          - link [ref=e186] [cursor=pointer]:
            - generic [ref=e187]: Performance testing tools
          - link [ref=e191] [cursor=pointer]:
            - generic [ref=e192]: Selenium Grid setup
          - link [ref=e196] [cursor=pointer]:
            - generic [ref=e197]: Selenium automation framework
      - insertion [ref=e203]:
        - generic [ref=e206]:
          - heading [level=2] [ref=e208]: Discover more
          - link [ref=e209] [cursor=pointer]:
            - generic [ref=e210]: Manual testing services
          - link [ref=e214] [cursor=pointer]:
            - generic [ref=e215]: Software testing services
          - link [ref=e219] [cursor=pointer]:
            - generic [ref=e220]: Automation demo site
          - link [ref=e224] [cursor=pointer]:
            - generic [ref=e225]: Web automation training
          - link [ref=e229] [cursor=pointer]:
            - generic [ref=e230]: Web application testing
          - link [ref=e234] [cursor=pointer]:
            - generic [ref=e235]: Test automation tools
          - link [ref=e239] [cursor=pointer]:
            - generic [ref=e240]: Browser compatibility testing
          - link [ref=e244] [cursor=pointer]:
            - generic [ref=e245]: Selenium Grid setup
      - generic [ref=e252]:
        - generic [ref=e253]:
          - text: "\"@ 2016\""
          - link [ref=e254] [cursor=pointer]:
            - /url: "#"
            - text: Automation Testing
          - text: "\"All Rights Reserved.\""
        - generic [ref=e255]:
          - link [ref=e256] [cursor=pointer]:
            - /url: https://www.facebook.com/automationtesting2016/
            - generic [ref=e257]: 
          - link [ref=e258] [cursor=pointer]:
            - /url: https://twitter.com/krishnasakinala
            - generic [ref=e259]: 
          - link [ref=e260] [cursor=pointer]:
            - /url: https://www.linkedin.com/nhome/?trk=hb_signin
            - generic [ref=e261]: 
          - link [ref=e262] [cursor=pointer]:
            - /url: https://plus.google.com/105286300926085335367
            - generic [ref=e263]: 
          - link [ref=e264] [cursor=pointer]:
            - /url: https://www.youtube.com/channel/UCmQRa3pWM9zsB474URz8ESg
            - generic [ref=e265]: 
```

# Test source

```ts
  1  | //Frame Handling
  2  | 
  3  | import { test } from '@playwright/test'
  4  | test('Frame Handling', async ({ page }) => {
  5  |     await page.goto('https://demo.automationtesting.in/Frames.html')
  6  |     const singleFrame = await page.frameLocator('//iframe[@id="singleframe"]')
  7  |     await singleFrame.locator('//input[@type="text"]').fill('Hii Buddy')
  8  |     // await page.waitForTimeout(3000)
  9  |     await page.locator('(//a[@class="analystic"])[2]').click()
  10 |     const outerFrame = await page.frameLocator('//iframe[@src="MultipleFrames.html"]')
  11 |     const innerFrame = await outerFrame.frameLocator('//iframe[@src="SingleFrame.html"]')
> 12 |     await innerFrame.locator('//input[@type="text"]').fill('Hello Bro')
     |                                                       ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  13 | 
  14 | })
```