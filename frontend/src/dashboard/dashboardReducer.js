const INITIAL_STATE = {summary: {credit: 0, debt: 0}}

//Caso state seja vazio, ele passao o INITIAL_STATE
export default function(state = INITIAL_STATE, action) {    
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            // ...state -> Replica o estado do jeito que ele está
            // Alterando a variavel summary com o que veio da requisição Rest 
            // configurado no ActtionCreator(DashboardActions) do componente
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}