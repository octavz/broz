import { test, expect } from '@playwright/test';

import type { Page } from '@playwright/test';

async function collectHrefs(page: Page, selector: string): Promise<string[]> {
  const links = page.locator(selector).locator('a[href]');
  const count = await links.count();
  const hrefs = new Set<string>();

  for (let i = 0; i < count; i++) {
    const href = await links.nth(i).getAttribute('href');
    if (!href) continue;
    hrefs.add(href);
  }

  return [...hrefs];
}

function normalizePath(p: string) {
  const noHash = p.split('#')[0];
  return noHash.endsWith('/') && noHash !== '/' ? noHash.slice(0, -1) : noHash;
}

test.describe('Navigation Tests', () => {
  const routes = [
    { path: '/', locale: 'Romanian homepage' },
    { path: '/en', locale: 'English homepage' },
    { path: '/servicii', locale: 'Romanian services' },
    { path: '/en/services', locale: 'English services' },
    { path: '/despre-noi', locale: 'Romanian about' },
    { path: '/en/about', locale: 'English about' },
  ];

  for (const { path, locale } of routes) {
    test(`Check page renders correctly: ${path} (${locale})`, async ({ page }) => {
      await page.goto(path);
      await expect(page).toHaveTitle(/Centrala/); // Adjust based on expected title
      await expect(page.locator('body')).toBeVisible();
      await expect(page.getByRole('heading', { name: /^404$/ })).toHaveCount(0);
    });
  }

  test('All links are covered (Romanian)', async ({ page }) => {
    await page.goto('/');

    const hrefs = new Set<string>([
      ...(await collectHrefs(page, 'header')),
      ...(await collectHrefs(page, 'main')),
      ...(await collectHrefs(page, 'footer')),
    ]);

    // Verify basic presence of expected core routes
    const normalized = [...hrefs].map(normalizePath);
    expect(normalized).toContain('/despre-noi');
    expect(normalized).toContain('/servicii');
    expect(normalized).toContain('/contact');

    for (const href of hrefs) {
      if (href.startsWith('tel:') || href.startsWith('mailto:')) {
        expect(href).toBeTruthy();
        continue;
      }

      if (!href.startsWith('/')) continue;

      const response = await page.goto(href);
      if (response) expect(response.status()).toBeLessThan(400);
      await expect(page).toHaveTitle(/Centrala/);
      await expect(page.locator('body')).toBeVisible();
      await expect(page.getByRole('heading', { name: /^404$/ })).toHaveCount(0);

      await page.goto('/');
    }
  });

  test('All links are covered (English)', async ({ page }) => {
    await page.goto('/en');

    const hrefs = new Set<string>([
      ...(await collectHrefs(page, 'header')),
      ...(await collectHrefs(page, 'main')),
      ...(await collectHrefs(page, 'footer')),
    ]);

    const normalized = [...hrefs].map(normalizePath);
    expect(normalized).toContain('/en/about');
    expect(normalized).toContain('/en/services');
    expect(normalized).toContain('/en/contact');

    for (const href of hrefs) {
      if (href.startsWith('tel:') || href.startsWith('mailto:')) {
        expect(href).toBeTruthy();
        continue;
      }

      if (!href.startsWith('/')) continue;

      const response = await page.goto(href);
      if (response) expect(response.status()).toBeLessThan(400);
      await expect(page).toHaveTitle(/Centrala/);
      await expect(page.locator('body')).toBeVisible();
      await expect(page.getByRole('heading', { name: /^404$/ })).toHaveCount(0);

      await page.goto('/en');
    }
  });

  test('Language switcher links are covered', async ({ page }) => {
    await page.goto('/');

    // Open language menu (desktop)
    const roButton = page.locator('header').getByRole('button', { name: /Rom/i }).first();
    await roButton.click();
    const toEnglish = page.locator('header').getByRole('link', { name: /English/i }).first();
    await expect(toEnglish).toHaveAttribute('href', /\/en\/?/);

    const enHref = await toEnglish.getAttribute('href');
    expect(enHref).toBeTruthy();
    if (enHref) {
      const response = await page.goto(enHref);
      if (response) expect(response.status()).toBeLessThan(400);
      await expect(page).toHaveTitle(/Centrala/);
      expect(page.url()).toContain('/en');
    }

    // Switch back from English to Romanian
    const enButton = page.locator('header').getByRole('button', { name: /English/i }).first();
    await enButton.click();
    const toRomanian = page.locator('header').getByRole('link', { name: /Rom/i }).first();

    const roHref = await toRomanian.getAttribute('href');
    expect(roHref).toBeTruthy();
    if (roHref) {
      expect(roHref.startsWith('/en')).toBeFalsy();
      const response = await page.goto(roHref);
      if (response) expect(response.status()).toBeLessThan(400);
      await expect(page).toHaveTitle(/Centrala/);
      expect(page.url()).not.toContain('/en');
    }
  });
});
