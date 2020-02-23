const initialState = {
  expression: '0',
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
        expression: action.payload,
      }
    case 'CLEAR':
      return {
        ...state,
        expression: '0',
      }
    default:
      return {
        ...state,
      }
  }
}

export default reducer
