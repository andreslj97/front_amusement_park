const formatNumber = (number: number): string => {
  const format = new Intl.NumberFormat('es-CO', { currency: 'COP', maximumSignificantDigits: 3 }).format(number)

  return format
}

export { formatNumber }
