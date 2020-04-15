import * as express from 'express'
import { conn } from '../../../db'
import * as paypal from 'paypal-rest-sdk'
const router = express.Router()

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AYyi-QYsp1McWwl83-nF1HnrOS4EDvmmkmCo_Nu5rNoIXhX0NdYz3oR0UjdSjI6Z7IpZ1A5DrYoO3heX',
    'client_secret': 'EPQOfa7yk57AnOtV4YEkjiLAld-16GsfcaQ8vGnlvBzlZiIT_hPiZj7pSMAsq2bXmeoCEiKa7xRwpVzU'
})

router.get('/createPayment', (req, res, next) => {
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:8000/payments/paypal-success",
            "cancel_url": "http://localhost:8000/payments/paypal-cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "Top Up",
                    "sku": "item",
                    "price": "25.00",
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": "25.00"
            },
            "description": "Topup for GameBoss"
        }]
    };
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for(let i = 0;i < payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                  res.send(payment.links[i].href);
                }
              }
        }
    });
})

router.get('/paypal-success', (req, res, next) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      "payer_id": payerId,
      "transactions": [{
          "amount": {
              "currency": "USD",
              "total": "25.00"
          }
      }]
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
      if (error) {
          console.log(error.response);
          throw error;
      } else {
          console.log(JSON.stringify(payment));
          res.send('Success');
      }
  });
})

module.exports = router