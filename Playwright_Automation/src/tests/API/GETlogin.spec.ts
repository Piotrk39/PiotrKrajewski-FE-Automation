import { test, expect } from '@playwright/test';

test('GET login', async ({ request, baseURL }) => {

    await test.step('Validate element loaded', async () => {
      console.log('Checking element...');
      const response = await request.get( baseURL, {
    });
    
      const contentType = response.headers()['content-type'];
  
      // Use optional chaining to check if it's HTML
      const isHtmlResponse = contentType?.includes('text/html');
      
      if (isHtmlResponse) {
        // Check if the response status is OK (200)
        if (response.status() === 200) {
          // Handle the HTML response
          const htmlContent = await response.text();

          // For example, you can search for specific elements:
          const element = '#login';
          
          // Perform assertions or validations on the HTML content
          expect(element).toBeDefined();
          console.log('Element is present!');
          console.log(htmlContent);
        } else {
          console.error(`API request failed with status code ${response.status()}`);
          // Handle the non-OK status code as needed
        }
      } else {
        console.error('Response is not HTML.');
        // Handle non-HTML responses or unexpected content types
      }
    });
});