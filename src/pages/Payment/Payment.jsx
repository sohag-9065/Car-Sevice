import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LwGohIAZWdLcfxioyE7cnV428XpPJdGJt6AURbCMAugnrbOlDGM0EMLurijc7r2RFZEtDsiUGdq63DCfI0X1zim00MuDl3kdK');

const Payment = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="card w-50 max-w-md bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Pay</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <p>Pay : $500</p>
                        </div>
                    </div>
                    <div className="card w-96  shadow-2xl bg-base-100">
                        <div className="card-body">

                        <Elements stripe={stripePromise}>
                                <CheckoutForm  price={50}/>
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;