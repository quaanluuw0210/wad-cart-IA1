import { test } from 'node:test'
import assert from 'node:assert/strict'
import { cartTotal } from '../src/cart.js'

// Test 1 — worked example from the slides
test('the example from the slides', () => {
  const items = [
    { name: 'Áo thun', price: 180000, qty: 2 },
    { name: 'Sổ tay',  price: 45000,  qty: 1 },
  ]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  // subtotal = 405000, vat = 32400, shipping = 30000  →  467400
  assert.equal(cartTotal(items, options), 467400)
})

// Test 2 — empty cart returns 0
test('empty cart returns 0', () => {
  assert.equal(cartTotal([], { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }), 0)
})

// Test 3 — free shipping when subtotal >= freeShipFrom
test('free shipping at threshold', () => {
  // subtotal = 500000 (exactly at threshold) → shipping = 0
  // total = 500000 + 500000 * 0.08 + 0 = 540000
  const items = [{ name: 'Giày', price: 500000, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.equal(cartTotal(items, options), 540000)
})

// Test 4 — negative price throws RangeError
test('negative price throws RangeError', () => {
  const items = [{ name: 'Lỗi', price: -1, qty: 1 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

// Test 5 — non-integer quantity throws RangeError
test('non-integer quantity throws RangeError', () => {
  const items = [{ name: 'Lỗi', price: 10000, qty: 1.5 }]
  const options = { vatRate: 0.08, freeShipFrom: 500000, shipFee: 30000 }
  assert.throws(() => cartTotal(items, options), RangeError)
})

