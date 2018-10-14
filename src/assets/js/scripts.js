var SVGsToInject = document.querySelectorAll('.svg-sprite');
SVGInjector(SVGsToInject);

//global
var desktopNavMenu = 'desktop-nav';
var mobileNavMenu = 'mobile-nav';
var navigationTitles;
var navDropdownTitles;
var navDropdowns;
var navDropDown;
var navDropDownHeights = [];
var navInnerNav;
var prevNav = null;
var currNav = null;
var dropdownOpen, dropdownClose, dropdownOpenItem, dropdownOpenItem;

var mobileNavTimeline = new TimelineMax();
var currNavHeight, prevNavHeight = 0;
var subItemCount = 0;
var currentTiming, previousTiming = 0;

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

function startOpeningScene(){

    setTimeout(function(){
        $('.os-container #clipping').addClass('active');
        $('.os-container #sheen').addClass('hide');
    }, 1000);
    setTimeout(function(){
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
        //$('#message').addClass('animate');
        var osAnimation = new TimelineMax();
        //osAnimation.add(TweenMax.to($('.os-container'), 2, {width: '50vw', transform: 'translateX(50vw)'}));
        //osAnimation.add(TweenMax.to($('.os-container #final-scene'), 2, {'background-size':'168.5%'}), '-=2');
        //osAnimation.add(TweenMax.to($('.os-container #final-scene'), 3.5, {'background-position-x':'70%'}), '-=3.5');
        //osAnimation.add(TweenMax.to($('.os-container #message'), .5, {opacity:0}), '-=2');
        osAnimation.add(TweenMax.to($('.os-container'), 1, {opacity:0}));
        osAnimation.play();

        osAnimation.eventCallback("onComplete", function(){
            $('body').addClass('opening-done');
            console.log("---animation done-------");
            startDesktopNavAnimations();
           $('.os-container').remove();
        }); //sets the onComplete
    }, 7500)

    //startNavAnimations();
}

