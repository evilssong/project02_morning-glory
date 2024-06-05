$(window).ready(function(){
	
	$("#gnb > ul > li").mouseenter(function(){
		$(this).addClass("active");
		$(".header_inner").addClass("active");
		$("#gnb").addClass("active");
	});
	$("#gnb > ul > li").mouseleave(function(){
		$(this).removeClass("active");
		$(".header_inner").removeClass("active");
		$("#gnb").removeClass("active");
	});
	$("#gnb > ul > li > a").focusin(function(){
		if($("#header").hasClass("active") == false) $("#header").addClass("active");
		$(this).parent().addClass("active");
		$(".header_inner").addClass("active");
	});
	$("#gnb li li:last-child a").focusout(function(){
		if($("#header").hasClass("active") == true) $("#header").removeClass("active");
		$(this).parent().parent().parent().removeClass("active");
		$(".header_inner").removeClass("active");
	});
	$("#gnb li li").mouseenter(function(){
		$(this).addClass("active");
	});
	$("#gnb li li").mouseleave(function(){
		$(this).removeClass("active");
	});
	$("#gnb li li").focusin(function(){
		$(this).addClass("active");
	});
	$("#gnb li li").focusout(function(){
		$(this).removeClass("active");
	});
	var winT;
	var firstTop=true;

	$("#header").hover(
		function(){
			if($(this).hasClass("active") == false) $(this).addClass("active");
		},
		function(){
			if($(this).hasClass("active") == true && firstTop == true) $(this).removeClass("active");
		}
	);
	$(window).scroll(function(){
		winT=$(window).scrollTop();
		if(winT > 10){
			if($("#header").hasClass("active") == false) $("#header").addClass("active");
			firstTop=false;
		}
		else{
			if($("#header").hasClass("active") == true) $("#header").removeClass("active");
			firstTop=true;
		}
	});
	$(window).trigger("scroll");

	var winW;

	$("#header .menu .tab").click(function(e){
		e.preventDefault();
		winW=$(window).width();

		if(winW > 1200){
			$("body").toggleClass("fixed");
			$("#header .full_menu").toggleClass("active");
			$("#header .full_menu").fadeToggle(400);
			$(this).toggleClass("active");
			$(".dim").fadeToggle(300);
    	}
	});

	$("#header .menu .tab").click(function(e){
		e.preventDefault();
		winW=$(window).width();

		if(winW < 1200){
			$("#header .full_menu").toggleClass("active");
			$("#header .full_menu").fadeToggle(400);
			$(this).toggleClass("active");
			$("body").toggleClass("fixed");
			$(".dim").fadeToggle(300);
    	}
	});
	

	$(window).resize(function(){
		winW=$(window).width();

		if(winW > 1200){
			if($("#header .full_menu").hasClass("active")){
				$("this").removeClass("active");
			}
		}
	});
	$(window).trigger("resize");

	$("#gnb2 li:last-child li:last-child a").focusout(function(){
		$("#header .menu .tab").focus();
	});


// 메인 슬라이더
	var mainTotal, mainCurrent;

	var mainSwiper = new Swiper(".main_slider .mainSwiper", {
		observer: true,
        observeParents: true,
		speed: 1200,
        loop: true,
		effect: "fade", 
		adeEffect: { 
			crossFade: true
		},
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
          el: ".main_slider .swiper-pagination",
		  clickable: true,
    	},
		on: {
			init: function(){
				mainTotal=this.slides.length-2;
				mainCurrent=this.activeIndex;
				$(".main_slider .account .current").text(mainCurrent);
				$(".main_slider .account .total").text(mainTotal);
			},
			slideChange: function(){
				if(this.activeIndex <= mainTotal){
					mainCurrent=this.activeIndex;

					if(this.activeIndex == 0){
						mainCurrent=mainTotal;
					}
				}
				else{
					mainCurrent=1;
				}
				$(".main_slider .account .current").text(mainCurrent);
			},
		}
	});
	$(".main_slider .prev").click(function(e){
		e.preventDefault();
		mainSwiper.slidePrev();
	});
	$(".main_slider .next").click(function(e){
		e.preventDefault();
		mainSwiper.slideNext();
	});
	$("#pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			mainSwiper.autoplay.start();
			mainStatus="play";
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			mainSwiper.autoplay.stop();
			mainStatus="pause";
		}
	});


