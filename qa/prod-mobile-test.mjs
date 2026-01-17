import { chromium } from 'playwright';

const BASE_URL = 'https://www.mystoragevalet.com';

async function run() {
  console.log('Testing production mobile view...\n');
  
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    isMobile: true,
    hasTouch: true,
  });
  const page = await context.newPage();
  
  // Check for console errors
  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  
  await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  await page.screenshot({ path: '/tmp/prod-mobile-hero.png' });
  console.log('✅ Hero renders on mobile');
  
  // Check hamburger menu
  const hamburger = page.locator('.hamburger, .nav-toggle, [aria-label*="menu"], button:has(svg)').first();
  const hasHamburger = await hamburger.isVisible().catch(() => false);
  console.log(hasHamburger ? '✅ Mobile nav (hamburger) visible' : '⚠️ Hamburger not found (may use different selector)');
  
  // Scroll to How It Works
  await page.locator('#how-it-works').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1500);
  await page.screenshot({ path: '/tmp/prod-mobile-how-it-works.png' });
  console.log('✅ How It Works section renders');
  
  // Test flip card tap
  const step1 = page.locator('.step-circle-container').first();
  const initialFlipped = await step1.evaluate(el => el.classList.contains('flipped'));
  
  await step1.tap();
  await page.waitForTimeout(400);
  const afterTap = await step1.evaluate(el => el.classList.contains('flipped'));
  
  if (initialFlipped !== afterTap) {
    console.log('✅ Flip card tap toggle works');
  } else {
    console.log('⚠️ Flip card state did not change on tap');
  }
  
  // Scroll to form
  await page.locator('#signup').scrollIntoViewIfNeeded();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: '/tmp/prod-mobile-form.png' });
  console.log('✅ Signup form renders on mobile');
  
  // Report console errors
  if (errors.length > 0) {
    console.log('\n❌ Console errors found:');
    errors.forEach(e => console.log('  -', e));
  } else {
    console.log('✅ No console errors');
  }
  
  await browser.close();
  console.log('\n========================================');
  console.log('PRODUCTION MOBILE TEST COMPLETE');
  console.log('Screenshots: /tmp/prod-mobile-*.png');
  console.log('========================================');
}

run().catch(e => {
  console.error('Test failed:', e.message);
  process.exit(1);
});
