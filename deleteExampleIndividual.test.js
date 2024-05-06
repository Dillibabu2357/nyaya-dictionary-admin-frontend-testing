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
                x: 73.359375,
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
                x: 74.359375,
                y: 23.40625,
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
                x: 171.359375,
                y: 9.40625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(1)'),
            targetPage.locator('tr.css-1ktjntc > td:nth-of-type(3)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"root\\"]/div/div/main/div/div[2]/table/tbody/tr[2]/td[3])'),
            targetPage.locator(':scope >>> tr.css-1ktjntc > td:nth-of-type(3)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 23.09375,
                y: 23.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('tr:nth-of-type(1) button.css-2qj79h path:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r4l:--tabpanel-0\\"]/div/div[3]/div[4]/div/div[3]/table/tbody/tr[1]/td[3]/div/button[2]/svg/path[2])'),
            targetPage.locator(':scope >>> tr:nth-of-type(1) button.css-2qj79h path:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3.52081298828125,
                y: 8.125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Yes)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r67:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Yes)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 12.53125,
                y: 24,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
