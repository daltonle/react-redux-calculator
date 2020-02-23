import { evaluate } from 'mathjs'
import { addHistoryEntry } from '../history/actions'

export const addKey = name => (dispatch, getState) => {
  const operators = ['+', '-', '*', '/']
  let expression = getState().calculator.expression.substring(0)

  if (expression === 'Infinity') {
    dispatch({
      type: 'ADD_KEY',
      payload: name,
    })
    return
  }

  if (['0', '- 0'].includes(expression) && name.charCodeAt(0) >= 48 && name.charCodeAt(0) <= 57) {
    expression = `${expression.substring(0, expression.length - 1)}${name}`
  } else if (name === 'negate') {
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
  let result
  try {
    result = evaluate(expression)
    if (Number.isNaN(result)) {
      throw new Error('Not a number')
    }
    dispatch({
      type: 'EQUALS',
      payload: result.toString(),
    })
    addHistoryEntry(expression, result)(dispatch)
  } catch (err) {
    dispatch({
      type: 'ERROR',
    })
  }
}

export const clear = () => dispatch => {
  dispatch({
    type: 'CLEAR',
  })
}
