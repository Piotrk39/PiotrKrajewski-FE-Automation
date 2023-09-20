import { test } from '@playwright/test';
import { CommonSteps } from '../../pages/CommonSteps';
import { DashboardPage } from '../../pages/Dashboard/DashboardPage';
import testUsers from '../../../resources/testData/testUsers/testUsers';

test('Login with Admin user', async ({ page, baseURL }) => {
    const common = new CommonSteps(page);
    const dashboard = new DashboardPage(page);
    await test.step('Navigate to Login page', async () => {
      console.log('Navigating to Login page menu...');
      await common.navigate(baseURL);
    });

    await test.step('Login admin user', async () => {
      console.log('Typing email and password...');
      await dashboard.login(testUsers[0].email, testUsers[0].password);
      console.log(testUsers[0].email)
      console.log(testUsers[1].email)
      console.log(testUsers[2].email)
      console.log('Cliking login...');
      await dashboard.clickLogin();
    });
});