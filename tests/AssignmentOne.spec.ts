// import { test, expect } from '@playwright/test';

// function futureDateValue(daysAhead = 7) {
//     const date = new Date();
//     date.setDate(date.getDate() + daysAhead);

//     const year = date.getFullYear();
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const day = String(date.getDate()).padStart(2, '0');
//     const hours = String(date.getHours()).padStart(2, '0');
//     const minutes = String(date.getMinutes()).padStart(2, '0');

//     // Format for datetime-local inputs: YYYY-MM-DDTHH:mm
//     return `${year}-${month}-${day}T${hours}:${minutes}`;
// }

// test('@Assignment1', async ({page}) => {
//     // step 1 - Login
//     const baseUrl = "https://eventhub.rahulshettyacademy.com/login";
//     await page.goto(baseUrl);
//     const emailInput = page.getByPlaceholder("you@email.com");
//     const email = "snehithshiju@gmail.com";
//     await emailInput.fill(email);
//     const passwordInput = page.getByLabel("Password");
//     await passwordInput.fill("Automationtesting@123!@#");
//     const signInButton = page.locator("#login-btn");
//     await signInButton.click();
//     const links = page.locator("span.inline-flex").first();
//     await links.waitFor({ state: "visible" });
//     const browseEventsLink = page.getByRole("link", { name: "Browse Events" }).first();
//     await expect(browseEventsLink).toBeVisible();

//     //Step 2 - Create a new event
//     const adminDropdown = page.getByText('Admin', { exact: true });
//     await adminDropdown.click();
//     const manageEventsButton = page.locator('a').filter({ hasText: 'Manage Events' }).first();
//     await manageEventsButton.click();
//     const eventTitle = `Test Event ${Date.now()}`;
//     const titleInput = page.locator("#event-title-input");
//     await titleInput.fill(eventTitle);
//     const descriptionInput = page.locator("#admin-event-form textarea");
//     await descriptionInput.fill("This is a test event created by Playwright.");
//     const cityInput = page.getByLabel("City");
//     await cityInput.fill("Chennai");
//     const venueInput = page.getByLabel("Venue");
//     await venueInput.fill("Chennai Trade Center");
//     const dateInput = page.getByLabel("Event Date & Time");
//     await dateInput.fill(futureDateValue());
//     const priceInput = page.getByLabel("Price");
//     await priceInput.fill("199");
//     const totalSeatsInput = page.getByLabel("Total Seats");
//     await totalSeatsInput.fill("50");
//     const addEventButton = page.locator("#add-event-btn");
//     await addEventButton.click();
//     const successMessage = page.getByText("Event created!");
//     await expect(successMessage).toBeVisible();

//     // Step 3 - Find the event card and capture seats
//     const eventsButton = page.getByText('Events', { exact: true });
//     await eventsButton.click();
//     const allEventCards = page.locator('[data-testid="event-card"]');
//     await allEventCards.first().waitFor();
//     console.log(await allEventCards.allTextContents());
//     await expect(allEventCards.nth(0)).toBeVisible();
//     const myEventCard = await allEventCards.filter({ hasText: eventTitle });
//     await expect(myEventCard).toBeVisible({timeout: 5000});
//     const seatsText = await myEventCard.locator(".text-xs").last().textContent();
//     const seatsBeforeBooking = parseInt((seatsText ?? "0").split('seats')[0]);
//     console.log(`Seats info: ${seatsBeforeBooking}`);

//     // Step 4 - Start booking
//     const bookNowButton = myEventCard.locator('[data-testid="book-now-btn"]');
//     await bookNowButton.click();

//     // Step 5 — Fill booking form
//     const ticketQuantityInput = page.locator("#ticket-count");
//     await expect(ticketQuantityInput).toHaveText("1");
//     const fullNameInput = page.getByLabel("Full Name");
//     await fullNameInput.fill("Snehith Jothi Shiju");
//     const emailFormInput = page.locator("#customer-email");
//     await emailFormInput.fill(email);
//     const phoneNumberinput = page.getByPlaceholder("+91 98765 43210");
//     await phoneNumberinput.fill("9876543210");
//     const confirmBookingButton = page.locator(".confirm-booking-btn");
//     await confirmBookingButton.click();

//     // Step 6 — Verify booking confirmation
//     const bookingReference = page.locator(".booking-ref").first();
//     await expect(bookingReference).toBeVisible();
//     const bookingRef = (await bookingReference.innerText()).trim();
//     console.log(`Booking Reference: ${bookingRef}`);

//     // Step 7 — Verify in My Bookings
//     const viewmyBookingsLink = page.getByRole("link", { name: "View My Bookings" });
//     await viewmyBookingsLink.click();
//     const bookingPageTitle = page.locator("h1");
//     await expect(bookingPageTitle).toHaveText("My Bookings");
//     const bookingsFullUrl = page.url();
//     const bookingsUrl = bookingsFullUrl.split("com")[1];
//     await expect(bookingsUrl).toContain("/bookings");
//     const bookingCards = page.locator("#booking-card");
//     await bookingCards.first().waitFor();
//     const myBookingCard = await bookingCards.filter({ hasText: bookingRef });
//     await expect(myBookingCard).toBeVisible();
//     await expect(myBookingCard.locator("h3", { hasText: eventTitle })).toBeVisible();

//     // Step 8 — Verify seat reduction
//     await page.goto("https://eventhub.rahulshettyacademy.com/events");
//     await allEventCards.first().waitFor();
//     await expect(allEventCards.first()).toBeVisible();
//     const updatedEventCard = allEventCards.filter({ hasText: eventTitle });
//     await expect(updatedEventCard).toBeVisible({timeout: 5000});
//     const seatsTextAfterBooking = await updatedEventCard.locator(".text-xs").last().textContent();
//     const seatsAfterBooking = parseInt((seatsTextAfterBooking ?? "0").split('seats')[0]);
//     console.log(`Seats after booking: ${seatsAfterBooking}`);
//     expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);
// });