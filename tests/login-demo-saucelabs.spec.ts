import { test, expect } from '@playwright/test';

const BASEURL = 'https://www.saucedemo.com/';
const URL = 'https://www.saucedemo.com/inventory.html';
const username = process.env.USERNAME_SAUCE!;
const password = process.env.PASSWORD_SAUCE!;

test('login with placeholder', async ({ page }) => {
// test.only('login with placeholder', async ({ page }) => {
    console.log('login with placeholder');
    await page.goto(BASEURL);
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page).toHaveURL(URL);
});

test('login with id', async ({ page }) => {
// test.only('login with id', async ({ page }) => {
        console.log('login with id');
        await page.goto(BASEURL);
        await page.locator('#user-name').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('#login-button').click();
        await expect(page).toHaveURL(URL);
});

test('login with data-test-id', async ({ page }) => {
// test.only('login with data-test-id', async ({ page }) => {
        console.log('login with data-test-id');
        await page.goto(BASEURL);
        await page.getByTestId('username').fill(username);
        await page.getByTestId('password').fill(password);
        await page.getByTestId('login-button').click();
        await expect(page).toHaveURL(URL);
});