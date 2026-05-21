# Regression Checklist Sample

This checklist is a sample/demo QA artifact for a portfolio practice project. It does not contain confidential company or client information.

## Login and Authentication

- [ ] Verify that user can log in with valid credentials.
- [ ] Verify that invalid password displays a clear error message.
- [ ] Verify that required validation appears when email or password is empty.
- [ ] Verify that logout redirects the user to the correct page.

## Registration

- [ ] Verify that user can register with valid sample data.
- [ ] Verify that required fields cannot be submitted empty.
- [ ] Verify that invalid email format displays a validation message.
- [ ] Verify that password length and confirmation rules work correctly.

## Product Search

- [ ] Verify that search returns matching products for a valid keyword.
- [ ] Verify that no-result message appears for unmatched keyword.
- [ ] Verify that search result count or product list updates after submitting search.

## Product Detail

- [ ] Verify that product name, price, image, and description are displayed.
- [ ] Verify that Add to Cart button is visible and usable.
- [ ] Verify that product detail page handles unavailable products correctly.

## Cart

- [ ] Verify that product can be added to cart.
- [ ] Verify that cart quantity can be updated.
- [ ] Verify that subtotal and total are recalculated after quantity changes.
- [ ] Verify that product can be removed from cart.

## Checkout

- [ ] Verify that checkout cannot be submitted with missing required address.
- [ ] Verify that checkout cannot be submitted with missing phone number.
- [ ] Verify that valid sample checkout creates an order confirmation.

## Order History

- [ ] Verify that latest order appears in order history after successful checkout.
- [ ] Verify that order detail shows product name, quantity, status, and total.

## UI Smoke Check

- [ ] Verify that main pages load without broken layout on desktop and mobile.
- [ ] Verify that buttons, form fields, and navigation links are visible and readable.

## Data Validation

- [ ] Verify that numeric fields do not accept negative values where not allowed.
- [ ] Verify that displayed order total matches expected calculation.

## Basic API Check

- [ ] Verify that user list API returns successful response.
- [ ] Verify that product or order API error response is handled gracefully.
