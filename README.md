# Titan TypeScript Challenge

This project reads a list of products from a JSON file, validates the data, and recursively navigates through nested product categories.

## Features

- Reads products from `products.json`
- Validates product data (ID, name, price)
- Supports nested categories with recursion
- Prints valid product count and error list

## How to Run

1. Install dependencies:

   ```
   npm install
   ```

2. Run the project:
   ```
   npm run dev
   ```

## Project Structure

```
src/
  types/          # Type definitions
  utils/          # File reading helpers
  data/           # Mock data
  index.ts        # Main entry point
  validator.ts    # Method to validate products
```

## Example Output

```
Valid products: 3
Errors found:
 - Product 2: invalid price
 - Product 3: invalid id, empty name
 - Product 8: invalid id, empty name,
```
