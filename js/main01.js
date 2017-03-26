/** ===================================================================
 *  * Created by htp on 2016/8/9.
 * ���ļ�Ϊ��վjs����
 *  01. ����������
 *  02. aboutme����
 *  03. skills����
 *  04. portfolio��Ʒ����
 *  05. footer��Ʒ����
 *
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
            defAnimation   : "  ",
            scrollDuration : 800,
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
        if( $("#navbar").hasClass("in")){
            $("#navbar").removeClass("in")
        }

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

//jquery.cslider�ֲ������ʹ��
    $('#da-slider').cslider({
        autoplay	: true,           //�Զ�����
        bgincrement	: 1000            //ѭ��ʱ��
    });
/** ===================================================================
 *  02. aboutme����
 *
 * ------------------------------------------------------------------- */
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



/** ===================================================================
 *  03. skills����
 *
 * ------------------------------------------------------------------- */
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


    //    mobile��Ч��
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
    //skills pc��Ҳ�ƶ�����Ϊ����

    //ԲȦ���ֶ���Ч����ʼ
    /* Chart numbers absolute centering */

    var chart = $('.chart'),
        chartNr = $('.chart-content'),
        chartParent = chart.parent();

    function centerChartsNr() {

        chartNr.css({
            top: (chart.height() - chartNr.outerHeight()) / 2
        });

    }
    //canvas����
    /* Chart numbers absolute centering */

    var chart = $('.chart'),
        chartNr = $('.chart-content'),
        chartParent = chart.parent();

    function centerChartsNr() {

        chartNr.css({
            top: (chart.height() - chartNr.outerHeight()) / 2
        });

    }

    if (chart.length) {

        centerChartsNr();
        $(window).resize(centerChartsNr);

        chartParent.each(function () {

            $(this).onScreen({
                doIn: function () {
                    $(this).find('.chart').easyPieChart({
                        scaleColor: false,
                        lineWidth: 12,
                        size: 178,
                        trackColor: false,
                        lineCap: 'square',
                        animate: 2000,
                        onStep: function (from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                    });
                },
            });

            $(this).find('.chart').wrapAll('<div class="centertxt" /></div>');

        });

    }

/** ===================================================================
 *  04. portfolio��Ʒ����
 *
 * ------------------------------------------------------------------- */
//ͼƬɸѡ���isotope
    if($('.isotopeWrapper').length){
        var $container = $('.isotopeWrapper');
        var $resize = $('.isotopeWrapper').attr('id');
        // initialize isotope
        $container.isotope({
            itemSelector: '.isotopeItem',
            resizable: false, // disable normal resizing
            masonry: {
                columnWidth: $container.width() / $resize
            }

        });
        $('#filter a').click(function(){
            $('#filter a').removeClass('current');
            $(this).addClass('current');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
            });
            return false;
        });
        $(window).smartresize(function(){
            $container.isotope({
                // update columnWidth to a percentage of container width
                masonry: {
                    columnWidth: $container.width() / $resize
                }
            });
        });
    }

//lightGallery����������
    $('.portfolio-items').lightGallery({
        showThumbByDefault: true,
        hash: false,
        selector: ".portfolio-item" ,
        autoplayControls:false,
        actualSize:false,
        scale:0.7,
        mode:'lg-rotate-rev'
    });


/** ===================================================================
 *  05. footer��Ʒ����
 *
 * ------------------------------------------------------------------- */
    //���ض���
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1200);
    });
    $("#toTop").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:0},1200);
    });
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 500) {
            $("#toTop").css("opacity","1");
        } else {
            $("#toTop").css("opacity","0");
        }
    });


})(jQuery);






