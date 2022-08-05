const puppeteer = require ('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
      headless: true, // deafault osht true ,po e ceki true per me qen ma e kjart
      executablePath: '/usr/bin/chromium-browser',
          args: [
            "--no-sandbox",
          ] 
    });
    const page = await browser.newPage();
    // await browser.close();  // nuk po e mbylli browser ne ket rast per me mbet container running
})();