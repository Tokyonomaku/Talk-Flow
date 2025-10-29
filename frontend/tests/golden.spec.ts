import { test, expect } from '@playwright/test';

test('golden path - LanguageTool summarize', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  
  // Type in textarea
  await page.fill('textarea', 'This is a test text that should be summarized by the language tool');
  
  // Select "summarize"
  await page.selectOption('select', 'summarize');
  
  // Click "Generate"
  await page.click('button:has-text("Generate")');
  
  // Expect result to contain "Summary:"
  await expect(page.locator('[data-testid="result"]')).toContainText('Summary:');
});
