export default ({ startYear, type, currentYear, grid, field }) => {
  if (field === 'notes') {
    return grid?.[type]?.[currentYear]?.[field] || ''
  }

  for (let _currentYear = currentYear; _currentYear >= startYear; _currentYear--) {
    const val = grid?.[type]?.[_currentYear]?.[field]
    if (val) {
      return val
    }
  }

  return 0
}