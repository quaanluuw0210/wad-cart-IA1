# AI-LOG.md

## 2026-09-30 — cartTotal implementation & tests

Tool: Antigravity AI Agent (Claude Sonnet).

Asked for: `cartTotal(items, options)` in `src/cart.js` and 5 isolated unit tests in
           `test/cart.test.js`, based on the contract in `brief.md` and the workspace
           rules in `.agents/rules/cart-rules.md`.

Changed: AI drafted the full function with validation-first loop, subtotal, VAT, and
         shipping logic. Confirmed explicit `Math.round()` return so the result is a
         `Number` (whole dong), not a string.
         Validation order verified: negative-price and non-integer qty checks run
         before any arithmetic, matching the spec iterate-first requirement.

Not used: Any suggestion to add external npm packages or touch `package.json`.
          `.toFixed()` string formatting — rejected per workspace rules.

Written by hand: `.agents/rules/cart-rules.md` (workspace gate rules), `brief.md`
                 (assignment contract), and `SELF_ASSESSMENT_REPORT.md`.

---

## 2026-09-30 — GitHub Actions CI workflow

Tool: Antigravity AI Agent (Claude Sonnet).

Asked for: `.github/workflows/ci.yml` — a CI pipeline that runs on every `push` and
           `pull_request` to `main`, using `ubuntu-latest` and Node.js 20.x, with
           steps for checkout, Node setup, `npm install`, and `npm test`.

Changed: Nothing — the generated YAML matched all requirements exactly (correct
         trigger events, runner, actions versions, and gate command).

Not used: No alternative runner OS or Node version was suggested or needed.

Written by hand: Nothing for this step; the file was fully AI-generated and accepted
                 as-is after review.
