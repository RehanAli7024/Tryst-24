import React, { useEffect } from 'react';
import axios from '../../axios';
import { DOMAIN } from '../../domain';
import { useNavigate } from 'react-router-dom';

const PaymentComponent = ({ options, members }) => {
    const navigate = useNavigate();
    useEffect(() => {
        loadRazorpay();
    }, []);

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
                const payload = {
                    razorpay_order_id: response.razorpay_order_id,
                    razorpay_payment_id: response.razorpay_payment_id,
                    razorpay_signature: response.razorpay_signature,
                    members: members,
                };
                try {
                    const token = localStorage.getItem('access_token');
                    const verificationResponse = await axios.post(`${DOMAIN}verification/`, payload, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }, payload);
                    if (verificationResponse.status === 200) {
                        alert('Payment successful');
                        navigate('/dashboard');
                    } else {
                        alert('Payment verification failed, Please contact the team.');
                        window.location.reload();
                    }
                } catch (error) {
                    alert("Error verifying payment:", error);
                    window.location.reload();
                }
            },
            prefill: {
                name: options.notes['Name'],
                email: options.notes['email'],
            },
            notes: {
                address: 'Razorpay Corporate Office',
            },
            theme: {
                color: options.theme,
            },
            modal: {
                ondismiss: async function () {
                    try {
                        const token = localStorage.getItem('access_token');
                        // make a get request with the token in the header 
                        const cancelResponse = await axios.get(`${DOMAIN}cancel-order/`, {
                            headers: {
                                Authorization: `Bearer ${token}`,
                            },
                        });
                        if (cancelResponse.status === 200) {
                            alert('Order cancelled successfully.');
                        } else {
                            alert('Failed to cancel the order, Please contact the team.');
                        }
                    } catch (error) {
                        alert('Error cancelling the order:', error.response ? error.response.data : error);
                    } finally {
                        window.location.reload();
                    }
                }

            },
        };

        var paymentObject = new window.Razorpay(option);
        paymentObject.open();
    };


    return null;
};

export default PaymentComponent;
