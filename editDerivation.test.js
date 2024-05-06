const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 846,
            height: 633
        })
    }
    {
        const targetPage = page;
        const promises = [];
        const startWaitingForEvents = () => {
            promises.push(targetPage.waitForNavigation());
        }
        startWaitingForEvents();
        await targetPage.goto('http://localhost:5173/');
        await Promise.all(promises);
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
            targetPage.locator(':scope >>> #email')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 254.359375,
                y: 20.40625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Email)'),
            targetPage.locator('#email'),
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])'),
            targetPage.locator(':scope >>> #email')
        ])
            .setTimeout(timeout)
            .fill('test@example.com');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Password)'),
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
            targetPage.locator(':scope >>> #password')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 134.359375,
                y: 19.40625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Password)'),
            targetPage.locator('#password'),
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])'),
            targetPage.locator(':scope >>> #password')
        ])
            .setTimeout(timeout)
            .fill('string');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('Enter');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('Enter');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(pasu)'),
            targetPage.locator('tr.css-1ktjntc > td:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/main/div/div[2]/table/tbody/tr[2]/td[2])'),
            targetPage.locator(':scope >>> tr.css-1ktjntc > td:nth-of-type(2)'),
            targetPage.locator('::-p-text(pasu)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 229.984375,
                y: 22.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.css-1x5ai02 > div:nth-of-type(2) li > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r73:--tabpanel-0\\"]/div/div[3]/div[2]/div/ol/li/div)'),
            targetPage.locator(':scope >>> div.css-1x5ai02 > div:nth-of-type(2) li > div'),
            targetPage.locator('::-p-text(argtadfgdfgdfgbzdfbgdfbgdfargtadfgdfgdfgbzdfbgdfbgdf)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 213.09375,
                y: 14.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria([role=\\"tabpanel\\"]) >>>> ::-p-aria([role=\\"textbox\\"])'),
            targetPage.locator('div.css-1x5ai02 > div:nth-of-type(2) textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r73:--tabpanel-0\\"]/div/div[3]/div[2]/div/ol/li/div/textarea)'),
            targetPage.locator(':scope >>> div.css-1x5ai02 > div:nth-of-type(2) textarea')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 233.09375,
                y: 21.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria([role=\\"tabpanel\\"]) >>>> ::-p-aria([role=\\"textbox\\"])'),
            targetPage.locator('div.css-1x5ai02 > div:nth-of-type(2) textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r73:--tabpanel-0\\"]/div/div[3]/div[2]/div/ol/li/div/textarea)'),
            targetPage.locator(':scope >>> div.css-1x5ai02 > div:nth-of-type(2) textarea')
        ])
            .setTimeout(timeout)
            .fill('argtadfgdfgdfgbzdfbgdfbgdf fgzdfgtdfgdfgdfgb');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.css-s8fge7 > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r73:--tabpanel-0\\"]/div/div[3]/div[2]/div/ol/li/div/div/button[1]/svg)'),
            targetPage.locator(':scope >>> button.css-s8fge7 > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 2.5,
                y: 5.625,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
