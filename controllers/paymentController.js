const stripe = require('stripe')('your_stripe_secret_key');

exports.processPayment = async (req, res) => {
    try {
        const { amount, paymentMethodId, currency = 'usd' } = req.body;
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method: paymentMethodId,
            confirmation_method: 'manual',
            confirm: true,
        });
        res.json(paymentIntent);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
