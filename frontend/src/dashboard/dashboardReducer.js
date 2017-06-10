const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

//Caso state seja vazio, ele passao o INITIAL_STATE
export default function(state = INITIAL_STATE, action) {
    return state
/*    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }*/
}