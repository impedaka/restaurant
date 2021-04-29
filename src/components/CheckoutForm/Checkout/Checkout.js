/* import { SettingsPhoneSharp } from '@material-ui/icons'
import React, {useState} from 'react'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm';

const Checkout = () => {
    const steps = ['Shipping address', 'Payment details'];
    const [activeStep, setActiveStep] = useState(0)

    const Confirmation = () => (
        <div>
            Confirmation
        </div>
    )

    const Form = () => activeStep === 0
        ? <AddressForm/> 
        : <PaymentForm/>
    return (
        <>
            <h1>Checkout</h1>
            <div activeStep={activeStep}>
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </div>
            {activeStep === steps.length ? <Confirmation/> : <Form/>}
        </>
    )
}

export default Checkout; */
