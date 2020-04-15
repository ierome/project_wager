import axios from 'axios'

export function paypalPaymentInitiate() {
    axios.get('/api/payments/createPayment').then(resp => window.location = resp.data)
}