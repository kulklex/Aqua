$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

function booking() {
    const nameValue =$("#fullName").val()
    const emailValue =$("#email").val()
    const eventValue =$("#event").val()
    // const commentsValue =$("#comments").val()

    if(nameValue === "" || emailValue === "" || eventValue === "") {
        alert("Boxes marked * are important!")
    } else {
        alert("Booking Made!")
    }
}