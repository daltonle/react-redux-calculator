import store from '../../store'

export const addKey = keyName => (dispatch, getState) => {
  const { expression } = getState().calculator
  dispatch({
    type: 'ADD_KEY',
    payload: expression + keyName,
  })
}

export const equals = () => (dispatch, getState) => {
  dispatch({
    type: 'EQUALS',
    payload: eval(getState().calculator.expression),
  })
}

export const clear = () => dispatch => {
  dispatch({
    type: 'CLEAR',
  })
}
