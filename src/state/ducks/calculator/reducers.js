const initialState = {
  expression: '0',
  hasError: false,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_KEY':
      return {
        ...state,
        expression: action.payload,
        hasError: false,
      }
    case 'EQUALS':
      return {
        ...state,
        expression: action.payload,
      }
    case 'CLEAR':
      return {
        ...state,
        expression: '0',
      }
    case 'ERROR':
      return {
        ...state,
        expression: '',
        hasError: true,
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer
