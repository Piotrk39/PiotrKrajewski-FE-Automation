<p align="center">
  <a href="https://playwright.dev/">
    <img width="140" alt="Playwright Logo" src="https://seeklogo.com/images/P/playwright-logo-22FA8B9E63-seeklogo.com.png" />
  </a>
</p>


<p align="center">
  This is playwright automation test suite designed for the assesment process
</p>

> 🚩 **Note**

### Installation

Clone the repository and run the command:

```shell
npm install
```

> 🚩 **Note**
> 
> The Prerequisite is to have Node.js, Plawyright and Playwright Add On for VS Code installed on your machine
>
> 🚩 **Note**
>
> - You need to have "Live Server" extension installed on your VS code
>
> - Run the live server (By default it should be at port 5500 if it is not you will have to update the baseURL)
>
> - "baseURL" is located under Playwright_Automation/playwright.config.ts under "projects"

### Run test via console
```
> cd Playwright_Automation
```

```shell
npx playwright test --project Chrome
```
### Or to run both mobile and desktop test

```shell
npx playwright test
```

### Or run them using built in runner via VS Code

> 🚩 **Note**
> You can also select which profile you want to use in the Test tab.
> Slow motion test execution is disabled by default. If you wish to run them slower please comment out the line in Playwright.config file

### Project is written in TypeScript and uses Playwright API to run the tests. Structure of the project consists of Page Object model that is divided into locators and methods that are called in the test itself.
### In addtition to UI tests API testing was added that can be run together or separate from UI tests.

> 🚩 **Test Structure**

- Since the application presented is one page app all the tests will pass no matter the "expect" result validation. 

- The idea behind the structure of the tests was to present the possibilities of "Playwright" itself as well as the structure the tests could take in the business environment that usually is very demanding.

- Such enviroment needs clear structure with separate functions, locators and tests divided into suites depending on tests written in Test management system eg. X-ray for Jira or Azure DevOps.

> 🚩 **Test Cases**

```shell
Valid Path:
GIVEN user logs into the app with "username" and "password".
WHEN is redirected to main page user can observe with "3 pragraphs" of text on the main page.
THEN user logs out and sees again the login page with "welcome" h1 text.
```

```shell
Invalid Path:
WHEN user logs into the app with his "username" and another user's "password".
THEN after clicking login button he is not redirected and still sees login page with "welcome" h1 text.
```
## License

[![license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/cypress-io/cypress/blob/master/LICENSE)

This project is licensed under the terms of the [MIT license](/LICENSE).