// section1 캐릭터 슬라이더
	var slideInx=0;
	var section1_playstatus="play";
	var section1_slider=new Swiper(".section1_slider .swiper-container", {
		slidesPerView: 1,
		speed:1300,
		spaceBetween: 10,
		centeredSlides: true,
		initialSlide:3,
        loop: true,
		autoplay: {
			delay: 4000,
			disableOnInteraction: false,
		},
		pagination: {
			el: ".section1_slider .swiper-pagination",
			type: "progressbar"
		},
		navigation: {
			nextEl: ".section1_slider .swiper-button-next",
			prevEl: ".section1_slider .swiper-button-prev"
		},
		breakpoints: {
			640: {
				speed:1300,
				slidesPerView: 3,
				centeredSlides: true,
				loopedSlides:4,
				initialSlide: 2
			},
			920: {
				speed:1300,
				slidesPerView: 4,
				centeredSlides: true,
				loopedSlides:4,
				initialSlide:0
			},
			1200: {
				speed:1300,
				slidesPerView: 5,
				centeredSlides: true,
				loopedSlides:6,
				initialSlide:3
			}
		},
		
	});
	$(".section1_slider #pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			section1_slider.autoplay.start();
			section1_playstatus="play";
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			section1_slider.autoplay.stop();
			section1_playstatus="pause";
		}
	});
	$(".main_slider .swiper-slide.swiper-slide-duplicate.swiper-slide-active .c_bg").mouseenter(function(){
			$(".swiper-slide.swiper-slide-duplicate.swiper-slide-active .c_bg").addClass("active");
			$(this).addClass("active");
			$(this).find("img").addClass("active");
	});
	$(".main_slider .swiper-slide.swiper-slide-duplicate.swiper-slide-active .c_bg").mouseleave(function(){
			$(this).removeClass("active");
			$(this).find("img").removeClass("active");
			$(".swiper-slide.swiper-slide-duplicate.swiper-slide-active .c_bg").removeClass("active");
	});
	$(".section1_slider a .c_bg").mouseenter(function(){
			$(this).addClass("active");
			$(this).find("img").addClass("active");
	});
	$(".section1_slider a .c_bg").mouseleave(function(){
			$(this).removeClass("active");
			$(this).find("img").removeClass("active");
	});
	


	// section3 숍슬라이더
	var section3_playstatus="play";
	var section3_slider=new Swiper(".section3_slider .swiper-container", {
		speed:1100,
		slidesPerView: 1,
		spaceBetween: 130,
		centeredSlides: true,
		initialSlide: 0,
		loopedSlides:2,
        loop: true,
		autoplay: {
			disableOnInteraction: false,
			delay: 4000,
		},
		navigation: {
			nextEl: ".section3_slider .swiper-button-next",
			prevEl: ".section3_slider .swiper-button-prev"
		},
		on: {
			slideChange: function(){
				$(".shop a .shop_img img").removeClass("active");

				setTimeout(() => {
					$(".swiper-slide-active .shop a .shop_img img").addClass("active");
				}, 10);
			},
		}
		
	});
	$(".section3_slider .swiper-button-prev").click(function(e){
		e.preventDefault();
		setTimeout(() => {
			if(section3_playstatus == "play"){
				section3_slider.autoplay.start();
			}
		}, 10);
	});
	$(".section3_slider .swiper-button-next").click(function(e){
		e.preventDefault();
		setTimeout(() => {
			if(section3_playstatus == "play"){
				section3_slider.autoplay.start();
			}
		}, 10);
	});
	$(".section3_slider #pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			section3_slider.autoplay.start();
			section3_playstatus="play";
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			section3_slider.autoplay.stop();
			section3_playstatus="pause";
		}
	});

	// section4 newproduct 슬라이더
	var seciion4_slider = new Swiper(".seciion4_slider", {
		speed:1000,
        effect: "cube",
        grabCursor: true,
		loop: true,
		autoplay: {
			disableOnInteraction: false,
			reverseDirection: true,
			delay: 3000,
		},
        cubeEffect: {
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
    });

	// section5 Ecatalog 슬라이더

	var section5_playstatus="play";
	var section5_slider= new Swiper(".section5_slider .swiper-container", {
		speed:1000,
		slidesPerView: 1,
		spaceBetween: 15,
		centeredSlides: true,
		loop: true,
		initialSlide:6,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		
		navigation: {
			nextEl: ".section5_slider .swiper-button-next",
			prevEl: ".section5_slider .swiper-button-prev"
		},
		breakpoints: {
			640: {
				slidesPerView: 3,
				spaceBetween: 4,
				centeredSlides: true,
				initialSlide: 2,
			},
			920: {
				slidesPerView: 5,
				spaceBetween: 7,
				centeredSlides: true,
				initialSlide:0
			},
			1200: {
				observer: true,
          		observeParents: true,
				slidesPerView: 7,
				spaceBetween: 10,
				centeredSlides: true,
				initialSlide:0,
			}
		},	
	});
	$(".section5_slider a img").mouseenter(function(){
			$(this).addClass("active");
	});
	$(".section5_slider a img").mouseleave(function(){
			$(this).removeClass("active");
	});
	$(".section5_slider #pause_play").click(function(e){
		e.preventDefault();
		if($(this).hasClass("play")){
			$(this).removeAttr("class");
			$(this).addClass("pause");
			$(this).text("pause");
			section5_slider.autoplay.start();
			section5_playstatus="play";
		}
		else{
			$(this).removeAttr("class");
			$(this).addClass("play");
			$(this).text("play");
			section5_slider.autoplay.stop();
			section5_playstatus="pause";
		}
	});
});
