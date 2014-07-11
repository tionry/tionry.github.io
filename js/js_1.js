		$(document).ready(function slide(){	
						
				var i=0;
				var flag = true;
				var len=$('.roll-news-image img').length;				
				function show_news(i){
					$('.roll-news-image img')
					.eq(i).stop(true,true).fadeIn('slow')
					.siblings("img").hide();

					$('.roll-news-i li').removeClass('roll-news-i-hover');
					$('.roll-news-i li').eq(i).addClass('roll-news-i-hover');

					$('.roll-news-title a')
					.eq(i).stop(true,true).fadeIn('slow')
					.siblings('a').hide();
				}
				show_news(i);
				
				$('.roll-news-i li').click(function(){
					i = $('.roll-news-i li').i(this);
					show_news(i);
					flag = false;
				});	
				
				function autoSlide() {
					setInterval(function() {
						if(flag) {
							show_news((i+1) % len);
							i = (i+1)%len;
						}
						flag = true;
					}, 3000);
				}
				
				autoSlide();
				
			});