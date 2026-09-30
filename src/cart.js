/**
 * Calculate the cart total including VAT and shipping.
 *
 * @param {Array<{name: string, price: number, qty: number}>} items
 * @param {{vatRate: number, freeShipFrom: number, shipFee: number}} options
 * @returns {number} Total rounded to the nearest whole đồng
 */
export function cartTotal(items, options) {
  // Validate each item first — throw RangeError on the first bad item found
  if (items) {
    for (const item of items) {
      if (item.price < 0) {
        throw new RangeError(`Item "${item.name}" has a negative price: ${item.price}`)
      }
      if (!Number.isInteger(item.qty) || item.qty <= 0) {
        throw new RangeError(`Item "${item.name}" has an invalid qty: ${item.qty}`)
      }
    }
  }

  // Empty or missing cart
  if (!items || items.length === 0) {
    return 0
  }

  const { vatRate, freeShipFrom, shipFee } = options

  // Subtotal
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0)

  // VAT
  const vat = subtotal * vatRate

  // Shipping
  const shipping = subtotal >= freeShipFrom ? 0 : shipFee

  return Math.round(subtotal + vat + shipping)
}
