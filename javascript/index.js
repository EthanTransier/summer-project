$(function(){
    $('.pickleCard').on('mouseenter', function(){
        $('.beachBackground').css("opacity", "0")
        $('.pickleCard').css("opacity", "0")
        $('.pickleBackground').css("opacity", '1')
    })
    $('.pickleCard').on('mouseleave', function(){
        $('.beachBackground').css("opacity", "1")
        $('.pickleCard').css("opacity", "1")
        $('.pickleBackground').css("opacity", '0')
    })

    $('.crashCard').on('mouseenter', function(){
        $('.beachBackground').css("opacity", "0")
        $('.crashCard').css("opacity", "0")
        $('.crashBackground').css("opacity", '1')
        
    })
    $('.crashCard').on('mouseleave', function(){
        $('.beachBackground').css("opacity", "1")
        $('.crashCard').css("opacity", "1")
        $('.crashBackground').css("opacity", '0')
    })
})