import {combineReducers} from 'redux'
import DashboardReducer from '../dashboard/dashboardReducer'

//combineReducers concatena todos os Reducers da aplicação
const rootReducer = combineReducers({
    dashboard: DashboardReducer
})

export default rootReducer