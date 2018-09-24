var SVGsToInject = document.querySelectorAll('.svg-sprite');
SVGInjector(SVGsToInject);

//selectors
var navMenu = 'desktop-nav';
var navigationTitles;
var navDropdownTitles;
var navInnerNav;
var prevNav = null;
var currNav = null;

var screenSmall = 576;
var screenMedium = 768;
var screenLarge = 992;
var screenExtraLarge = 1200;
var screenOrientation;
var screenWidth, prevScreenWidth, screenHeight, prevScreenHeight;

var mobile = false;
var mobilePortrait = false;
var mobileLandscape = false;
var screenResizeCount = 0;
var resizeId;

$(document).ready(function() {
    console.log("document ready");
    screenWidth = $(window).width();
    screenHeight = $(window).height();
    prevScreenWidth = screenWidth;

    (screenWidth > screenHeight) ? screenOrientation = "landscape" : screenOrientation = "portrait";

    (screenOrientation == "landscape" && screenHeight < screenSmall) ? mobileLandscape = true : mobileLandscape = false;

    (screenOrientation == "portrait" && screenWidth < screenSmall) ? mobilePortrait = true : mobilePortrait = false;

    (mobileLandscape || mobilePortrait) ? mobile = true : mobile = false;

    setupPage();
});

$( window ).resize(function() {

    screenWidth = $(window).width();
    screenHeight = $(window).height();
    (screenWidth > screenSmall) ? mobile = false : mobile = true;
 
    if(!mobile && screenWidth != prevScreenWidth){
        clearTimeout(resizeId);
        resizeId = setTimeout(function(){
            screenResizeCount += 1;
            screenWidth = window.outerWidth;
            screenHeight = window.outerHeight;
            setupPage();
        }, 1000);
    }
    if(mobile && screenResizeCount > 0){
        setupPage();
    }
});

$(document).mouseup(function (e) {
    //console.log("document.mouseup function: "+$('#'+navMenu).find(e.target).length);
    console.log('currNav: '+currNav);
    console.log('prevNav: '+prevNav);
    if(!$('#'+navMenu).find(e.target).length == 1){
        openCloseNav();
        currNav = null;
        prevNav = null;
    }
});

function setupPage(){
    if(!mobile){

        $('[data-toggle="popover"]').popover({
            placement : 'left',
            trigger : 'hover',
            container: 'body'
        });

        $('.mobile').css('display', 'none');
        $('.desktop').css('display', 'block');

        // startNavAnimations();
        // if('os-container'){
        //     startOpeningScene();
        // }else{
        //     startNavAnimations();
        // }
        //startNavAnimations();
        startOpeningScene();
        
    }
}

function startOpeningScene(){

    setTimeout(function(){
        $('.os-container #clipping').addClass('active');
        $('.os-container #sheen').addClass('hide');
    }, 1000);
    setTimeout(function(){
        // $('.os-container #message').each(function(){
        //     $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
        // });
        $('.os-container #message').css('opacity', '1');
        $('.os-container #message .word').css('display', 'inline-block');
        $('.os-container #final').addClass('hide');
        $('.os-container #mask').addClass('hide');
        TweenMax.staggerFromTo($('.os-container #message .word'), 0.5, 
            {transform: 'translateY(10px)', opacity: 0}, 
            {transform: 'translateY(0px)', opacity: 1} ,.15);
        $('.os-container #final').addClass('hide');
        $('.os-container #mask').addClass('hide');    
    }, 5000);
    setTimeout(function(){
        $('#message').addClass('animate');
        var osAnimation = new TimelineMax();
        osAnimation.add(TweenMax.to($('.os-container'), 2, {width: '50vw', transform: 'translateX(50vw)'}));
        osAnimation.add(TweenMax.to($('.os-container #final-scene'), 2, {'background-size':'168.5%'}), '-=2');
        osAnimation.add(TweenMax.to($('.os-container #final-scene'), 3.5, {'background-position-x':'70%'}), '-=3.5');
        osAnimation.add(TweenMax.to($('.os-container #message'), .5, {opacity:0}), '-=4');
        osAnimation.play();

        //var osAnimationComplete = osAnimation.eventCallback("onComplete");
        osAnimation.eventCallback("onComplete", function(){
            
            $('body').addClass('opening-done');
            console.log("---animation done-------");
            startNavAnimations();
        }); //sets the onComplete
    }, 7500)

    //startNavAnimations();
}

