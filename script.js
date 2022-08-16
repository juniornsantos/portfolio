$(document).ready(function(){
    $(window).scroll(function(){
        // barra de navegação no script de rolagem
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // botão de rolagem mostrar/ocultar script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removendo a rolagem suavemente ao clicar no botão
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // aplicando novamente a rolagem suave
        $('html').css("scrollBehavior", "smooth");
    });

    // alternar menu/barra de navegação
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // animação de texto
    var typed = new Typed(".typing", {
        strings: ["Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Software Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // animação carroceu projetos
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});


//enviar whatsApp
function sendWhatsApp () {
    
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var url = "https://wa.me/5588998686890?text=" 
    + "Name: " + name + "%0a"
    + "Telefone: " + phone + "%0a"
    + "Email: " + email  + "%0a"
    + "Mensagem: " + message; 

    window.open(url, '_blank').focus();
}
