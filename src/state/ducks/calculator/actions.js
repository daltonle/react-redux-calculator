export const addKey = name => (dispatch, getState) => {
  const operators = ['+', '-', '*', '/']
  let expression = getState().calculator.expression.substring(0)

  if (name === 'negate') {
    if (expression[0] === '-') {
      expression = expression.substring(1)
    } else expression = `- ${expression}`
  } else if (operators.includes(name) && operators.includes(expression[expression.length - 1])) {
    // if user presses 2 operators consecutively, swap the operator
    expression = `${expression.substring(0, expression.length - 1)}${name}`
  } else {
    expression += name
  }

  dispatch({
    type: 'ADD_KEY',
    payload: expression,
  })
}

export const equals = () => (dispatch, getState) => {
  const expression = getState().calculator.expression.replace(/%/g, '/100')
  dispatch({
    type: 'EQUALS',
    payload: eval(expression),
  })
}

export const clear = () => dispatch => {
  dispatch({
    type: 'CLEAR',
  })
}
