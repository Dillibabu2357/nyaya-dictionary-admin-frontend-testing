const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1000,
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
                x: 212.359375,
                y: 12.40625,
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
                x: 143.359375,
                y: 20.40625,
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
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Login)'),
            targetPage.locator('div.chakra-stack > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/form/div/div[2]/button)'),
            targetPage.locator(':scope >>> div.chakra-stack > button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 166.359375,
                y: 19.40625,
              },
            });
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
                x: 118.375,
                y: 25.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('li > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r3v:--tabpanel-0\\"]/div/div[3]/div[1]/div/ol/li/div)'),
            targetPage.locator(':scope >>> li > div'),
            targetPage.locator('::-p-text(dfjghjdghdfjghjdgh)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74.703125,
                y: 14.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria([role=\\"listitem\\"]) >>>> ::-p-aria([role=\\"textbox\\"])'),
            targetPage.locator('div.css-1x5ai02 textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r3v:--tabpanel-0\\"]/div/div[3]/div[1]/div/ol/li/div/textarea)'),
            targetPage.locator(':scope >>> div.css-1x5ai02 textarea')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 95.703125,
                y: 27.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria([role=\\"listitem\\"]) >>>> ::-p-aria([role=\\"textbox\\"])'),
            targetPage.locator('div.css-1x5ai02 textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r3v:--tabpanel-0\\"]/div/div[3]/div[1]/div/ol/li/div/textarea)'),
            targetPage.locator(':scope >>> div.css-1x5ai02 textarea')
        ])
            .setTimeout(timeout)
            .fill('dfjghjdgh edit etymology');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-s8fge7'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r3v:--tabpanel-0\\"]/div/div[3]/div[1]/div/ol/li/div/div/button[1])'),
            targetPage.locator(':scope >>> button.css-s8fge7')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 15.515625,
                y: 26.625,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
