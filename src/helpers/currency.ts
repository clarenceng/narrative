type currencyFormat = 'en-US' | 'ja-JP' | 'de-DE'
type currencyType = 'USD' | 'JPY' | 'EUR'

export const currency = (
  num: number,
  format: currencyFormat = 'en-US',
  type: currencyType = 'USD'
) => 
  new Intl.NumberFormat(format, { style: 'currency', currency: type }).format(num)
