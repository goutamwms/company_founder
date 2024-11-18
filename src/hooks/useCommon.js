export function useCommon() {
  function capitalizeFirstLetter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1)
  }
  function formatDate(val) {
    return val
      ? new Date(val).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })
      : null
  }

  return {
    capitalizeFirstLetter,
    formatDate,
  }
}
