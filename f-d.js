// form-demo.js
  
  function togglePaymentDetails() {
    console.log('in function');
    
    // Get a reference the creditCardContainer and paypalContainer
    const creditCardContainer = document.querySelector('#creditCardNumberContainer');
    const paypalContainer = document.querySelector('#paypalUsernameContainer');

    // Show the container based on the selected payment method and hide the other container, and add the required attribute to the one selected and take off the required from the one not selected.

    if (theForm.paymentMethod.value === 'creditCard'){
      creditCardContainer.classList.remove('hide');
      paypalContainer.classList.add('hide');
      theForm.paypalUsername.required = false;
      theForm.creditCardNumber.required = true;
    } else if (theForm.paymentMethod.value === 'paypal') {
      paypalContainer.classList.remove('hide');
      creditCardContainer.classList.add('hide');
      theForm.creditCardNumber.required = false;
      theForm.paypalUsername.required = true
    }
  
  }
  
  // attach a change event handler to the paymentMethod input
  let payment_option = document.querySelector('#paymentMethod');
  payment_option.addEventListener('change', togglePaymentDetails)

  // get a reference to the form. We can access all the named form inputs through the form element.
  const theForm = document.querySelector('form');
  
  //Initially set both credit card and paypal inputs to not required since they are both hidden to begin with and this will prevent errors
  theForm.paypalUsername.required = false;
  theForm.creditCardNumber.required = false;