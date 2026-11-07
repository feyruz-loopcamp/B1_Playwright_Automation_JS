import { expect, test } from '@playwright/test';

/*
 * Test Case
 *  Navigate to /widnows
 *  click on "Click Here"
 *  Validate new tabe has title "New Window"
 */

test('Multiple Windows - Window popup', async ({ page }) => {

    // create an event listener for monitoring windo popup/new tab
    let newPopupEventPromise = page.waitForEvent("popup"); 

    //await page.goto("https://loopcamp.vercel.app/windows.html"); 
    await page.goto(`${process.env.LC_PRACTICE_BASE_URL}windows.html`); 
    // Playwright uses "baseURL" (exact match) automatically and appends whatever String you have as an argument in .goto(); 
    //await page.goto("windows.html"); 
    //await page.waitForTimeout(2000);

    await page.locator("//a[text()='Click Here']").click(); 
    //await page.waitForTimeout(5000);


    let newTab = await newPopupEventPromise;

    // Validating the new tab
    await expect (newTab).toHaveTitle("New Window"); 

    // Validating the original tab
    await expect(page).toHaveTitle("Windows"); 

    // Switch back to the original tab
    await page.bringToFront(); 
    //await page.waitForTimeout(2000);

    // Switch back to the 2nd tab
    await newTab.bringToFront();
    //await page.waitForTimeout(2000);


    // getting all the tabs
    let allTabs = page.context().pages(); 
    console.log(allTabs.length);

    for (let eachTab of allTabs){
        console.log(await eachTab.title());
    }

    await newTab.close();
    await page.waitForTimeout(2000);


});

