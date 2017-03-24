/** ===================================================================
 *  * Created by htp on 2017/3/9.
 * ���ļ�Ϊ��վjs����
 *  01. jquery-2.1.3.min
 *
 * ------------------------------------------------------------------- */

(function ($) {
/** ===================================================================
 *  01. ����������
 *
 * ------------------------------------------------------------------- */
"use strict";
//���ϸ�ģʽ��


    var cfg = {
            defAnimation   : "  ",    // default css animation
            scrollDuration : 800,           // scroll duration
            statsDuration  : 4000,           // stats animation duration
            skillsDuration : 500
        },
        $WIN = $(window);

    ///* Ԥ����
    // * -------------------------------------------------- */
    //
    $WIN.on('load', function() {

        // ҳ��ˢ��ʱǿ��ҳ�����λ�õ�����
        $('html, body').animate({ scrollTop: 0 }, 'normal');

        // ˢ��ʱ���ȵ������ض���
        $("#loader").fadeOut("slow", function(){
            // ����������������վ��div
            $("#preloader").delay(200).fadeOut("slow");
        });

        //isotope�������ٲ������ͼƬ����ʾͼƬ����
        $("html,body").resize();


    });

//jQuery����scroll���õ������仯
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



//����ê�����¹�������
    $('.scroll').on('click',function(e){
        //��ȡê��
        var target = this.hash,
            $target = $(target);            //target����jquery����������Ҫת��
        //��ֹð��
        e.preventDefault();
        e.stopPropagation();
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, cfg.scrollDuration, 'swing').promise().done(function () {      //promise() ��������һ�� Promise ���󣬹۲�ĳ�����ͱ��󶨵����ϵ������ж����Ƿ��ѱ����뵽�����У�done�����ɹ�ʱִ��,�쳣ʱ����ִ��
            // check if menu is open
            window.location.hash = target;
        });
    })

//animate-this Animation ��������
    $('.fadeHide').waypoint(function(direction) {
        $('.fadeHide').each(function (index) {
            var al=$(this);
            setTimeout(function () {
                al.removeClass('fadeHide');
                al.addClass('fadeInUp');
            },index*500);
        });


    },{offset:'50%'});


//jquery.cslider�ֲ������ʹ��
    $('#da-slider').cslider({
        autoplay	: true,           //�Զ�����
        bgincrement	: 1000            //ѭ��ʱ��
    });

//skills���Ч��js
    //    pc
    //box1
    $(".lest .box1").mouseover(function(event){
        $(".box1").stop(true,true).animate({width:"500px",height:"471px"},cfg.skillsDuration);
        $(".box2").stop(true,true).animate({width:"335px",height:"228px",left:"515px",top:"0px"},cfg.skillsDuration);
        $(".box3").stop(true,true).animate({width:"335px",height:"228px",left:"865px",top:"0px"},cfg.skillsDuration);
        $(".box4").stop(true,true).animate({width:"218px",height:"228px",left:"515px",top:"243px"},cfg.skillsDuration);
        $(".box5").stop(true,true).animate({width:"218px",height:"228px",left:"748px",top:"243px"},cfg.skillsDuration);
        $(".box6").stop(true,true).animate({width:"218px",height:"228px",left:"981px",top:"243px"},cfg.skillsDuration);
        event.stopPropagation();    //  ��ֹ�¼�ð��
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
        event.stopPropagation();    //  ��ֹ�¼�ð��

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
        event.stopPropagation();    //  ��ֹ�¼�ð��

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
        event.stopPropagation();    //  ��ֹ�¼�ð��
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
        event.stopPropagation();    //  ��ֹ�¼�ð��

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
        event.stopPropagation();    //  ��ֹ�¼�ð��
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
    //�߿�Ч��--����
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
//�߿�Ч��--�Ƴ�
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
//����
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






