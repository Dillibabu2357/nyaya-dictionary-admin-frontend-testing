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
                x: 92.359375,
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
                x: 32.359375,
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
                x: 144.359375,
                y: 17.40625,
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
                x: 156.609375,
                y: 38.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div:nth-of-type(6) g > path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r4b:--tabpanel-0\\"]/div/div[3]/div[6]/div/div/button[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div:nth-of-type(6) g > path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7.0625,
                y: 10.83203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New synonym)'),
            targetPage.locator('#field-\\:r79\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r79:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r79\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31,
                y: 28,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New synonym)'),
            targetPage.locator('#field-\\:r79\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r79:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r79\\:')
        ])
            .setTimeout(timeout)
            .fill('wr');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('CapsLock');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('CapsLock');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New synonym)'),
            targetPage.locator('#field-\\:r79\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r79:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r79\\:')
        ])
            .setTimeout(timeout)
            .fill('wrQWEFW');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('R');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New synonym)'),
            targetPage.locator('#field-\\:r79\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r79:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r79\\:')
        ])
            .setTimeout(timeout)
            .fill('wrQWEFWETGFRF');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.down('CapsLock');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('CapsLock');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r6f:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 31.828125,
                y: 17,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Add new synonym) >>>> ::-p-aria([role=\\"graphics-symbol\\"])'),
            targetPage.locator('body > div:nth-of-type(3) path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r6f:\\"]/button/svg/path)'),
            targetPage.locator(':scope >>> body > div:nth-of-type(3) path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 7.00006103515625,
                y: 4.0001678466796875,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
