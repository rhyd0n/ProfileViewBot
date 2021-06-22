const puppeteer = require('puppeteer');
  
async function bot() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://github.com/UrUsernameh3re');
    
    await browser.close();
}
setInterval(bot,1000)
