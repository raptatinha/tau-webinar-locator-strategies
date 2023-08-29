import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'serial' });

const BASEURL = 'https://demoqa.com/login';
const URL = 'https://demoqa.com/profile';
const username = process.env.USERNAME!;
const password = process.env.PASSWORD!;

test('login with placeholder', async ({ page }) => {
// test.only('login with placeholder', async ({ page }) => {
    console.log('login with placeholder');  // Issue console.log inside the page
    await page.goto(BASEURL);
    await page.getByPlaceholder('UserName').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(URL);
});

test('login with id', async ({ page }) => {
    // test.only('login with id', async ({ page }) => {
        console.log('login with id');  // Issue console.log inside the page
        await page.goto(BASEURL);
        await page.locator('#userName').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('#login').click();
        await expect(page).toHaveURL(URL);
});