$(document).mouseup(function (e) {
    //console.log("document.mouseup function: "+$('#'+navMenu).find(e.target).length);
    // console.log('currNav: '+currNav);
    // console.log('prevNav: '+prevNav);
    if(!mobile){
        if(!$('#'+desktopNavMenu).find(e.target).length == 1){
            openCloseDesktopNav();
            currNav = null;
            prevNav = null;
        }
        console.log('clicked desktop');
    }else{
        if(!$('#'+mobileNavMenu).find(e.target).length == 1){
            //resetMobielValues();
            if($('.nav-toggle').hasClass('active')){
                resetMobileNav();
            }
            console.log('clicked outside of mobile nav');
        }else{
            console.log('clicked inside of mobile nav')
        }
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
        
    }else{

        navigationTitles = $('#mobile-nav .nav-title');
        navDropdownTitles = $('#mobile-nav .nav-dropdown-li.nav-title');
        navDropdowns = $('#mobile-nav .nav-dropdown-li .nav-dropdown');
        navSidebar = $('#mobile-nav .sidebar');
        navDropDown = '.nav-dropdown';
        navInnerNav = '.inner-nav > a';

        navDropdowns.each(function (){
            var elementId = $(this).parent().parent().attr('id');
            var height = $(this).height();
            var subItems = $(this).children('.nav-dropdown-item').length;
            //console.log('elementId: '+elementId+', height: '+height+', subItems: '+subItems);
            navDropDownHeights.push({ id : elementId, height: height, subItems: subItems });
        });

        mobileNavTimeline.add(TweenMax).fromTo(navSidebar, 0.5, { transform: 'translateX(0vw)' }, { transform: 'translateX(60vw)' });
        mobileNavTimeline.add(TweenMax.staggerFromTo(navigationTitles, 0.5, 
            {transform: 'translateX(50px)', opacity: 0}, 
            {transform: 'translateX(0px)', opacity: 1} ,.15), '-=0.5');     

        mobileNavTimeline.pause();    
        
        $('.nav-toggle').on('click', function(e){
            $(this).toggleClass('active');
            if($(this).hasClass('active')){
                console.log('nav-toggle is active');

                startMobileNavAnimations();
                
            }else{
                console.log('nav-toggle is NOT active');
                resetMobileNav();
                
            }
            
        });
        
    }
}

function startMobileNavAnimations(){

    console.log("====================");
    console.log('inside startMobileNavAnimations()');
    console.log('currNav: '+currNav+', prevNav: '+prevNav);
    console.log('currenTiming: '+currentTiming+', previousTiming: '+previousTiming);
    console.log("====================");
    
    for(var i = 0; i<navDropDownHeights.length-1; i++){
        var item = navDropDownHeights[i].id;
        $('#'+item+' .nav-dropdown').css('height', '0px');
    }

    if(prevNav != null){
        console.log('prevNav: '+prevNav);
        var navItemId = navDropDownHeights.findIndex(x => x.id === $(prevNav).attr('id'));
        var navHeight = navDropDownHeights[navItemId].height;
        var navSubItems = navDropDownHeights[navItemId].subItems;
        $(prevNav+' .nav-dropdown').css('height', navHeight+'px');
        prevNavHeight = navHeight;
        previousTiming = parseFloat(0.15*navSubItems).toFixed(2);
    }

    mobileNavTimeline.play(0);

    navDropdownTitles.unbind().click(function(e){
        currNav = '#'+$(this).attr('id');
        navState = $(currNav + ' ' + navInnerNav).data('state');
        console.log('navState: '+navState);

        //console.log('currNav: '+currNav);

        var navItemId = navDropDownHeights.findIndex(x => x.id === $(this).attr('id'));
        console.log('navItemId: '+navItemId);
        var navHeight = navDropDownHeights[navItemId].height;
        console.log('navHeight: '+navHeight);
        var navSubItems = navDropDownHeights[navItemId].subItems;
        subItemCount = navSubItems;
        currNavHeight = navHeight;
        //console.log('height: '+navDropDownHeights[navItemId].height);
        // console.log('currNavHeight: '+navItemId);

        openCloseMobileNav();
        
    });
    
}

function openCloseMobileNav(){

    dropdownOpen = new TimelineMax(),
    dropdownOpenItem = $(currNav + ' .nav-dropdown .nav-dropdown-item');

    dropdownClose = new TimelineMax(),
    dropdownCloseItem = $(prevNav + ' .nav-dropdown .nav-dropdown-item');

    currentTiming = parseFloat(0.15*subItemCount).toFixed(2);

    // console.log("*****************");
    // console.log('curreNav: '+currNav+', prevNav: '+prevNav);
    // console.log('currenTiming: '+currentTiming+', previousTiming: '+previousTiming);
    // console.log('currNavHeight: '+currNavHeight+', prevNavHeight: '+prevNavHeight);
    // console.log("*****************");

    dropdownOpen.add(TweenMax.fromTo($(currNav+' '+navDropDown), currentTiming, { height:0, opacity:0 }, { height:currNavHeight, opacity:1 }));
    dropdownOpen.add(TweenMax.staggerFromTo($(dropdownOpenItem), 0.5, {transform: 'translateX(10px)', opacity: 0}, {transform: 'translateX(0px)', opacity: 1}, .15), '-='+currentTiming);

    dropdownClose.add(TweenMax.fromTo($(prevNav+' '+navDropDown), previousTiming, { height:0, opacity:0 }, { height:prevNavHeight, opacity:1 }));
    dropdownClose.add(TweenMax.staggerFromTo($(dropdownCloseItem), 0.5, {transform: 'translateX(10px)', opacity: 0}, {transform: 'translateX(0px)', opacity: 1}, .15), '-='+previousTiming);

    dropdownOpen.pause();
    dropdownClose.pause();

    if(prevNav == currNav){
        //resetMobileNav();
        dropdownOpen.reverse(0);
        $(currNav + ' ' + navInnerNav).data('state', 'closed');
        currNav = null;
        prevNav = null;
    }else{
        if(prevNav != null){
            if($(prevNav + ' ' + navInnerNav).data('state') == 'open'){
                dropdownClose.reverse(0);
                //resetMobileNav();
            }
            dropdownOpen.play(0);
            $(currNav + ' ' + navInnerNav).data('state', 'open');
            $(prevNav + ' ' + navInnerNav).data('state', 'closed');
        }else{
            dropdownOpen.play(0);
            $(currNav + ' ' + navInnerNav).data('state', 'open');
        }
        prevNav = currNav;
        previousTiming = currentTiming;
        prevNavHeight = currNavHeight;
    }

}

function resetMobileNav(){
    mobileNavTimeline.reverse(0);
    //dropdownOpen.reverse(0);
    navDropdownTitles.off('click');
    $('.nav-toggle').removeClass('active');
    $('svg.ham').removeClass('active');
}

function startDesktopNavAnimations(){

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

        openCloseDesktopNav();
    });
    
}

function openCloseDesktopNav(){
    $(currNav + ' ' + navInnerNav).popover('hide');
    $(currNav + ' ' + navInnerNav).popover('disable');

    dropdownOpen = new TimelineMax(),
    dropdownOpenItem = $(currNav + ' .nav-dropdown .nav-dropdown-item');

    dropdownClose = new TimelineMax(),
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
 