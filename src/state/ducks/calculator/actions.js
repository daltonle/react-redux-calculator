import store from '../../store'

export const addKey = keyName => ({
  type: 'ADD_KEY',
  payload: keyName,
})

export const equals = () => ({
  type: 'EQUALs',
  payload: eval(store.state.expression),
})
