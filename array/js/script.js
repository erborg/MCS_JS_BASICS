let crypto = [
  {
    name: "Bitcoin",
    price: 1388.37
  },
  {
    name: "Ethereum",
    price: 716
  },
  {
    name: "Litecoin",
    price: 140
  }
]

const color = ["#D0021D", "#4991E2", "#50E3C1"]
crypto.forEach(function(coin, i, crypto) {
  document.querySelector('body').innerHTML += "<div class='coin'><h1>"+crypto[i].name+"</h1><div>"+crypto[i].price+"</div><div class='stripe'></div></div>"
  for (stripe of document.querySelectorAll('.stripe')) {
    stripe.style.width += crypto[i].price/2+'px'
    stripe.style.backgroundColor += color[i]
  }
})
