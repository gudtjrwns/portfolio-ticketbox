$(document).ready(function(){
    /////////////////////////////////////
    var arrY = [];
	var ty = 0;
	var cnt = 0;
    var old =0, current=0;
    var timerId=0, delay=3000;
	var h = $('#header').height();
    var arrL = ['모아보기', '공연', '뮤지컬', '콘서트', '페스티벌', '전시회', '체험'];
    
    
	for(var i = 0; i<=3; i++){
	   arrY[i] = $('#content'+i).offset().top;
        console.log(arrY[i]);
    }
    //높이값 구하기
    
    
	$(document).on('click','a[href="#"]',function(e){
		e.preventDefault();
	})
    //a링크 누르면 페이지 리로드 차단
    
	$('.bottom, #header h1').on('click',function(){
		$('html,body').animate({scrollTop:0},400);
	});
    //탑버튼 누르면 상단 올라가기
    
    $('.bottom').hide();
    $(window).on('scroll',function(){
        ty = $(window).scrollTop();
        if(ty>400){
//            $('.bottom').css('right','-40px').animate({right:0},400);
            $('.bottom').fadeIn(400);      
        }else{
//            $('.bottom').css('right',0).animate({right:'-40px'},400);            
            $('.bottom').fadeOut(400);
        }
    })
    $(window).trigger('scroll');
    //최상단일 때 탑버튼 감추기 
    
    
    
    //<!--gnb-->
    //gnb 네비
	$('#nav #gnb li').on('click',function(){
		cnt = $(this).index();
        if(cnt==0){
           $('html,body').animate({scrollTop:(arrY[cnt]-110)},600);
        }else{
           $('html,body').animate({scrollTop:(arrY[cnt]-110)},600);
        }
		return false;
	});
    
    //gnb 네비 클래스 붙이기
    $(window).on('scroll',function(){
		ty = $(window).scrollTop();
		for(var i=0; i<=3; i++){
            if(ty>=(arrY[i]-500)){
                $('#nav #gnb li').removeClass('on');
				$('#nav #gnb li').eq(i).addClass('on');
			}
		}
    });
    //<!--gnb-->
    
    
    //<!--menu-->
    //login
    $('#header .menu .login').on('click',function(){
        alert("로그인");
    });
    
    //search
    $('#header .menu .search').on('click',function(){
        alert("서치");
    });
    //<!--menu-->
    
    
    
    //<!--메인 배너-->
    //왼쪽 버튼 클릭시
    $('.btn.prev').on('click',function(){
        current--;
        if(current<0){current=$('.main-banner .images li').length-1;}
        $('.main-banner .images li').eq(old).css({left:0}).animate({left:'100%'},600).delay();
        $('.main-banner .images li').eq(current).css({left:'-100%'}).animate({left:0},600).delay();
        $('.main-banner .paging li').removeClass();
        $('.main-banner .paging li').eq(current).addClass('on');
        old = current;
        clearInterval(timerId);
        timerId = setInterval(make,delay);
    });
    
    //오른쪽 버튼 클릭시
    $('.btn.next').on('click',function(){
        current++;
        if(current>=$('.main-banner .images li').length){current=0;}
        $('.main-banner .images li').eq(old).css({left:0}).animate({left:'-100%'},600).delay();
        $('.main-banner .images li').eq(current).css({left:'100%'}).animate({left:0},600).delay();
        $('.main-banner .paging li').removeClass();
        $('.main-banner .paging li').eq(current).addClass('on');
        old = current;
        clearInterval(timerId);
        timerId = setInterval(make,delay);
    });
    
    //페이징 버튼 클릭시
    $('.main-banner .paging li').on('click',function(){
        current = $(this).index();
        if(current!=old){
            $('.main-banner .images li').eq(old).css({left:0}).animate({left:'-100%'},600);
            $('.main-banner .images li').eq(current).css({left:'100%'}).animate({left:0},600);
            $('.main-banner .paging li').removeClass();
            $('.main-banner .paging li').eq(current).addClass('on');
        }
        old = current;
        clearInterval(timerId);
        timerId = setInterval(make,delay);
    });
    
    //타이머
    timerId = setInterval(make,delay);
    function make(){
        current++;
        if(current>=$('.main-banner .images li').length){current=0;}
        $('.main-banner .images li').eq(old).css({left:0}).animate({left:'-100%'},600);
        $('.main-banner .images li').eq(current).css({left:'100%'}).animate({left:0},600);
        $('.main-banner .paging li').removeClass();
        $('.main-banner .paging li').eq(current).addClass('on');
        old = current;
    };
    
    //마우스 호버시
    $('.main-banner').hover(function(){
        clearInterval(timerId);
    },function(){
        timerId = setInterval(make,delay);
    });
    //<!--메인 배너-->
   
    
    //<!--서비스 에이젝스 메뉴-->    
    $('.service .list-box li').on('click',function(){
        var cnt = $(this).index();
        $('.detail-box').load(arrL[cnt]+'.html');
        $('.service .list-box li').removeClass();
        $('.service .list-box li').eq(cnt).addClass('on');
    });
    //<!--서비스 에이젝스 메뉴-->
    
    
    
    //<!--폭 1200px 이하일 때, 드랍다운 메뉴-->
    $('#nav .dd-menu').on('click',function(){
        $(this).toggleClass('on');
        if($(this).hasClass('on')){
            $('#header').css('height','70px').animate({height:'275px'});
            $('#gnb, #header .menu').fadeIn();
        }else{
            $('#header').css('height','275px').animate({height:'70px'});
            $('#gnb, #header .menu').fadeOut();
        }
    });
    //<!--폭 1200px 이하일 때, 드랍다운 메뉴-->  

    
    //<!--공지사항 아코디언 메뉴-->
    $('.notice dd').hide().first().show();
        $('.notice dt').on('click',function(){
            $(this).next().slideToggle().siblings('dd').slideUp();
            $('.notice dt').not(this).removeClass('on');
            $(this).toggleClass('on');
        });
//    $("body").on("mousewheel", function (event) { console.log(event.originalEvent.wheelDelta); });
    //<!--공지사항 아코디언 메뉴-->
    
    

    ///////////////////////////////////////
})