// import Stripe from 'stripe';

// const stripe = new Stripe(
//   process.env.STRIPE_SECRET_KEY as string, 
//   { apiVersion: '2023-08-16' }
// );
// type Bundle = {
//   name: string
//   price: number
//   description?: string
// }

// export const createStripeSession = async (bundle: Bundle, client_reference_id: string) => {
//   const session = await stripe.checkout.sessions.create({
//     client_reference_id,
//     line_items: [
//       {
//         price_data: {
//           currency: 'usd',
//           product_data: {
//             name: bundle.name,
//             description: bundle.description
//           },
//           unit_amount: bundle.price * 100
//         },
//         quantity: 1
//       }
//     ],
//     mode: 'payment',
//     success_url: `${process.env.NEXT_PUBLIC_APP_URL}/thanks?session_id={CHECKOUT_SESSION_ID}`,
//     cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}`,
//   });
//   return session;
// }

// export const retreiveSession = async (sessionId: string) => {
//   const session = await stripe.checkout.sessions.retrieve(sessionId);
//   return session
// }

// export { stripe }

