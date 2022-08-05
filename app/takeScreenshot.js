const puppeteer = require ('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
      headless: true,
      executablePath: '/usr/bin/chromium-browser',
          args: [
            "--no-sandbox",
          ] 
    });
    const page = await browser.newPage();
    await page.goto('https://youtube.com');
    await page.screenshot({path : 'example.png',});

    await browser.close();
})();