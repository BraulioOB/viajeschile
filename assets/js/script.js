// Smooth scroll
$(document).ready(function () {
    $(".nav-link").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 120, function () {
                window.location.hash = hash;
            });
        }
    });
});

// Muestra tooltip en el menu del navbar
$(document).ready(function () {
    $('[data-toggle="tooltip"]').tooltip();
});

// Muestra el componente toast despues de 3 segundos
setTimeout(function () {
    $("#liveToast").removeClass("hide");
    $('#liveToast').addClass("show");
}, 3000);

// Elimina el componente toast al hacer clic en cerrar
$("#closeAd").click(function () { 
    $("#liveToast").removeClass("show");
    $('#liveToast').addClass("hide");
});

// Funcion para añadir dinamicamente las img del modal
$(".card").click(function () {
    var img = this.getElementsByTagName("img");
    var src = $(img).attr("src");

    // Agrega la src correcta de las imagenes para cada card
    $("#modalBody").html(`
    <img id="modalContentImg" class="img-fluid mb-3" src="${src}"">
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, nesciunt cumque! Optio possimus suscipit mollitia, temporibus quaerat sit, quisquam sunt harum delectus maiores quas saepe, assumenda quo soluta incidunt autem.</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque maiores aperiam dolor! Non, omnis corporis, iusto, optio doloremque assumenda dolorem eaque dolorum adipisci id quia!</p>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, aperiam! Quod, cupiditate? Sequi veritatis tenetur, quas nemo qui vitae eum magnam non magni, modi sed perspiciatis aliquid at iure totam voluptas atque accusantium provident alias!</p>
   `);
});

// Cambia el background del navbar al pasar por ciertas coordenadas
$(document).on('scroll', function(){
    var a = $("#whoWeAre").offset().top;;

    if ( $(window).scrollTop() > a) {
        $('#viajes-chile-navbar').removeClass('bg-transparent');
        $('#viajes-chile-navbar').addClass('bg-dark');
    } else {
        $('#viajes-chile-navbar').removeClass('bg-dark');
        $('#viajes-chile-navbar').addClass('bg-transparent');
    }
});