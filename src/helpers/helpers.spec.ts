import { currency } from './'

describe('Helpers', () => {
  it('currency', () => {
    const result = currency(3000)
    const expectedState = '$3,000.00'
    expect(result).toEqual(expectedState)
  });
})


