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
                x: 146.359375,
                y: 23.40625,
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
                x: 115.359375,
                y: 21.40625,
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
                x: 57.984375,
                y: 30.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(7) ol'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r4v:--tabpanel-0\\"]/div/div[3]/div[7]/div/ol)'),
            targetPage.locator(':scope >>> div:nth-of-type(7) ol')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 299.09375,
                y: 23.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria([role=\\"tabpanel\\"]) >>>> ::-p-aria([role=\\"textbox\\"])'),
            targetPage.locator('div:nth-of-type(7) textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r4v:--tabpanel-0\\"]/div/div[3]/div[7]/div/ol/li/div/textarea)'),
            targetPage.locator(':scope >>> div:nth-of-type(7) textarea')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 162.09375,
                y: 44.625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria([role=\\"tabpanel\\"]) >>>> ::-p-aria([role=\\"textbox\\"])'),
            targetPage.locator('div:nth-of-type(7) textarea'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r4v:--tabpanel-0\\"]/div/div[3]/div[7]/div/ol/li/div/textarea)'),
            targetPage.locator(':scope >>> div:nth-of-type(7) textarea')
        ])
            .setTimeout(timeout)
            .fill('feargregedgfsdfgsdfg wertwertweftweft sdfsdfasdfgasdfasdfgasd');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-s8fge7'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r4v:--tabpanel-0\\"]/div/div[3]/div[7]/div/ol/li/div/div/button[1])'),
            targetPage.locator(':scope >>> button.css-s8fge7')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 25.09375,
                y: 14.625,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
