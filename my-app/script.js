  // increase quantity function 
  //This is a button to increase & decrease  the product quantity in the cart.
  let quantityInputs = document.getElementsByClassName('cart-quantity-input')

  for (let i = 0; i < quantityInputs.length; i+-+) 

      let input = quantityInputs[i]

      input.addEventListener(, quantityChanged)