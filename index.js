const amountElement = document.getElementById("amount")
console.log(amountElement.value)


paypal
  .Buttons({
    createOrder: async function (data, actions) {
        return actions.order.create({
            purchase_units: [ 
                {
                    amount: {
                        value: amountElement.value,
                    },
                },
            ],
        })
    },

    onApprove: function (data, actions) {
        return actions.order.capture().then(function (details) {
             alert("Transaction Completed by "+  details.player.name.given_name)
        } )
    }
}
).render("#paypal")