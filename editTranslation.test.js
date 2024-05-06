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
                x: 207.359375,
                y: 25.40625,
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
                x: 129.359375,
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
            targetPage.locator('::-p-aria(Login)'),
            targetPage.locator('div.chakra-stack > button'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/div/form/div/div[2]/button)'),
            targetPage.locator(':scope >>> div.chakra-stack > button')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 165.359375,
                y: 33.40625,
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
                x: 119.609375,
                y: 33.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(1) button.css-14uzb63 > svg'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r3t:--tabpanel-0\\"]/div/div[3]/div[3]/div/div[3]/table/tbody/tr[1]/td[3]/div/button[1]/svg)'),
            targetPage.locator(':scope >>> tr:nth-of-type(1) button.css-14uzb63 > svg')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14.203125,
                y: 9.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New translation)'),
            targetPage.locator('#field-\\:r6p\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r6p:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r6p\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 212,
                y: 19,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New translation)'),
            targetPage.locator('#field-\\:r6p\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r6p:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r6p\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 208,
                y: 20,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New translation)'),
            targetPage.locator('#field-\\:r6p\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r6p:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r6p\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 136,
                y: 22,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New translation)'),
            targetPage.locator('#field-\\:r6p\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r6p:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r6p\\:')
        ])
            .setTimeout(timeout)
            .fill('trgfvfdvthydvgtfsfefscdgfvtsergftvs');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r55:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27.828125,
                y: 22,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
