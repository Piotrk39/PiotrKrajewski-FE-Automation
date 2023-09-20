import { test } from '@playwright/test';
import { CommonSteps } from '../../pages/CommonSteps';
import { DashboardPage } from '../../pages/Dashboard/DashboardPage';
import testUsers from '../../../resources/testData/testUsers/testUsers';
import content from '../../../resources/testData/Content/Content';

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
      console.log('Cliking login...');
      await dashboard.clickLogin();
    });

    await test.step('Validate main page content',async () => {
      console.log('Validating content...');
      await dashboard.validateMainPageParagraph(1, content[0].paragraph);
      await dashboard.validateMainPageParagraph(2, content[1].paragraph);
      await dashboard.validateMainPageParagraph(3, content[2].paragraph);
    })

    await test.step('Logout', async () => {
      console.log('Logging out...');
      await dashboard.logout();
    })

    await test.step('Confirm logout',async () => {
      await dashboard.validateLoginPageTitle('adwad');
    })
});