const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 910,
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
                x: 97.359375,
                y: 30.40625,
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
                x: 81.359375,
                y: 16.40625,
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
            targetPage.locator('#root > div > div > div'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div)'),
            targetPage.locator(':scope >>> #root > div > div > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 146.359375,
                y: 380.59375,
              },
            });
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
                x: 125.359375,
                y: 15.40625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(pasu__)'),
            targetPage.locator('tr.css-1ktjntc > td:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/main/div/div[2]/table/tbody/tr[2]/td[2])'),
            targetPage.locator(':scope >>> tr.css-1ktjntc > td:nth-of-type(2)'),
            targetPage.locator('::-p-text(pasu__)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 260.609375,
                y: 12.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('button.css-14uzb63 path:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/main/div[1]/div/div[1]/div/button[2]/svg/path[2])'),
            targetPage.locator(':scope >>> button.css-14uzb63 path:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 6.8125,
                y: 7.5020294189453125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(English Transliteration)'),
            targetPage.locator('#field-\\:ra5\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:ra5:\\"])'),
            targetPage.locator(':scope >>> #field-\\:ra5\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 280,
                y: 27,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(English Transliteration)'),
            targetPage.locator('#field-\\:ra5\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:ra5:\\"])'),
            targetPage.locator(':scope >>> #field-\\:ra5\\:')
        ])
            .setTimeout(timeout)
            .fill('pasu__dsfsfv');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r9t:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 67.828125,
                y: 11,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});

