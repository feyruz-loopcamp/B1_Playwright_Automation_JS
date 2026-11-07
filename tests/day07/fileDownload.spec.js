import { expect, test } from '@playwright/test';
import path from 'path';
import fs from 'fs'; 

test('File Download', async ({ page }) => {

    // Declaring an event listener for download 
    let downloadPromise = page.waitForEvent("download");


    await page.goto(`${process.env.LC_PRACTICE_BASE_URL}download.html`);
    await page.waitForTimeout(2000); 

    // Actual event hapens 
    //await page.locator("//a[text()='some-file.txt']").click(); 
    await page.click("text='some-file.txt'"); 

    // since the event happend, we can resolve the promise 
    let downloadHandler = await downloadPromise; 

    // path.join(); ----> this helps as to provide full directory path 
    // __dirname -------> this will give the directory what the test file is 
    // /Users/feyruzshahmuradov/Downloads/pic.png
    // /Users/feyruzshahmuradov/VSCProjects/B1_Playwright_Automation_JS/tests/day07  /downloads. /some-file.txt

    // Here we generated the path to save the file at 
    let downloadPath = path.join(__dirname, './downloads', downloadHandler.suggestedFilename()); 


    // Here we will actually save the file. 
    await downloadHandler.saveAs(downloadPath); 

    // As a tester I need to validate if it actually downloaded.    
    expect(fs.existsSync(downloadPath)).toBeTruthy();

    
});