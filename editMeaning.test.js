const puppeteer = require('puppeteer'); // v22.0.0 or later

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 982,
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
                x: 149.359375,
                y: 11.40625,
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
                x: 89.359375,
                y: 18.40625,
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
                x: 102.359375,
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
                x: 136.828125,
                y: 30.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div > div.chakra-editable'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r41:--tabpanel-0\\"]/div/div[2])'),
            targetPage.locator(':scope >>> div > div.chakra-editable'),
            targetPage.locator('::-p-text(wertsewertse)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 68.5,
                y: 23.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria([role=\\"tabpanel\\"]) >>>> ::-p-aria([role=\\"textbox\\"])'),
            targetPage.locator('div > div.chakra-editable > textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r41:--tabpanel-0\\"]/div/div[2]/textarea)'),
            targetPage.locator(':scope >>> div > div.chakra-editable > textarea')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 74.5,
                y: 23.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria([role=\\"tabpanel\\"]) >>>> ::-p-aria([role=\\"textbox\\"])'),
            targetPage.locator('div > div.chakra-editable > textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r41:--tabpanel-0\\"]/div/div[2]/textarea)'),
            targetPage.locator(':scope >>> div > div.chakra-editable > textarea')
        ])
            .setTimeout(timeout)
            .fill('wertse edit meaning');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-s8fge7'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r41:--tabpanel-0\\"]/div/div[2]/div/button[1])'),
            targetPage.locator(':scope >>> button.css-s8fge7')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8.5,
                y: 24.625,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
