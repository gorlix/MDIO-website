import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: "new", args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  page.on('requestfailed', request => {
    console.log('REQUEST FAILED:', request.url(), request.failure()?.errorText);
  });
  
  await page.goto('http://localhost:5174/');
  await page.waitForTimeout(2000);
  console.log("Checking body class/style:");
  const bodyData = await page.evaluate(() => {
    return {
      classes: document.body.className,
      bgColor: window.getComputedStyle(document.body).backgroundColor,
      rootHtml: document.getElementById('root')?.innerHTML.substring(0, 200)
    };
  });
  console.log("Body data:", bodyData);
  await browser.close();
})();
