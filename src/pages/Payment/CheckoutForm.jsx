import React, { useEffect, useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    fetch('https://genious-car-server-sohag-9065.vercel.app/create-payment-intent', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('genius-token')}`
      },
      body: JSON.stringify({ price: 50 })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret)
        }
      })

  }, [price])

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }
    const card = elements.getElement(CardElement);
    console.log(card);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }

    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: 'Jenny Rosen',
          },
        },
      },
    );

    if (intentError) {
      console.log('[error]', intentError);
    } else {
      console.log('[paymentIntent]: ', paymentIntent.id);

      const payment = {
        orderId: '63658260f591028804d6c939',
        transactionId: paymentIntent.id
      }
      fetch('https://genious-car-server-ecru.vercel.app/orders/payment/63658260f591028804d6c939', {
        method: 'PATCH',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('genius-token')}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => console.log(data));
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" className='mt-5 btn btn-success btn-sm' disabled={!stripe || !elements || !clientSecret}>
        Pay
      </button>
    </form>
  );
};

export default CheckoutForm;