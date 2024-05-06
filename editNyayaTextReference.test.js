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
                x: 181.359375,
                y: 29.40625,
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
                x: 140.359375,
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
                x: 142.984375,
                y: 29.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(5) tr:nth-of-type(1) button.css-14uzb63 path:nth-of-type(2)'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:rfl:--tabpanel-0\\"]/div/div[3]/div[5]/div/div[3]/table/tbody/tr[1]/td[3]/div/button[1]/svg/path[2])'),
            targetPage.locator(':scope >>> div:nth-of-type(5) tr:nth-of-type(1) button.css-14uzb63 path:nth-of-type(2)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8.140625,
                y: 9.127044677734375,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New source)'),
            targetPage.locator('#field-\\:rir\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:rir:\\"])'),
            targetPage.locator(':scope >>> #field-\\:rir\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 214,
                y: 32,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New source)'),
            targetPage.locator('#field-\\:rir\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:rir:\\"])'),
            targetPage.locator(':scope >>> #field-\\:rir\\:')
        ])
            .setTimeout(timeout)
            .fill('eryeryrtyrtyrtyttyuytu sdfstgrtrtrytytytytytyty');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New description)'),
            targetPage.locator('#field-\\:rit\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:rit:\\"])'),
            targetPage.locator(':scope >>> #field-\\:rit\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 213,
                y: 20,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New description)'),
            targetPage.locator('#field-\\:rit\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:rit:\\"])'),
            targetPage.locator(':scope >>> #field-\\:rit\\:')
        ])
            .setTimeout(timeout)
            .fill('yttyyutyytyytyytyttyytytytytytytytytytytytyty');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:rhh:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 50.828125,
                y: 17,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
