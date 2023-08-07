function changePage(location){
    window.location.href = location;
}

$(function(){
    $('.pickleCard').on('mouseenter', function(){
        $('.background').addClass('pickleBGAnimate')
        $('.pickleCard').css("background-image", "none")
    })
    $('.pickleCard').on('mouseleave', function(){
        $('.background').removeClass('pickleBGAnimate')
        $('.pickleCard').css("background-image", "url(./images/pickleballBG.jpg)")
    })

    $('.crashCard').on('mouseenter', function(){
        $('.background').addClass('crashBGAnimate')
        $('.crashCard').css("background-image", "none")
    })
    $('.crashCard').on('mouseleave', function(){
        $('.background').removeClass('crashBGAnimate')
        $('.crashCard').css("background-image", "url(./images/sirens2.png)")
    })
})