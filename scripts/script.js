window.addEventListener('load', function() {

/*------------------------------ MY VARIABLES -------------------------------*/
//side nav variables
const burger = $('.burger');
const sideNav = $(".side-navabar");
const pageOverLay = $(".page-overlay");

//light box variables
// const appointmentButton = $(".appointment-button");
// const myModalBackdrop = $(".my-modal-backdrop");
// const modalContent = $(".modal-content");
// const modalClose1 = $("button.close span");
// const modalClose2 = $(".modal-footer .btn-secondary");

//department section variables
const openCard = $(".open-card");
const departmentCard = $(".department-card");

//doctors section variables
const doctorIdCard = $(".large-screen-doctor-id-card");


/*------------------------------ MY FUNCTIONS -------------------------------*/
//side nav functions
burger.click(function(){
    if(burger.hasClass('open')){
        burger.removeClass('open');
        sideNav.removeClass('open-side-nav');
        pageOverLay.removeClass('page-overlay-open');
    } else {
        burger.addClass('open');
        sideNav.addClass("open-side-nav");
        pageOverLay.addClass('page-overlay-open');
    };
})
pageOverLay.click(function(){
    if(burger.hasClass('open')){
        burger.removeClass('open');
        sideNav.removeClass('open-side-nav');
        pageOverLay.removeClass('page-overlay-open');
    } else {
        burger.addClass('open');
        sideNav.addClass("open-side-nav");
        pageOverLay.addClass('page-overlay-open');
    };
})

//light box functions
// appointmentButton.click(function(){
//     if(myModalBackdrop.hasClass('my-modal-backdrop-open') === false){
//         myModalBackdrop.addClass("my-modal-backdrop-open");
//     }
// })

//remove modalbackdrop
// modalClose1.click(function(){
//     myModalBackdrop.removeClass("my-modal-backdrop-open");
// });
// modalClose2.click(function(){
//     myModalBackdrop.removeClass("my-modal-backdrop-open");
// })
// $( ".modal" ).click(function( event ) {
//     var target = $( event.target );
//     if( target.parents(".modal-content").length > 0 != true){
//         myModalBackdrop.removeClass("my-modal-backdrop-open");
//     } 
//   });

//change the background color of large screen navbar
$(window).scroll(function(){
    var sc = $(window).scrollTop();
    if (sc > 100){
        $(".wide-nav").addClass("sticky")
    }else{
        $(".wide-nav").removeClass("sticky")
    }
});

//departments section
openCard.click(function(){
    var This = $(this);
    var departmentCard1 = This.parents(".department-card");
    if(departmentCard1.hasClass("department-active")){
        departmentCard1.removeClass("department-active");
    } else {
        departmentCard.removeClass("department-active");
        departmentCard1.addClass("department-active");
    }
})


//doctors section

doctorIdCard.click(function(){
    let This = $(this);
    let doctorBigCard = $(".doctor-card");
    if(This.hasClass("doctor-active") === false){
        doctorIdCard.removeClass("doctor-active");
        This.addClass("doctor-active");
        doctorBigCard.find(".doctor-name").text(This.find(".name").text());
        doctorBigCard.find(".doctor-role").text(This.find(".role").text());
        doctorBigCard.find(".doctor-description").text(This.find(".doctor-discription-hidden").text());
        doctorBigCard.children("img").attr('src', This.children("img").attr('src'));
        doctorBigCard.children("img").attr('alt', This.children("img").attr('alt'))
    }
 });

/*------------------------------ MY IMPEDED FUNCTIONS -------------------------------*/
var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});






/*------------------------------ MY TRIAL FUNCTIONS -------------------------------*/


// const doctorIdCard = $(".large-screen-doctor-id-card");








})

