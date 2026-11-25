import { expect, test } from '@playwright/test';
test('navigates to toolkit and switches language', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('body')).toHaveClass(/light/);
  await expect(page.getByRole('link', { name: 'GitHub' })).toHaveCount(1);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Le français');
  await page.getByRole('button', { name: 'Changer de langue' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('French, beyond');
  await page.getByRole('link', { name: 'Toolkit', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Toolkit');
  await page.getByRole('link', { name: 'Workshops', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Kickoff — Module Introduction' })).toBeVisible();
  await page.getByRole('link', { name: 'Open' }).first().click();
  await expect(page.getByRole('link', { name: /Download resource/ })).toHaveAttribute(
    'href',
    /module-introduction.*\.pptx/,
  );
  await page.getByRole('link', { name: 'About', exact: true }).click();
  const footerBottom = await page
    .locator('footer')
    .evaluate((footer) => Math.round(footer.getBoundingClientRect().bottom));
  const viewportHeight = await page.evaluate(() => window.innerHeight);
  expect(footerBottom).toBe(viewportHeight);
});
