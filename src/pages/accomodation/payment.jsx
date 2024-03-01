import React from 'react';
import axios from 'axios';
import { DOMAIN } from '../../domain';

const PaymentComponent = ({ options }) => {
    const loadRazorpay = () => {
        const script = document.createElement('script');
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onerror = () => {
            alert('Razorpay SDK failed to load. Are you online?');
        };
        script.onload = () => {
            openRazorpayCheckout();
        };
        document.body.appendChild(script);
    };

    const openRazorpayCheckout = () => {
        let option = {
            key: options.key,
            amount: options.amount,
            currency: 'INR',
            name: options.name,
            description: options.description,
            image: options.image,
            order_id: options.order_id,
            handler: async function (response) {
                // Construct the payload
                const payload = {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                };

                // Use Axios to call your backend verification endpoint
                try {
                    const verificationResponse = await axios.post(`${DOMAIN}verification/`, payload, {
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    });

                    if (verificationResponse.data.status === 'success') {
                        console.log("Payment verified successfully");
                    } else {
                        console.error("Payment verification failed");
                    }
                } catch (error) {
                    console.error("Error verifying payment:", error);
                }
            },
            prefill: {
                name: options.notes['Tryst_ID'],
                email: options.notes['email'],
                contact: '9999999999',
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: '#3399cc',
            },
        };

        var paymentObject = new window.Razorpay(option);
        paymentObject.open();
    };

    return (
        <button onClick={loadRazorpay} className="pay-button">
            Pay with Razorpay
        </button>
    );
};

export default PaymentComponent;