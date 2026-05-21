# SQL Validation Samples

These SQL examples are sample/demo QA materials for an e-commerce web application practice context. Table and column names are examples and should be adjusted based on the real database schema.

## 1. Validate User Exists After Registration

```sql
SELECT id, full_name, email, created_at
FROM users
WHERE email = 'demo.user@example.com';
```

Expected QA check: one user record should exist after successful registration.

## 2. Validate Order Is Created After Checkout

```sql
SELECT id, user_id, order_status, total_amount, created_at
FROM orders
WHERE user_id = 101
ORDER BY created_at DESC
LIMIT 1;
```

Expected QA check: latest order should be created with the correct user and status.

## 3. Validate Order Item Count

```sql
SELECT order_id, COUNT(*) AS item_count
FROM order_items
WHERE order_id = 5001
GROUP BY order_id;
```

Expected QA check: database item count should match the number of products shown in the UI order detail.

## 4. Validate Cart Total Calculation

```sql
SELECT
  cart_id,
  SUM(quantity * unit_price) AS calculated_total
FROM cart_items
WHERE cart_id = 3001
GROUP BY cart_id;
```

Expected QA check: calculated total should match the cart total displayed in the UI.

## 5. Validate Payment Status

```sql
SELECT order_id, payment_method, payment_status, paid_at
FROM payments
WHERE order_id = 5001;
```

Expected QA check: payment status should match the expected result after checkout.

## 6. Find Duplicate User Emails

```sql
SELECT email, COUNT(*) AS duplicate_count
FROM users
GROUP BY email
HAVING COUNT(*) > 1;
```

Expected QA check: no duplicate email should exist if email is required to be unique.

## 7. Check Orders With Missing Customer Information

```sql
SELECT id, user_id, shipping_address, phone_number
FROM orders
WHERE shipping_address IS NULL
   OR shipping_address = ''
   OR phone_number IS NULL
   OR phone_number = '';
```

Expected QA check: completed orders should not have missing required customer information.

## 8. Check Products With Negative Stock

```sql
SELECT id, product_name, stock_quantity
FROM products
WHERE stock_quantity < 0;
```

Expected QA check: product stock should not be negative.

## 9. Verify Latest Order By User

```sql
SELECT id, user_id, order_status, total_amount, created_at
FROM orders
WHERE user_id = 101
ORDER BY created_at DESC
LIMIT 1;
```

Expected QA check: latest order should match the most recent order shown in the user order history page.

## 10. Compare UI Order Total With Database Total

```sql
SELECT
  o.id AS order_id,
  o.total_amount AS stored_order_total,
  SUM(oi.quantity * oi.unit_price) AS calculated_item_total
FROM orders o
JOIN order_items oi ON o.id = oi.order_id
WHERE o.id = 5001
GROUP BY o.id, o.total_amount;
```

Expected QA check: stored order total should match the calculated total from order items, or any difference should be explained by shipping fee, discount, or tax rules.
