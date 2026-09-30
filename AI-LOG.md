# AI-LOG.md

## 2026-09-30 — cartTotal implementation & tests

Tool: Antigravity AI Agent (Claude Sonnet).

Asked for: `cartTotal(items, options)` in `src/cart.js` and 5 isolated unit tests in
           `test/cart.test.js`, derived from the contract in `brief.md` and the
           workspace rules in `.agents/rules/cart-rules.md`.

Changed: AI correctly structured the validation-first loop, subtotal, VAT, and
         shipping logic. Confirmed explicit `Math.round()` return so the result
         is a `Number` (whole dong), not a string.
         Validation order verified: price-negative and non-integer qty checks run
         before any arithmetic, matching the spec's iterate-first requirement.

Not used: Any suggestion to add external npm packages or touch `package.json`.
          `.toFixed()` string formatting — rejected per workspace rules.

Written by hand: `.agents/rules/cart-rules.md` (workspace gate rules), `brief.md`
                 (assignment contract), and `SELF_ASSESSMENT_REPORT.md`.
