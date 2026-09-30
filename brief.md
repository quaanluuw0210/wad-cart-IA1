# Task Brief: Implement cartTotal Function

## Specification
Implement `cartTotal(items, options)` in `src/cart.js` using plain JavaScript with zero external dependencies.

- Contract:
  - `items`: Array of objects `[{ name, price, qty }]`
  - `options`: Object `{ vatRate, freeShipFrom, shipFee }`
- Rules:
  - Return `subtotal + VAT + shipping` rounded to whole đồng (Number).
  - Empty cart (`items` is empty/falsy) returns `0`.
  - Free shipping (`shipping = 0`) if `subtotal >= freeShipFrom`, else `shipFee`.
  - Throw `RangeError` if any item has `price < 0` or `qty` is not a positive integer (`!Number.isInteger(qty) || qty <= 0`).