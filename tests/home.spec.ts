// tests/home.spec.ts
import { test, expect } from '@playwright/test'

test('home page loads', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Home | Olympic Park Pharmacy/)
//   await expect(page.getByRole('heading')).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'Book Now' })
    ).toBeVisible()
})