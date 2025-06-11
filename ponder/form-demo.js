let creditCardContainer = document.querySelector('#creditCardNumberContainer')
let paypalContainer = document.querySelector('#paypalUsernameContainer')

function togglePaymentDetails() {
     
        let creditInput = document.querySelector('#creditCardNumber');
        let paypalInput = document.querySelector('#paypalUsername');

        let value = document.querySelector("#paymentMethod").value;

        paypalInput.required=false; //theForm.paypalUsername.required = false;
 

        paypalContainer.classList.add('hide');
        creditCardContainer.classList.add('hide');

        if (value == 'creditCard') {
          creditCardContainer.classList.remove('hide');

          creditInput.required=true;  

        } else if (value == 'paypal') {
          paypalContainer.classList.remove('hide');
          
          paypalInput.required=true;  
        }
      }

const selectElement = document.getElementById("paymentMethod");
selectElement.addEventListener('change', togglePaymentDetails);
