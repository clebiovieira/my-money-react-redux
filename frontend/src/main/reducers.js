import {combineReducers} from 'redux'

//combineReducers concatena todos os Reducers da aplicação
const rootReducer = combineReducers({
    dashboard: () => ({summary: {credit:100, devit: 50}})
})

export default rootReducer