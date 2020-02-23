export const addHistoryEntry = (expression, result) => dispatch => {
  dispatch({
    type: 'ADD_ENTRY',
    payload: {
      expression,
      result,
    },
  })
}

export const loadHistory = () => dispatch => {
  let entries
  try {
    entries = JSON.parse(localStorage.getItem('history'))
  } catch (err) {
    entries = []
  }
  dispatch({
    type: 'LOAD_ENTRIES',
    payload: entries || [],
  })
}
