import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1791296006270');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Loopcamp.io');
  await page.locator('iframe[name="a-6wotpyxauhvp"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().locator('[id="0"]').click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().locator('[id="6"]').click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().locator('[id="3"]').click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().locator('[id="8"]').click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().locator('[id="5"]').click();
  await page.locator('iframe[name="c-6wotpyxauhvp"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Loopcamp LLC | Reinforce Learning Experience loopcamp.io https://www.loopcamp.io' }).click();
  await page.getByRole('link', { name: 'Loopcamp LLC | Reinforce Learning Experience loopcamp.io https://www.loopcamp.io' }).click();
});