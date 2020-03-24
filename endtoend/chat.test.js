require('babel-polyfill')
const puppeteer = require('puppeteer')

describe('chat', () => {
    let page
    let browser
    beforeAll(async () => {
        browser = await puppeteer.launch()
        page = await browser.newPage()
        await page.goto('http://localhost:3000/2019-2-Track-Frontend-O-Anoshchenko#/')
    })
    it('chat must be created', async () => {
        await expect(page).toClick('#CreateChat')
    })
    it('chat must be open', async () => {
        await expect(page).toClick('#chat_id_0')
    })
    it('message must be sent', async () => {
        await expect(page).toFill('#message_input', 'Hello')
        await page.keyboard.press('Enter')
    })
    it('message must be displayed', async () => {
        await expect(page).toMatchElement('#message_text', {text: 'Hello'})
    })
    afterAll(async () => {
		await browser.close()
	})
})
