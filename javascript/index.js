function changePage(location){
    window.location.href = location;
}

$(function(){
    $('.pickleCard').on('mouseenter', function(){
        $('.background').addClass('.pickleBGAnimate')
        $('.pickleCard').css("background-image", "none")
    })
    $('.pickleCard').on('mouseleave', function(){
        $('.background').css("background-image", "linear-gradient(0deg,rgba(255, 255, 255, 0) 58%,rgba(26, 98, 255, 0.4) 88%),url(./images/beach2.jpg)")
        $('.pickleCard').css("background-image", "url(./images/pickleballBG.jpg)")
    })
})