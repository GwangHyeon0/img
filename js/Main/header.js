$(function(){
    $('.ani_box').toggle(function(){
        //햄버거버튼을 x로 변경
        $('.ani_box').addClass('act');
    }, function(){
        //x를 햄버거 버튼으로 변경
        $('.ani_box').removeClass('act');
    })


    $('.gnb').click(function(){
        $(this).find('.banner_gnb ul').stop().slideDown();
    })

    $('.gnb').mouseleave(function(){
        $(this).find('.banner_gnb ul').stop().slideUp();
    })





    
})