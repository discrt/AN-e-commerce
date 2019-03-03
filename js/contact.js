$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                subject: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 5
                },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                subject: {
                    required: "come on, you have a subject, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "come on, you have a number, don't you?",
                    minlength: "your Number must consist of at least 5 characters"
                },
                email: {
                    required: "no email, no message"
                },
                message: {
                    required: "um...yea, you have to write something to send this form.",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })

    //Validate Billing Form
    $(function() {
        $('#billingForm').validate({
            rules: {
                fname: {
                    required: true,
                    minlength: 1
                },
                lname: {
                    required: true,
                    minlength: 1
                },
                number: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                address: {
                    required: true,
                    minlength: 3
                },
                city: {
                    required: true,
                    minlength: 2
                },
                zip: {
                    required: true,
                    minlength: 6
                }
            },
            messages: {
                fname: {
                    required: "Enter Your First Name?",
                    minlength: "Your First name must consist of at least 1 characters"
                },
                lname: {
                    required: "Enter Your Last Name?",
                    minlength: "Your Last name must consist of at least 1 characters"
                },
                number: {
                    required: "Enter your phone number?",
                    minlength: "Please enter a valid phone number"
                },
                email: {
                    required: "Please enter a valid email address"
                },
                address: {
                    required: "Please enter your customer's shipping address",
                    minlength: "Enter a valid address"
                },
                city: {
                    required: "Please enter your customer's city",
                    minlength: "Enter a valid city name"
                },
                zip: {
                    required: "Please enter your customer's zip code",
                    minlength: "Enter a valid ZIP code"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"example.php",
                    success: function() {
                        $('##billingForm :input').attr('disabled', 'disabled');
                        $('##billingForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('##billingForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})