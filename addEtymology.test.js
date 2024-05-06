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
                x: 250.359375,
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
                x: 189.359375,
                y: 22.40625,
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
                x: 242.359375,
                y: 23.40625,
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
                x: 159.828125,
                y: 38.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.css-1x5ai02 > div:nth-of-type(1) g > path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r3h:--tabpanel-0\\"]/div/div[3]/div[1]/div/div/button[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div.css-1x5ai02 > div:nth-of-type(1) g > path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 3.25,
                y: 7.83203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('body > div:nth-of-type(3) > div:nth-of-type(3) > div'),
            targetPage.locator('::-p-xpath(/html/body/div[3]/div[3]/div)'),
            targetPage.locator(':scope >>> body > div:nth-of-type(3) > div:nth-of-type(3) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 765,
                y: 446,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('body > div:nth-of-type(3) > div:nth-of-type(3) > div'),
            targetPage.locator('::-p-xpath(/html/body/div[3]/div[3]/div)'),
            targetPage.locator(':scope >>> body > div:nth-of-type(3) > div:nth-of-type(3) > div')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 764,
                y: 447,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.css-1x5ai02 > div:nth-of-type(1) g > path'),
            targetPage.locator('::-p-xpath(//*[@id=\\"tabs-:r3h:--tabpanel-0\\"]/div/div[3]/div[1]/div/div/button[1]/svg/g/path)'),
            targetPage.locator(':scope >>> div.css-1x5ai02 > div:nth-of-type(1) g > path')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 14.25,
                y: 7.83203125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New etymology)'),
            targetPage.locator('#field-\\:r63\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r63:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r63\\:')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 163,
                y: 13,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(New etymology)'),
            targetPage.locator('#field-\\:r63\\:'),
            targetPage.locator('::-p-xpath(//*[@id=\\"field-:r63:\\"])'),
            targetPage.locator(':scope >>> #field-\\:r63\\:')
        ])
            .setTimeout(timeout)
            .fill('etymology');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r3t:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 44.828125,
                y: 26,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r3t:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 48.828125,
                y: 23,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r3t:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47.828125,
                y: 23,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Submit)'),
            targetPage.locator('button.css-1epa6qv'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r3t:\\"]/footer/button[1])'),
            targetPage.locator(':scope >>> button.css-1epa6qv'),
            targetPage.locator('::-p-text(Submit)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 47.828125,
                y: 23,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-aria(Cancel)'),
            targetPage.locator('button.css-s5pzij'),
            targetPage.locator('::-p-xpath(//*[@id=\\"chakra-modal-:r3t:\\"]/footer/button[2])'),
            targetPage.locator(':scope >>> button.css-s5pzij'),
            targetPage.locator('::-p-text(Cancel)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 49,
                y: 0,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
