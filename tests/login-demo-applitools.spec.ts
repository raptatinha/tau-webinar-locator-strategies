import { test, expect } from '@playwright/test';

const BASEURL = 'https://demo.applitools.com/';
const URL = 'https://demo.applitools.com/app.html';
const username = process.env.USERNAME!;
const password = process.env.PASSWORD!;

test('login with placeholder', async ({ page }) => {
// test.only('login with placeholder', async ({ page }) => {
    console.log('login with placeholder');  // Issue console.log inside the page
    await page.goto(BASEURL);
    await page.getByPlaceholder('Enter your username').fill(username);
    await page.getByPlaceholder('Enter your password').fill(password);
    await page.getByRole('link', { name: 'Sign in' }).click();
    await expect(page).toHaveURL(URL);
});

test('login with id', async ({ page }) => {
    // test.only('login with id', async ({ page }) => {
        console.log('login with id');  // Issue console.log inside the page
        await page.goto(BASEURL);
        await page.locator('#username').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('#log-in').click();
        await expect(page).toHaveURL(URL);
});
