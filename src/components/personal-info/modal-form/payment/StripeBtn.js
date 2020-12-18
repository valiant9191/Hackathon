// import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';

// const StripeCheckoutButton = ({ price }) => {
//     const priceForStripe = price * 100;
//     const publishableKey = 'pk_test_sLUqHXtqXOkwSdPosC8ZikQ800snMatYMb';

//     const onToken = token => {
//         console.log(token);
//         alert('Payment Succesful!');
//     };

//     return (
//         <StripeCheckout
//         className="pay_btn"
//             label='Pay Now'
//             name='Wild Art Agency'
//             billingAddress
//             shippingAddress
//             image='https://www.dw.com/image/41371444_401.jpg'
//             description={`Your total is $${price}`}
//             amount={priceForStripe}
//             panelLabel='Pay Now'
//             token={onToken}
//             stripeKey={publishableKey}
//         />
//     )
// }

// export default StripeCheckoutButton;