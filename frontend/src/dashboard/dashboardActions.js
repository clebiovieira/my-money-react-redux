import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'

//Todo ActionReducer deve retornar um TYPE e o seu dado

export function getSummary() {
    const request = axios.get(`${BASE_URL}/billingCycle/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}