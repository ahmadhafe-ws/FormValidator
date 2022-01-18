$(document).ready(function () {

    //Hide the After Registration Form
    var AfterRegistration = document.getElementById("AfterRegistration");
    AfterRegistration.style.display = "none";


    $('#contact_form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2,
                    },
                    notEmpty: {
                        message: 'Please enter your Name'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'Please enter your Email Address'
                    },
                    emailAddress: {
                        message: 'Please enter a valid Email Address'
                    }
                }
            },
            password: {
                validators: {
                    stringLength: {
                        min: 8,
                    },
                    notEmpty: {
                        message: 'Please enter your Password'
                    }
                }
            },
            role: {
                validators: {
                    notEmpty: {
                        message: 'Please select your role'
                    }
                }
            },
            system: {
                validators: {
                    notEmpty: {
                        message: 'Please select your your system'
                    }
                }
            },

        }
    })
    $(document).ready(function () {
        $('#password').keyup(function () {
            var password = $('#password').val();
            if (checkStrength(password) == false) {
                $('#sign-up').attr('disabled', true);
            }
        });

        function checkStrength(password) {
            var strength = 0;

            //If password contains both lower and uppercase characters, increase strength value.
            if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
                strength += 1;
                $('.low-upper-case').addClass('text-success');
                $('.low-upper-case i').removeClass('fa-file-text').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.low-upper-case').removeClass('text-success');
                $('.low-upper-case i').addClass('fa-file-text').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            //If it has numbers and characters, increase strength value.
            if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/)) {
                strength += 1;
                $('.one-number').addClass('text-success');
                $('.one-number i').removeClass('fa-file-text').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.one-number').removeClass('text-success');
                $('.one-number i').addClass('fa-file-text').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            //If it has one special character, increase strength value.
            if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
                strength += 1;
                $('.one-special-char').addClass('text-success');
                $('.one-special-char i').removeClass('fa-file-text').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.one-special-char').removeClass('text-success');
                $('.one-special-char i').addClass('fa-file-text').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            if (password.length > 7) {
                strength += 1;
                $('.eight-character').addClass('text-success');
                $('.eight-character i').removeClass('fa-file-text').addClass('fa-check');
                $('#popover-password-top').addClass('hide');

            } else {
                $('.eight-character').removeClass('text-success');
                $('.eight-character i').addClass('fa-file-text').removeClass('fa-check');
                $('#popover-password-top').removeClass('hide');
            }

            // If value is less than 2

            if (strength < 2) {
                $('#result').removeClass()
                $('#password-strength').addClass('progress-bar-danger');

                $('#result').addClass('text-danger').text('Week');
                $('#password-strength').css('width', '10%');
            } else if (strength == 2) {
                $('#result').addClass('good');
                $('#password-strength').removeClass('progress-bar-danger');
                $('#password-strength').addClass('progress-bar-warning');
                $('#result').addClass('text-warning').text('Medium')
                $('#password-strength').css('width', '60%');
                return 'Medium'
            } else if (strength == 4) {
                $('#result').removeClass()
                $('#result').addClass('strong');
                $('#password-strength').removeClass('progress-bar-warning');
                $('#password-strength').addClass('progress-bar-success');
                $('#result').addClass('text-success').text('Strength');
                $('#password-strength').css('width', '100%');

                return 'Strong'
            }

        }

    });


    document.getElementById("SignUpButton").onclick = function () {

        if ($('#contact_form').bootstrapValidator('validate').has('.has-error').length) {
            //alert('SOMETHING WRONG');
        } else {
            document.querySelector('form').submit()
            //$('#contact-form input[type="text"]').val('');
            //$('#contact-form').reset();
            //document.getElementById("contact-form").reset();
            //var AfterRegistration = document.getElementById("AfterRegistration");
            //AfterRegistration.style.display = "none";
            //$('#contact-form')[0].reset();
            //document.getElementById("contact-form").reset()
            //document.getElementsByClassName("input-group-addon").body.style.background='#f90';
           //$('contact-form').get(0).reset()

            var name = document.getElementById("get-name").value;
            var email = document.getElementById("email").value;
            var password = document.getElementById("password").value;
            var role = document.getElementById("role").value;
            var system = document.getElementsByName('system');
            var system_value;
            for (var i = 0; i < system.length; i++) {
                if (system[i].checked) {
                    system_value = system[i].value;
                }
            }
            var affiliationcheckedValue = '';
            var inputElements = document.getElementsByClassName('affiliation');
            for (var i = 0; inputElements[i]; ++i) {
                if (inputElements[i].checked) {
                    affiliationcheckedValue += inputElements[i].value;
                }
                if (i != 0) affiliationcheckedValue += '<br>'
            }
           
            document.getElementById("nameAfterReg").innerHTML = name;
            document.getElementById("emailAfterReg").innerHTML = email;
            document.getElementById("PassAfterReg").innerHTML = password;
            document.getElementById("RoleAfterReg").innerHTML = role;
            document.getElementById("SystemAfterReg").innerHTML = system_value;
            document.getElementById("AffilitionAfterReg").innerHTML = affiliationcheckedValue;

            //Show after Registration form
            AfterRegistration.style.display = "block";

            document.getElementById("get-name").value = '';
            document.getElementById("email").value = '';
            document.getElementById("password").value = '';

            $('#role').get(0).selectedIndex = 0;
            $('input[name=system]').attr('checked', false);
            $('input:checkbox').removeAttr('checked');
        }

       
    }
    
   

}); 


function resetForm($form) {
    //$('.form-control-feedback glyphicon glyphicon-ok').remove();
    //document.querySelectorAll(".form-control-feedback glyphicon glyphicon-ok").forEach(el => el.style.visibility = 'hidden');
    //var cc = document.querySelectorAll(".form-control-feedback glyphicon glyphicon-ok")
    //console.log(cc)
    //document.querySelectorAll(".form-control-feedback glyphicon glyphicon-ok").forEach(element => element.style.visibility = 'hidden');
    /** */
    //console.log("ssds")
    document.getElementsByClassName('form-control-feedback glyphicon glyphicon-ok')[0].style.visibility = 'hidden';
    document.getElementsByClassName('input-group-addon')[0].style.visibility = 'hidden';
    
    
    
    document.getElementsByClassName('form-control-feedback glyphicon glyphicon-ok')[1].style.visibility = 'hidden';
    document.getElementsByClassName('form-control-feedback glyphicon glyphicon-ok')[2].style.visibility = 'hidden';
    document.getElementsByClassName('form-control-feedback glyphicon glyphicon-ok')[3].style.visibility = 'hidden';
    document.getElementsByClassName('form-control-feedback glyphicon glyphicon-ok')[4].style.visibility = 'hidden';


    document.getElementById('password-strength').style.visibility = 'hidden';

    
    $form.find('input:text, input:password, input:file, select, textarea').val('');
    $form.find('input:radio, input:checkbox')
         .removeAttr('checked').removeAttr('selected');
}