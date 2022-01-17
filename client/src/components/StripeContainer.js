import React from 'react'
import {Elements} from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import PaymentForm from "./PaymentForm"


const PUBLIC_KEY = "pk_test_51KIfJ7BqH1D52WhJIncHKp2WudTxNWVE6nwZGoc2vsXg7triMpoM3cSHsMCbRoEIvSLIkJcDG15Vj1f5syTKqCiW00zAJ0xnVZ"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
            
        </Elements>
    )
}
