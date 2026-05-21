# Selenium Test Scripts Guide

This is a README-style sample document for a basic Selenium WebDriver practice project. It is created for portfolio demonstration purposes and does not contain confidential company or client information.

## Project Purpose

The purpose of this sample project is to practice beginner-friendly web automation for common e-commerce flows. It focuses on readable test scripts, stable locators, explicit waits, and simple assertions.

## Suggested Tech Stack

- Python
- Selenium WebDriver
- PyTest

## Automated Flows

- Login with valid credentials
- Login with invalid credentials
- Search product by keyword
- Validate required field message
- Navigate between pages

## Suggested Folder Structure

```text
selenium-demo-tests/
  pages/
    login_page.py
    product_search_page.py
    base_page.py
  tests/
    test_login.py
    test_product_search.py
    test_form_validation.py
  test_data/
    users.json
  conftest.py
  requirements.txt
  README.md
```

## Example Test Naming Convention

- `test_login_with_valid_credentials`
- `test_login_with_invalid_password`
- `test_search_product_by_valid_keyword`
- `test_required_message_is_displayed_when_field_is_empty`
- `test_user_can_navigate_to_product_detail_page`

## Good Practices

- Use explicit waits for elements that load dynamically.
- Avoid hard sleep because it can make tests slow and unstable.
- Keep test data separate from test logic.
- Use readable assertions that describe the expected behavior.
- Use stable locators such as ID, name, CSS selector, or meaningful data attributes.
- Consider Page Object Model later when tests become larger.
- Keep test scripts simple and maintainable for a fresher-level automation portfolio.

## Example Setup Command

```bash
pip install selenium pytest
pytest tests/
```

## Notes

This task intentionally does not include a full Selenium project. The guide documents how a basic practice project could be structured in a future task.
