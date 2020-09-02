// Declarando ----- Deja de ver mi codigo pedazo de sapo //
API = 'https://grado100mil.000webhostapp.com/vendor/mails/API.php';
path_vw = 'views/';
path_img = './assets/images/'
path_iProd = 'assets/images/productos/'
// ===============================================================


/* ========= TROZO CODIGO ===============*/
$(document).ready(function () {
    $('body').on('click', '#SELECTORRR', function () {
        //AQUI TODA LA LOGICA

    });
});


/* ========= CATALOGO ===============*/
$(document).ready(function () {
    $('body').on('click', '.vw_catalogo', function (event) {
        event.preventDefault();
        $.post(tpl('vw_catalogo'), function (data) {
            $("#resp").html(data);
        }).done(function () {
            //console.log("Done OK");
        }).fail(function () {
            alert("No ha sido posible comunicar con el servidor");
        })
    });
});


$(document).ready(function () {
    $('.i_want_this_button').html('Lo quiero');

});





/* ========= onLOAD ===============*/
$(document).ready(function () {
    $('.vw_header').load(tpl('vw_header'));
    $('.vw_about').load(tpl('vw_about'));
    $('.vw_slides').load(tpl('vw_slides'), function (data, status, jqXGR) {  // callback function 
        $('#slides').superslides({
            inherit_width_from: '.cover-slides',
            inherit_height_from: '.cover-slides',
            play: 5000,
            animation: 'fade',
        });
        $(".cover-slides ul li").append("<div class='overlay-background'></div>");

    }); //end view slides
    $('.vw_productos').load(tpl('vue_productos'));
    $('.vw_frases').load(tpl('vw_frases'));
    $('.vw_gallery').load(tpl('vw_gallery'), function () {  // callback function 
        baguetteBox.run('.tz-gallery', {
            animation: 'fadeIn',
            noScrollbars: true
        });
    }); //end view slides
    $('.vw_contact').load(tpl('vw_contact'));
    $('.vw_footer').load(tpl('vw_footer'));
    //$('.catalogo_productos').load(tpl('PRUEBA'));

//    $('.vw_pre_footer').load(tpl('vw_pre_footer'));
//    $('.vw_footer').load(tpl('vw_footer'));
//    $('.vw_contacto').load(tpl('vw_contacto'));
//    $('.vw_servicios').load(tpl('vw_servicios'));
//    $('.vw_shop').load(tpl('vw_shop'));
//    
//    $('.vw_about').load("views/vw_about_team.html").remove();
//        $('.vw_video').load("views/vw_video.html").remove();
//    $('.vw_testimonio').load("views/vw_testimonio.html").remove();
//    $('.vw_encuesta').load("views/vw_encuesta.html").remove();
//    $('.vw_listPrecio').load("views/vw_listPrecio.html").remove();
//console_clear();
});
$(function () {
    $('#WAButton').floatingWhatsApp({
        phone: '573178170581',
        headerTitle: 'Chatea con nosotros!',
        popupMessage: 'Hola, como puedo ayudarte?',
        showPopup: true, //PopUp activo
        buttonImage: '<img src="https://rawcdn.githack.com/rafaelbotazini/floating-whatsapp/3d18b26d5c7d430a1ab0b664f8ca6b69014aed68/whatsapp.svg" />', //Button Image
        //headerColor: 'crimson', //Custom header color
        //backgroundColor: 'crimson', //Custom background button color
        position: "rigth"
    });
});

/* ========= Envio email website ===============*/
$(document).ready(function () {
    $('body').on('click', '#enviar_email', function () {
        $(this.id).prop('disabled', true);
        nombre = $('#cname').val();
        email = $('#cemail').val();
        msg = $('#cmessage').val();
        ////$("#contactForm").validate();
        $("#contactForm").validate({
            event: "blur", rules: {'cname': "required", 'cemail': "required email", 'cmessage': "required"},
            messages: {'cname': " Por favor indica tu nombre", 'cemail': " Por favor, indica una direcci&oacute;n de e-mail v&aacute;lida", 'cmessage': " Por favor, dime algo!"},
            debug: true, errorElement: "label",
            submitHandler: function (form) {
                //$("#alert").show();
                //$("#alert").html("<img src='images/ajax-loader.gif' style='vertical-align:middle;margin:0 10px 0 0' /><strong>Enviando mensaje...</strong>");
                //setTimeout(function () {
                //$('#alert').fadeOut('slow');
                //}, 5000);

                setTimeout(function () {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Tu correo ha sido enviado.',
                        showConfirmButton: false,
                        timer: 6000
                    })
                }, 3000);

                $.ajax({
                    type: 'POST',
                    url: API,
                    async: true,
                    data: {nombre: nombre, email: email, message: msg},
                    //dataType: 'jsonp',
                    //contentType: 'application/json',
                    //responseType: 'application/json',
                    success: function (data) {
                        console.log(data);
                        $(this.id).prop('disabled', false);

                    },
                    error: function (error) {
                        $(this.id).prop('disabled', false);
                        console.log(error);
                    }
                });

            }
        });
    });
});

/* ========= FILTRAR PRODUCTOS  ===============*/
$(document).ready(function () {
    $('body').on('click', '[data-toggle="pill"]', function () {
        id = this.id; categoria = $(this).attr('categoria');
        
        if(categoria == "all"){
            $('div[data-categoria]').fadeIn(300).show();
        }else{
            $.when($('div[data-categoria]').hide()).then(function(){
                $('div[data-categoria="'+categoria+'"]').fadeIn(300).show();
            });
        }
    });
});


function console_clear() {
    console.API;

    if (typeof console._commandLineAPI !== 'undefined') {
        console.API = console._commandLineAPI; //chrome
    } else if (typeof console._inspectorCommandLineAPI !== 'undefined') {
        console.API = console._inspectorCommandLineAPI; //Safari
    } else if (typeof console.clear !== 'undefined') {
        console.API = console;
    }

    console.API.clear();
}

function tpl(data, ext = 'html') {
    return path_vw + data + "." + ext;
}
