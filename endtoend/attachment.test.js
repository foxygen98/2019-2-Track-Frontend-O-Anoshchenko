const path = require('path')
require('babel-polyfill')
const puppeteer = require('puppeteer')

describe('attachment', () => {
    let page
    let browser
    beforeAll(async () => {
        browser = await puppeteer.launch({ devtools: true })
        page = await browser.newPage()

        const context = browser.defaultBrowserContext()
        await context.overridePermissions('http://localhost:3000/2019-2-Track-Frontend-O-Anoshchenko#/', ['geolocation'])

        await page.goto('http://localhost:3000/2019-2-Track-Frontend-O-Anoshchenko#/')
    })
    it('chat must be created', async () => {
        await expect(page).toClick('#CreateChat')
    })
    it('chat must be open', async () => {
        await expect(page).toClick('#chat_id_0')
    })
    it('location must be sent', async () => {
        await expect(page).toClick('#attachment_button')
        await page.waitFor(300)
        await page.setGeolocation({ latitude: 56, longitude: 37.5 })
        await expect(page).toClick('#get_location')
    })
    it('location must be displayed', async () => {
        await expect(page).toMatchElement('#message_text', {text: 'https://www.openstreetmap.org/#map=18/56/37.5'})
    })
    it('chat list must be opened', async () => {
        await expect(page).toClick('#return_button')
        await expect(page).toMatch('Messenger')
    })
    afterAll(async () => {
		await browser.close()
	})
})
