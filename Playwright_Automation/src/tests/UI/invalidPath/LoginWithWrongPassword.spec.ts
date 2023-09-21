import { test } from '@playwright/test';
import { CommonSteps } from '../../../pages/CommonSteps';
import { DashboardPage } from '../../../pages/Dashboard/DashboardPage';
import testUsers from '../../../../resources/testData/testUsers/testUsers';

test('Login with Admin username and Biancunha password', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const dashboard = new DashboardPage(page);
    await test.step('Navigate to Login page', async () => {
      console.log('Navigating to Login page menu...');
      await common.navigate(baseURL);
    });

    await test.step('Login admin user', async () => {
      console.log('Typing email and password...');
      await dashboard.login(testUsers[0].email, testUsers[1].password);
      console.log('Cliking login...');
      await dashboard.clickLogin();
    });

    await test.step('Confirm user was not redirected',async () => {
      await dashboard.validateLoginPageTitle("Automation doesn't stop at testing, it's just a beginning!");
    })
});