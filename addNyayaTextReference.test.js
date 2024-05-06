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
                x: 209.359375,
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
            .fill('f');
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
                x: 111.359375,
                y: 21.40625,
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
            .fill('');
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
                x: 111.359375,
                y: 21.40625,
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
                x: 33.359375,
                y: 24.40625,
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
                x: 236.359375,
                y: 30.40625,
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
                x: 171.984375,
                y: 20.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) g > path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r3b:--tabpanel-0\\"]/div/div[3]/div[5]/div/div[1]/button[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(5) g > path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3.65625,
                y: 4.83203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New source)'),
            targetPage.locator('#field-\\:r5v\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r5v:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r5v\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 30,
                y: 28,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New source)'),
            targetPage.locator('#field-\\:r5v\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r5v:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r5v\\:')
        ])
            .setTimeout(timeout)
            .fill('efsgdfgdfgf');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New description)'),
            targetPage.locator('#field-\\:r61\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r61:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r61\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 80,
                y: 28,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New description)'),
            targetPage.locator('#field-\\:r61\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r61:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r61\\:')
        ])
            .setTimeout(timeout)
            .fill('dghfghfghfgh');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r4v:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 38.828125,
                y: 28,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
