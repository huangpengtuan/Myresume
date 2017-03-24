/** ===================================================================
 *  * Created by htp on 2017/3/9.
 * 此文件为网站js部分
 *  01. jquery-2.1.3.min
 *
 * ------------------------------------------------------------------- */

(function ($) {
/** ===================================================================
 *  01. 导航栏部分
 *
 * ------------------------------------------------------------------- */
"use strict";
//（严格模式）


    var cfg = {
            defAnimation   : "  ",    // default css animation
            scrollDuration : 800,           // scroll duration
            statsDuration  : 4000,           // stats animation duration
            skillsDuration : 500
        },
        $WIN = $(window);

    ///* 预加载
    // * -------------------------------------------------- */
    //
    $WIN.on('load', function() {

        // 页面刷新时强制页面滚动位置到顶部
        $('html, body').animate({ scrollTop: 0 }, 'normal');

        // 刷新时首先淡出加载动画
        $("#loader").fadeOut("slow", function(){
            // 将淡出整个覆盖网站的div
            $("#preloader").delay(200).fadeOut("slow");
        });

        //isotope（分类瀑布流里的图片）显示图片重置
        $("html,body").resize();


    });

//jQuery监听scroll，让导航栏变化
    var initTop = 0;
    $(window).scroll(function(e) {
        var scrollTop = $(document).scrollTop();
        if(scrollTop > initTop){
            $("#navigation-bar").addClass("top-nav-collapse");

        } else {
            $("#navigation-bar").removeClass("top-nav-collapse");
        }
        //if( $("#drop").hasClass("open")){
        //    $("#drop").removeClass("open")
        //}
        //if( $("#navbar").hasClass("in")){
        //    $("#navbar").removeClass("in")
        //}

        initTop = scrollTop;

    });



//根据锚点向下滚动动画
    $('.scroll').on('click',function(e){
        //获取锚点
        var target = this.hash,
            $target = $(target);            //target不是jquery对象，所以需要转换
        //阻止冒泡
        e.preventDefault();
        e.stopPropagation();
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, cfg.scrollDuration, 'swing').promise().done(function () {      //promise() 函数返回一个 Promise 对象，观察某种类型被绑定到集合的所有行动，是否已被加入到队列中，done（）成功时执行,异常时不会执行
            // check if menu is open
            window.location.hash = target;
        });
    })

//animate-this Animation 浮动动画
    $('.fadeHide').waypoint(function(direction) {
        $('.fadeHide').each(function (index) {
            var al=$(this);
            setTimeout(function () {
                al.removeClass('fadeHide');
                al.addClass('fadeInUp');
            },index*500);
        });


    },{offset:'50%'});


//jquery.cslider轮播插件的使用
    $('#da-slider').cslider({
        autoplay	: true,           //自动播放
        bgincrement	: 1000            //循环时间
    });

//skills相册效果js
    //    pc
    //box1
    $(".lest .box1").mouseover(function(event){
        $(".box1").stop(true,true).animate({width:"500px",height:"471px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"335px",height:"228px",left:"515px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"335px",height:"228px",left:"865px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"218px",height:"228px",left:"515px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"218px",height:"228px",left:"748px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"218px",height:"228px",left:"981px",top:"243px"},cfg.skillsDuration);
        event.stopPropagation();    //  阻止事件冒泡
    });
    $(".box1").mouseout(function(event){
        $(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},cfg.skillsDuration);
    });

    //box2
    $(".box2").mouseover(function(event){
        $(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"500px",height:"471px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"188px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"188px",height:"228px",left:"203px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"243px"},cfg.skillsDuration);
        event.stopPropagation();    //  阻止事件冒泡

    });
    $(".box2").mouseout(function(event){
        $(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},cfg.skillsDuration);
    });


    //box3
    $(".box3").mouseover(function(event){
        $(".box1").stop(true,true).animate({width:"335px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"335px",height:"228px",left:"350px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"500px",height:"471px",left:"700",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"218px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"218px",height:"228px",left:"233px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"218px",height:"228px",left:"466px",top:"243px"},cfg.skillsDuration);
        event.stopPropagation();    //  阻止事件冒泡

    });
    $(".box3").mouseout(function(event){
        $(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},cfg.skillsDuration);
    });
    //box4
    $(".lest .box4").mouseover(function(event){
        $(".box1").stop(true,true).animate({width:"218px",height:"228px",left:"515px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"218px",height:"228px",left:"748px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"218px",height:"228px",left:"981px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"500px",height:"471px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"335px",height:"228px",left:"515px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"335px",height:"228px",left:"865px",top:"243px"},cfg.skillsDuration);
        event.stopPropagation();    //  阻止事件冒泡
    });
    $(".box4").mouseout(function(event){
        $(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},cfg.skillsDuration);
    });


    //box5
    $(".box5").mouseover(function(event){
        $(".box1").stop(true,true).animate({width:"188px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"188px",height:"228px",left:"203px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"500px",height:"471px",left:"405px",top:"0px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"280px",height:"228px",left:"920px",top:"243px"},cfg.skillsDuration);
        event.stopPropagation();    //  阻止事件冒泡

    });
    $(".box5").mouseout(function(event){
        $(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},cfg.skillsDuration);
    });

    //box6
    $(".box6").mouseover(function(event){
        $(".box1").stop(true,true).animate({width:"218px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"218px",height:"228px",left:"233px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"218px",height:"228px",left:"466px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"335px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"335px",height:"228px",left:"350px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"500px",height:"471px",left:"700px",top:"0px"},cfg.skillsDuration);
        event.stopPropagation();    //  阻止事件冒泡
    });
    $(".box6").mouseout(function(event){
        $(".box1").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"0px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"390px",height:"228px",left:"0px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"390px",height:"228px",left:"405px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"390px",height:"228px",left:"810px",top:"243px"},cfg.skillsDuration);
    });


    //    mobile
    //边框效果--移入
    function biankuang(obj){
        $(obj).find('.biankuang_1').stop(true).animate({
            height:'100%'
        },300)
        $(obj).find('.biankuang_2').stop(true).delay(300).animate({
            width:'100%'
        },300)
        $(obj).find('.biankuang_3').stop(true).animate({
            height:'100%'
        },300)
        $(obj).find('.biankuang_4').stop(true).delay(300).animate({
            width:'100%'
        },300)
    }
//边框效果--移出
    function biankuang1(obj){

        $(obj).find('.biankuang_1').stop(true).delay(100).animate({
            height:'0px'
        },100)
        $(obj).find('.biankuang_2').stop(true).animate({
            width:'0px'
        },100)
        $(obj).find('.biankuang_3').stop(true).delay(100).animate({
            height:'0px'
        },100)
        $(obj).find('.biankuang_4').stop(true).animate({
            width:'0px'
        },100)
    }
//触发
    $('.spbq').hover(
        function () {
            var obj = $(this);
            biankuang(obj);
        },
        function () {
            var obj = $(this);
            biankuang1(obj);
        }
    )

})(jQuery);






