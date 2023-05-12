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


// 탭메뉴
var tab = $('.tab>li');
var content = $('.tab_con>div');

content.hide().eq(0).show();

//탭메뉴를 클릭 했을 때 해당 컨텐츠가 보여지도록~~

tab.click(function(e){
    e.preventDefault();

    var tg = $(this);
    var i = tg.index()      /* 선택 되어진 인덱스 번호가 i */

    // 활성화 된 버튼에 컬러주기
    tab.removeClass('active');
    tg.addClass("active");

    // 탭 메뉴에 클릭한 대상의 순번 i의 컨텐츠 영역만 보여지도록
    content.css("display", "none");
    content.eq(i).css("display", "block");



});


// 배너 바텀 텍스트 애니메이트
var slide1 = $('#swiperWrap>ul.imgWrap');

//.width()메서드는 선택한 요소의 너비를 반환
//.height()메서드는 선택한 요소의 높이를 반환
var slideListWidth1 = $('#swiperWrap>ul.imgWrap>li').width();

var setInterval01;

mainSlide1();

function mainSlide1() {
    setInterval01 = setInterval(function () {
        slide1.stop().animate({ left: -slideListWidth1 }, 1500, function () {
            $('ul.imgWrap>li:first').insertAfter('ul.imgWrap>li:last');
            slide1.css('left', 0);
        });
    }, 3000);
}

$('#swiperWrap>ul.imgWrap, .prev, .next').hover(function () {
    clearInterval(setInterval01);
}, function () {
    mainSlide1();
})


//오른쪽에서 왼쪽으로 이동
function next1() {
    slide1.stop().animate({ left: -slideListWidth1 }, 1500, function () {
        $('ul.imgWrap>li:first').insertAfter('ul.imgWrap>li:last');
        slide1.css('left', 0);
    })
}

//왼쪽에서 오른쪽으로 이동
function prev1() {
    $('ul.imgWrap>li:last').insertBefore('ul.imgWrap>li:first');
    slide1.css('left', -slideListWidth1);
    slide1.animate({ left: 0 }, 1500);
}

$('.prev').click(function () {
    prev1();
})
$('.next').click(function () {
    next1();
})

    
})