$(function() {
  $("#quoteForm input").jqBootstrapValidation({
    preventSubmit: true,
    submitError: function($form, event, errors) {
      // additional error messages or events
    },
    submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
      // get values from FORM

      var $captcha = $('#recaptcha-1');
      var response = grecaptcha.getResponse(window.clientId1);

      var name = $("input#quote-name").val();
      var email = $("input#quote-email").val();
      var phone = $("input#quote-phone").val();
      var company = $("input#quote-company").val();
      var firstName = name; // For Success/Failure Message
      // Check for white space in name for Success/Fail message
      if (firstName.indexOf(' ') >= 0) {
        firstName = name.split(' ').slice(0, -1).join(' ');
      }

      $this = $("#sendQuoteButton");
      $this.prop("disabled", true); // Disable submit button until AJAX call is complete to prevent duplicate messages

      $.ajax({
        url: "././mail/quote_me.php",
        type: "POST",
        data: {
          name: name,
          phone: phone,
          email: email,
          company: company,
          captcha: response
        },
        cache: false,
        success: function(data) {
          // Success message
          if(data === 'false'){
            handleError("reCAPTCHA is mandatory");
          }else{
            $('#quote-success').html("<div class='alert alert-success'>");
            $('#quote-success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append("</button>");
            $('#quote-success > .alert-success').append("<strong>Your message has been sent. Someone will be contacting you shortly.</strong>");
            $('#quote-success > .alert-success').append('</div>');

            //clear all fields
            $('#quoteForm').trigger("reset");
          }
        },
        error: handleError,

        complete: function() {
          setTimeout(function() {
            $this.prop("disabled", false); // Re-enable submit button when AJAX call is complete
          }, 1000);
        }
      });
    },
    filter: function() {
      return $(this).is(":visible");
    },
  });


  function handleError(msg){
    // Fail message
    msg = msg || "Sorry " + firstName + ", it seems that my mail server is not responding. Please try again later!";
    $('#quote-success').html("<div class='alert alert-danger'>");
    $('#quote-success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
      .append("</button>");
    $('#quote-success > .alert-danger').append($("<strong>").text(msg));
    $('#quote-success > .alert-danger').append('</div>');
    //clear all fields
    $('#quoteForm').trigger("reset");
  }

  $("a[data-toggle=\"tab\"]").click(function(e) {
    e.preventDefault();
    $(this).tab("show");
  });
});

/*When clicking on Full hide fail/success boxes */
$('#quote-name').focus(function() {
  $('#quote-success').html('');
});
