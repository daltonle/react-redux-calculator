const initialState = {
  expression: '',
  result: undefined,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_KEY':
      return {
        ...state,
        expression: action.payload,
      }
    case 'EQUALS':
      return {
        ...state,
        expression: '',
        result: action.payload,
      }
    case 'CLEAR':
      return {
        ...state,
        expression: '',
        result: undefined,
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer
