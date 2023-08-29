import { test, expect } from '@playwright/test';
import {
  BatchInfo,
  Configuration,
  EyesRunner,
  VisualGridRunner,
  BrowserType,
  Eyes,
  Target
} from '@applitools/eyes-playwright';

const BASEURL = 'https://www.saucedemo.com/';
const URL = 'https://www.saucedemo.com/inventory.html';
const username = process.env.USERNAME_SAUCE!;
const password = process.env.PASSWORD_SAUCE!;

export let Batch: BatchInfo;
export let Config: Configuration;
export let Runner: EyesRunner;

test.beforeAll(async() => {
    // Warning: If you have a free account, then concurrency will be limited to 1.
    Runner = new VisualGridRunner({ testConcurrency: 1 });

    const runnerName = 'Ultrafast Grid';
    Batch = new BatchInfo({name: `Demo Saucelabs with ${runnerName}`});
  
    Config = new Configuration();
  
    Config.setBatch(Batch);
  
    Config.addBrowser(800, 600, BrowserType.CHROME);
    Config.addBrowser(1600, 1200, BrowserType.FIREFOX);
    Config.addBrowser(1024, 768, BrowserType.SAFARI);
});
test.afterAll(async() => {
    const results = await Runner.getAllTestResults();
    console.log('Visual test results', results);
});

test.describe('Demo Saucelabs', () => {
    let eyes: Eyes;
  
    test.beforeEach(async ({ page }) => {
      eyes = new Eyes(Runner, Config);
      await eyes.open(
        page,
        'Demo Saucelabs',
        test.info().title,
        { width: 1200, height: 600 });
    });

    test.afterEach(async () => {
        await eyes.close();
        // await eyes.closeAsync();
    });

    test('login with placeholder', async ({ page }) => {
    // test.only('login with placeholder', async ({ page }) => {
        console.log('login with placeholder');
        await page.goto(BASEURL);
        await eyes.check('Login page with placeholder', Target.window().fully());
        await page.getByPlaceholder('Username').fill(username);
        await page.getByPlaceholder('Password').fill(password);
        await page.getByRole('button', { name: 'Login' }).click();
        await expect(page).toHaveURL(URL);
        await eyes.check('Home page with placeholder', Target.window().fully().layout());
    });

    test('login with id', async ({ page }) => {
    // test.only('login with id', async ({ page }) => {
        console.log('login with id');
        await page.goto(BASEURL);
        await eyes.check('Login page with placeholder', Target.window().fully());
        await page.locator('#user-name').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('#login-button').click();
        await expect(page).toHaveURL(URL);
        await eyes.check('Home page with placeholder', Target.window().fully().layout());
    });

    test('login with data-test-id', async ({ page }) => {
    // test.only('login with data-test-id', async ({ page }) => {
        console.log('login with data-test-id');
        await page.goto(BASEURL);
        await eyes.check('Login page with placeholder', Target.window().fully());
        await page.getByTestId('username').fill(username);
        await page.getByTestId('password').fill(password);
        await page.getByTestId('login-button').click();
        await expect(page).toHaveURL(URL);
        await eyes.check('Home page with placeholder', Target.window().fully().layout());
    });

});