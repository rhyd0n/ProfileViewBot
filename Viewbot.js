const puppeteer = require('puppeteer'); //Thanks to this library
// Using Headless chrome  
async function bot() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage(); //opens page
    await page.goto('https://github.com/UrUsernameh3re'); //put your username incthe specified location.
    await browser.close(); //ends.
}
setInterval(bot,100) //Re-doing the function multiple times.
