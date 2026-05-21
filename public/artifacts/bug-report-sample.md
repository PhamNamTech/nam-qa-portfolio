# Bug Report Samples

These are sample bug reports created for portfolio demonstration purposes. They do not contain confidential company or client information.

## BUG-DEMO-001

**Title:** Cart total is not updated after changing product quantity

**Environment:** Demo e-commerce web application, Chrome latest version, Windows 11

**Preconditions:**
- User is logged in with a demo account.
- Cart contains at least one product.

**Steps to Reproduce:**
1. Open the cart page.
2. Change the product quantity from `1` to `2`.
3. Click the update quantity button.
4. Observe the cart subtotal and total amount.

**Expected Result:** The item subtotal and cart total are recalculated based on the updated quantity.

**Actual Result:** The quantity value changes, but the subtotal and total remain the same.

**Severity:** Major

**Priority:** High

**Evidence:** Text-based observation: quantity displays `2`, but total still equals the price for quantity `1`.

**Status:** Open

**Notes:** Sample issue for demonstrating clear bug reporting structure.

## BUG-DEMO-002

**Title:** Login button remains disabled after entering valid email and password

**Environment:** Demo e-commerce web application, Microsoft Edge latest version, Windows 11

**Preconditions:**
- User is on the login page.
- Login form is visible.

**Steps to Reproduce:**
1. Open the login page.
2. Enter a valid email format: `tester@example.com`.
3. Enter a valid password: `Demo@123`.
4. Observe the Login button state.

**Expected Result:** The Login button becomes enabled after both required fields contain valid input.

**Actual Result:** The Login button remains disabled, so the user cannot submit the form.

**Severity:** Major

**Priority:** High

**Evidence:** Text-based observation: both fields contain values, but the button state remains disabled.

**Status:** Open

**Notes:** Sample issue for a form validation or UI state problem.

## BUG-DEMO-003

**Title:** Checkout page allows submission with empty phone number

**Environment:** Demo e-commerce web application, Chrome latest version, Windows 11

**Preconditions:**
- User is logged in.
- Cart contains at least one product.
- Checkout page is open.

**Steps to Reproduce:**
1. Fill in a valid delivery address.
2. Leave the phone number field empty.
3. Select a payment method.
4. Click Place Order.

**Expected Result:** A validation message is displayed and the order is not submitted until phone number is provided.

**Actual Result:** The order is submitted successfully even though the phone number field is empty.

**Severity:** Major

**Priority:** Medium

**Evidence:** Text-based observation: order confirmation appears after submitting the form with an empty phone number.

**Status:** Open

**Notes:** Sample issue for required field validation.
