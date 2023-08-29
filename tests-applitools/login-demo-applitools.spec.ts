import { test, expect } from '@playwright/test';
import {
  BatchInfo,
  Configuration,
  EyesRunner,
  VisualGridRunner,
  BrowserType,
  Eyes,
  Target,
} from '@applitools/eyes-playwright';

const BASEURL = 'https://demo.applitools.com/';
const URL = 'https://demo.applitools.com/app.html';
const username = process.env.USERNAME!;
const password = process.env.PASSWORD!;

export let Batch: BatchInfo;
export let Config: Configuration;
export let Runner: EyesRunner;

test.beforeAll(async() => {
    // Warning: If you have a free account, then concurrency will be limited to 1.
    Runner = new VisualGridRunner({ testConcurrency: 1 });

    const runnerName = 'Ultrafast Grid';
    Batch = new BatchInfo({name: `Demo Applitools with ${runnerName}`});
  
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

test.describe('Demo Applitools', () => {
    let eyes: Eyes;
  
    test.beforeEach(async ({ page }) => {
        eyes = new Eyes(Runner, Config);
        await eyes.open(page,'Demo Applitools',test.info().title,{width: 1200, height: 800});
    });

    test.afterEach(async () => {
        await eyes.closeAsync();
    });

    test('login with placeholder', async ({ page }) => {
    // test.only('login with placeholder', async ({ page }) => {
        console.log('login with placeholder');  // Issue console.log inside the page
        await page.goto(BASEURL);
        await eyes.check('Login page with placeholder', Target.window().fully());
        await page.getByPlaceholder('Enter your username').fill(username);
        await page.getByPlaceholder('Enter your password').fill(password);
        await page.getByRole('link', { name: 'Sign in' }).click();
        await expect(page).toHaveURL(URL);
        await eyes.check('Home page with placeholder', Target.window().fully().layout());
    });

    test('login with id', async ({ page }) => {
        // test.only('login with id', async ({ page }) => {
        console.log('login with id');  // Issue console.log inside the page
        await page.goto(BASEURL);
        await eyes.check('Login page with placeholder', Target.window().fully());
        await page.locator('#username').fill(username);
        await page.locator('#password').fill(password);
        await page.locator('#log-in').click();
        await expect(page).toHaveURL(URL);
        await eyes.check('Home page with placeholder', Target.window().fully().layout());
    });

});
