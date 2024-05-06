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
                x: 249.359375,
                y: 6.40625,
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
                y: 9.40625,
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
                x: 145.984375,
                y: 10.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) button.css-14uzb63 > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r5b:--tabpanel-0\\"]/div/div[3]/div[4]/div/div[3]/table/tbody/tr/td[3]/div/button[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) button.css-14uzb63 > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 9.09375,
                y: 0.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New Example)'),
            targetPage.locator('#field-\\:r91\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r91:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r91\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 214,
                y: 40,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New Example)'),
            targetPage.locator('#field-\\:r91\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r91:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r91\\:')
        ])
            .setTimeout(timeout)
            .fill('rgtrgtdgdfgs 23232323232323232323232323');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Applicable Modern Context)'),
            targetPage.locator('#field-\\:r93\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r93:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r93\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 157,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Applicable Modern Context)'),
            targetPage.locator('#field-\\:r93\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r93:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r93\\:')
        ])
            .setTimeout(timeout)
            .fill('dfhgsdfhar333333333333333333');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r73:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57.828125,
                y: 25,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
