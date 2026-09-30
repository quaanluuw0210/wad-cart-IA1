---
trigger: always_on
---

# Cart Project Rules

## Tech Stack & Commands
- Language: Plain JavaScript (ES Modules)
- Test Runner: Node.js native test runner (`npm test`)
- Gate: `npm test` must pass 100% green

## Constraints
- NEVER install or introduce external dependencies in `package.json`.
- NEVER return total cost as String (do NOT use `.toFixed()`).
- ALWAYS round the result to the nearest whole đồng using `Math.round()`.
- ONLY modify `src/cart.js` and `test/cart.test.js`.