function startNavAnimations(){

    navigationTitles = $('#desktop-nav .nav-title');
    navDropdownTitles = $('#desktop-nav .nav-dropdown.nav-title');
    navInnerNav = '.inner-nav > a';

    // if($('body').hasClass('opening-done')){
    //     TweenMax.staggerFromTo(navigationTitles, 0.5, 
    //         {transform: 'translateX(50px)', opacity: 0}, 
    //         {transform: 'translateX(0px)', opacity: 1} ,.15); 
    
    //     navDropdownTitles.click(function(){
    //         currNav = '#'+$(this).attr('id');
    //         navState = $(currNav + ' ' + navInnerNav).data('state');
    
    //         openCloseNav();
    //     });
    // }
    TweenMax.to($('.main-container'), 1, {opacity: 1}).delay(2);
    TweenMax.staggerFromTo(navigationTitles, 0.5, 
        {transform: 'translateX(50px)', opacity: 0}, 
        {transform: 'translateX(0px)', opacity: 1} ,.15); 

    navDropdownTitles.click(function(){
        currNav = '#'+$(this).attr('id');
        navState = $(currNav + ' ' + navInnerNav).data('state');

        openCloseNav();
    });
    
}

function openCloseNav(){
    $(currNav + ' ' + navInnerNav).popover('hide');
    $(currNav + ' ' + navInnerNav).popover('disable');

    var dropdownOpen = new TimelineMax(),
    dropdownOpenItem = $(currNav + ' .nav-dropdown .nav-dropdown-item');

    var dropdownClose = new TimelineMax(),
    dropdownCloseItem = $(prevNav + ' .nav-dropdown .nav-dropdown-item');

    dropdownOpen.add(TweenMax.fromTo($(currNav), 0.3, { transform: 'translateX(0px)' }, { transform: 'translateX(-170px)', ease: 'ease' }));
    dropdownOpen.add(TweenMax.staggerFromTo($(dropdownOpenItem), 0.5, {transform: 'translateX(10px)', opacity: 0}, {transform: 'translateX(0px)', opacity: 1} ,.15));

    dropdownClose.add(TweenMax.fromTo($(prevNav), 0.3, { transform: 'translateX(0px)' }, { transform: 'translateX(-170px)', ease: 'ease' }));
    dropdownClose.add(TweenMax.staggerFromTo($(dropdownCloseItem), 0.5, {transform: 'translateX(10px)', opacity: 0}, {transform: 'translateX(0px)', opacity: 1} ,.15));

    dropdownOpen.pause();
    dropdownClose.pause();

    if(prevNav == currNav){
        dropdownOpen.reverse(0);
        $(currNav + ' ' + navInnerNav).data('state', 'closed');
        $(currNav + ' ' + navInnerNav).popover('enable');
        $('.popover').css('display', 'block');
        currNav = null;
        prevNav = null;
    }else{
        if(prevNav != null){
            if($(prevNav + ' ' + navInnerNav).data('state') == 'open'){
                dropdownClose.reverse(0);
            }
            dropdownOpen.delay(1).play();
            $(currNav + ' ' + navInnerNav).data('state', 'open');
            $(prevNav + ' ' + navInnerNav).data('state', 'closed');
            $(prevNav + ' ' + navInnerNav).popover('enable');
            $('.popover').css('display', 'block');
        }else{
            dropdownOpen.play();
            $(currNav + ' ' + navInnerNav).data('state', 'open');
        }
        prevNav = currNav;
    }
}

function animateTitle(){
    console.log('inside animateTitle')
    TweenLite.to('.section-headline', 1, {text:{value:"Your new text", oldClass:"class1", newClass:"class2", delimiter:" "}});
}
 