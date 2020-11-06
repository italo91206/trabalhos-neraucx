{
  "--troca-forms": component => {
    var toPassword = document.getElementsByClassName('sc-change-to-password')[0];
    var toEmail = document.getElementsByClassName('sc-change-to-email')[0];

    var emailOnly = document.getElementById('sc-email-only');
    var passwordOnly = document.getElementById('sc-password-only');
    var both = document.getElementById('sc-both');

    function formsControl(){
      if(toEmail.checked && toPassword.checked){ // first check if both are checked
        emailOnly.classList.add('sc-hidden');
        passwordOnly.classList.add('sc-hidden');
        both.classList.remove('sc-hidden');
      }
      else if(toEmail.checked && !toPassword.checked){ // clicked in the email options
        emailOnly.classList.remove('sc-hidden');
        passwordOnly.classList.add('sc-hidden');
        both.classList.add('sc-hidden');
      }
      else if(!toEmail.checked && toPassword.checked){ // clicked in the email options
        emailOnly.classList.add('sc-hidden');
        passwordOnly.classList.remove('sc-hidden');
        both.classList.add('sc-hidden');
      }
      else if(!toEmail.checked && !toPassword.checked){ // clicked in the email options
        emailOnly.classList.add('sc-hidden');
        passwordOnly.classList.add('sc-hidden');
        both.classList.add('sc-hidden');
      }
    }

    toEmail.addEventListener("click", function(){formsControl()})
    toPassword.addEventListener("click", function(){formsControl()})
  }
}