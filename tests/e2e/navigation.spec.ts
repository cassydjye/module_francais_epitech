import { expect, test } from '@playwright/test';
test('navigates to toolkit and switches language', async ({ page }) => {
  await page.goto('./');
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Le français');
  await page.getByRole('button', { name: 'Changer de langue' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toContainText('French, beyond');
  await page.getByRole('link', { name: 'Toolkit', exact: true }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Toolkit');
});
