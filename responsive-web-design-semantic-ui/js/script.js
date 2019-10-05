$(document).ready(function(){
    $('.special.cards .image').dimmer({
        on:'hover'
    })

   $('.ui.sidebar')
    .sidebar('attach events','.toc.item') 

    $('#card-one').click(function(){
        $('.ui.tiny.modal.modal1').modal('toggle')
    })
    $('#card-two').click(function(){
        $('.ui.tiny.modal.modal2').modal('toggle')
    })
    $('#card-three').click(function(){
        $('.ui.tiny.modal.modal3').modal('toggle')
    })
    $('#card-four').click(function(){
        $('.ui.tiny.modal.modal4').modal('toggle')
    })
    $('#card-five').click(function(){
        $('.ui.tiny.modal.modal5').modal('toggle')
    })
    $('#card-six').click(function(){
        $('.ui.tiny.modal.modal6').modal('toggle')
    })
    

})