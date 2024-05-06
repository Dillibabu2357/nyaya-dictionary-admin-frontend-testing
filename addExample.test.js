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
                x: 86.359375,
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
                x: 74.359375,
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
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Login)'),
            targetPage.locator('div.chakra-stack > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/form/div/div[2]/button)'),
            targetPage.locator(':scope >>> div.chakra-stack > button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 149.359375,
                y: 26.40625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(pasu__dsfsfv)'),
            targetPage.locator('tr.css-1ktjntc > td:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/main/div/div[2]/table/tbody/tr[2]/td[2])'),
            targetPage.locator(':scope >>> tr.css-1ktjntc > td:nth-of-type(2)'),
            targetPage.locator('::-p-text(pasu__dsfsfv)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 183.609375,
                y: 23.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(4) button.css-1sq8m0u > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r7t:--tabpanel-0\\"]/div/div[3]/div[4]/div/div[1]/button[1]/svg)'),
            targetPage.locator(':scope >>> div:nth-of-type(4) button.css-1sq8m0u > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 17.3125,
                y: 10.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New Example)'),
            targetPage.locator('#field-\\:rah\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:rah:\\"])'),
            targetPage.locator(':scope >>> #field-\\:rah\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14,
                y: 16,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New Example)'),
            targetPage.locator('#field-\\:rah\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:rah:\\"])'),
            targetPage.locator(':scope >>> #field-\\:rah\\:')
        ])
            .setTimeout(timeout)
            .fill('s');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New Example)'),
            targetPage.locator('#field-\\:rah\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:rah:\\"])'),
            targetPage.locator(':scope >>> #field-\\:rah\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30,
                y: 23,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New Example)'),
            targetPage.locator('#field-\\:rah\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:rah:\\"])'),
            targetPage.locator(':scope >>> #field-\\:rah\\:')
        ])
            .setTimeout(timeout)
            .fill('sseserscfraserf');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Applicable Modern Context)'),
            targetPage.locator('#field-\\:raj\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:raj:\\"])'),
            targetPage.locator(':scope >>> #field-\\:raj\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 59,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Applicable Modern Context)'),
            targetPage.locator('#field-\\:raj\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:raj:\\"])'),
            targetPage.locator(':scope >>> #field-\\:raj\\:')
        ])
            .setTimeout(timeout)
            .fill('seefrwsfrdefr');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r99:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28.828125,
                y: 16,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
