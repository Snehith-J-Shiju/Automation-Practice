// import { test, expect, type Page } from '@playwright/test';

// async function loginAndGoToBooking(page: Page) {
//     const baseUrl = "https://eventhub.rahulshettyacademy.com/login";
//     await page.goto(baseUrl);
//     const emailInput = page.getByPlaceholder("you@email.com");
//     const email = "snehithshiju@gmail.com";
//     await emailInput.fill(email);
//     const passwordInput = page.getByLabel("Password");
//     await passwordInput.fill("Automationtesting@123!@#");
//     const signInButton = page.locator("#login-btn");
//     await signInButton.click();
//     const browseEventsLink = page.getByRole("link", { name: "Browse Events" }).first();
//     await expect(browseEventsLink).toBeVisible();   
// }

// // Test 1 — Single ticket booking is eligible for refund

// test('Test 1', async ({ page }) => {
//     // Step 1 - Login using helper function
//     await loginAndGoToBooking(page);

//     // Step 2 - Book first event with 1 ticket (default)
//     const eventsButton = page.locator("#nav-events");
//     await eventsButton.click();
//     const firstEventCardBookNowButton = page.locator("[data-testid*='event-card']").first().locator("[data-testid*='book-now-btn']");
//     await firstEventCardBookNowButton.click();
//     const bookTicketTitle = page.locator("h2:has-text('Book Tickets')");
//     await expect(bookTicketTitle).toBeVisible();
//     const fullNameInput = page.getByPlaceholder("Your full name");
//     await fullNameInput.fill("Snehith Shiju");
//     const emailInput = page.getByPlaceholder("you@email.com");
//     const email = "snehithshiju@gmail.com";
//     await emailInput.fill(email);
//     const phoneInput = page.locator('#phone');
//     await phoneInput.fill("9876543210");
//     const confirmButton = page.locator(".confirm-booking-btn");
//     await confirmButton.click();
//     const bookingRef = await page.locator(".flex .booking-ref").textContent();
//     console.log("Booking Reference: " + bookingRef);

//     // Step 3 — Navigate to booking detail
//     const viewBookingButton = page.getByRole("link", { name: "View My Bookings" });
//     await viewBookingButton.click();
//     const bookingCard = page.locator("[data-testid*='booking-card']").first();
//     await expect(bookingCard).toBeVisible();
//     const expectedURL = "https://eventhub.rahulshettyacademy.com/bookings";
//     const actualURL = page.url();
//     expect(actualURL).toBe(expectedURL);
//     const firstBookingCard = page.locator("#booking-card").first();
//     await firstBookingCard.getByText("View Details").click();
//     const bookingDetailTitle = page.locator("h2:has-text('Booking Information')");
//     await expect(bookingDetailTitle).toBeVisible();

//     // Step 4 — Validate booking ref
//     const bookingDetailRef = await page.locator("span.rounded-lg").textContent();
//     expect(bookingDetailRef).toBe(bookingRef);
//     const eventTitle = await page.locator("h1").textContent();
//     console.log("Event Title: " + eventTitle);
//     expect(eventTitle?.charAt(0)).toBe(bookingRef?.charAt(0));

//     // Step 5 — Check refund eligibility
//     const refundEligibilityButton = await page.locator("#check-refund-btn");
//     await refundEligibilityButton.click();
//     const refundSpinner = page.locator("#refund-spinner");
//     await expect(refundSpinner).toBeVisible();
//     await expect(refundSpinner).not.toBeVisible();
    
//     // Step 6 — Validate result
//     const refundResult = await page.locator("#refund-result");
//     await expect(refundResult).toBeVisible();
//     await expect(refundResult).toHaveText(/Eligible for refund./);
//     await expect(refundResult).toHaveText(/Single-ticket bookings qualify for a full refund./);
// });

// // Test 2 — Group ticket booking is NOT eligible for refund

// test('Test 2', async ({ page }) => {
//     // Step 1 - Login using helper function
//     await loginAndGoToBooking(page);

//     // Step 2 - Book first event with 1 ticket (default)
//     const eventsButton = page.locator("#nav-events");
//     await eventsButton.click();
//     const firstEventCardBookNowButton = page.locator("[data-testid*='event-card']").first().locator("[data-testid*='book-now-btn']");
//     await firstEventCardBookNowButton.click();
//     const bookTicketTitle = page.locator("h2:has-text('Book Tickets')");
//     await expect(bookTicketTitle).toBeVisible();
//     const addTicketsButton = page.locator("button:has-text('+')");
//     await addTicketsButton.click(); // Increase ticket quantity to 2
//     await addTicketsButton.click(); // Increase ticket quantity to 3
//     const fullNameInput = page.getByPlaceholder("Your full name");
//     await fullNameInput.fill("Snehith Shiju");
//     const emailInput = page.getByPlaceholder("you@email.com");
//     const email = "snehithshiju@gmail.com";
//     await emailInput.fill(email);
//     const phoneInput = page.locator('#phone');
//     await phoneInput.fill("9876543210");
//     const confirmButton = page.locator(".confirm-booking-btn");
//     await confirmButton.click();
//     const bookingRef = await page.locator(".flex .booking-ref").textContent();
//     console.log("Booking Reference: " + bookingRef);

//     // Step 3 — Navigate to booking detail
//     const viewBookingButton = page.getByRole("link", { name: "View My Bookings" });
//     await viewBookingButton.click();
//     const bookingCard = page.locator("[data-testid*='booking-card']").first();
//     await expect(bookingCard).toBeVisible();
//     const expectedURL = "https://eventhub.rahulshettyacademy.com/bookings";
//     const actualURL = page.url();
//     expect(actualURL).toBe(expectedURL);
//     const firstBookingCard = page.locator("#booking-card").first();
//     await firstBookingCard.getByText("View Details").click();
//     const bookingDetailTitle = page.locator("h2:has-text('Booking Information')");
//     await expect(bookingDetailTitle).toBeVisible();

//     // Step 4 — Validate booking ref
//     const bookingDetailRef = await page.locator("span.rounded-lg").textContent();
//     expect(bookingDetailRef).toBe(bookingRef);
//     const eventTitle = await page.locator("h1").textContent();
//     console.log("Event Title: " + eventTitle);
//     expect(eventTitle?.charAt(0)).toBe(bookingRef?.charAt(0));

//     // Step 5 — Check refund eligibility
//     const refundEligibilityButton = await page.locator("#check-refund-btn");
//     await refundEligibilityButton.click();
//     const refundSpinner = page.locator("#refund-spinner");
//     await expect(refundSpinner).toBeVisible();
//     await expect(refundSpinner).not.toBeVisible();

//     // Step 6 — Validate result
//     const refundResult = await page.locator("#refund-result");
//     await expect(refundResult).toBeVisible();
//     await expect(refundResult).toHaveText(/Not eligible for refund./);
//     await expect(refundResult).toHaveText(/Group bookings \(3 tickets\) are non-refundable\./);
// });