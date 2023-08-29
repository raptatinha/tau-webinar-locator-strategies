# Playwright demo for Applitools Webinar - Locator Strategies with Playwright

Hi 👋🏽!

Tests the Sign-in of 3 different web applications: https://demo.applitools.com/, https://demoqa.com/login, and https://www.saucedemo.com/ using [Playwright](https://playwright.dev/) for the [Applitools Webinar - Locator Strategies with Playwright](https://testingwithrenata.com/portfolio/applitools-webinar-locator-strategies-playwright/).

By [Renata Andrade](https://www.linkedin.com/in/raptatinha/)

If you find it useful, consider leaving a ⭐️ for this repo.

Happy Testing 🎭!

## 🪜 Dependecies

- Playwright v1.37.1
- dotenv v16.3.1
- Node v20.3.0
- npm v9.8.1
- Applitools 1.17.5
- VSCode Version: 1.81.1 (Universal)

> Pre requirements:

- [Node setup](https://nodejs.dev/en/learn/how-to-install-nodejs/)
- [VS Code setup](https://code.visualstudio.com/learn/get-started/basics)
- [iTerm setup](https://iterm2.com/documentation-one-page.html)


## 💡 Fork and clone the project

1. Copy the project URL `https://github.com/raptatinha/tau-webinar-locator-strategies`;
1. Fork the project following the [GitHub instructions](https://docs.github.com/en/get-started/quickstart/fork-a-repo) - (use the parameter --clone=true);
1. Access the forked project `cd tau-webinar-locator-strategies`

## 🧬 Setup and Install

1. Set up the environment variables.

    1.1. Create the following file in the project root folder:

   - .env

    1.2. Copy the content of [.env.example](.env.example) into the newly created file.</br>
    1.3. Update the APPLITOOLS_API_KEY (you can check how to do it here: https://applitools.com/docs/topics/overview/obtain-api-key.html).

2. On your terminal, type:

   2.1. `npm i`

## 🚀 Run

- Run tests without Visual Regression: `npx playwright test tests/`
- Run tests with Visual Regression: `npx playwright test tests-applitools/`

## 📊 Report

`npx playwright show-report`

___


💡 Share on LinkedIn something interesting you've learned! Don't forget to tag me [Renata Andrade](https://www.linkedin.com/in/raptatinha/).

💜 If you have questions, feel free to post them on [github](https://github.com/raptatinha/tau-webinar-locator-strategies/issues).

Happy Testing 🎭
