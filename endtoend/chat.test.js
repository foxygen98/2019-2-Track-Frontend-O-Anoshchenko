const path = require('path')
require('babel-polyfill')

let page

describe('app', () => {
    beforeAll(async () => {
        await page.goto('http://localhost:3000/2019-2-Track-Frontend-O-Anoshchenko#/')
    }, 100000)
    it('chat must be created', async () => {
        await expect(page).toClick('#CreateChat')
    }, 100000)
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
})
