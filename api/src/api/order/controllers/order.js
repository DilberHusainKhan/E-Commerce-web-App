'use strict';
const stripe = require('stripe')(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({strapi})=>({
    async create(ctx) {
        const {email,products} = ctx.request.body;
        try{
            const session = stripe.checkout.create({
                mode: 'payment',
                success_url: `${process.env.CLIENT_URL}/success.html`,
                cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
            })
        }catch(err){
            ctx.respond.status = 500;
            return err;
        }
    }
}));
