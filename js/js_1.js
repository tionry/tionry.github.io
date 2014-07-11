		$(document).ready(function(){	
						
				var index=0;
				var flag = true;
				var len=$('.roll-news-image img').length;				
				function show_news(i){
					$('.roll-news-image img')
					.eq(i).stop(true,true).fadeIn('slow')
					.siblings("img").hide();

					$('.roll-news-index li').removeClass('roll-news-index-hover');
					$('.roll-news-index li').eq(i).addClass('roll-news-index-hover');

					$('.roll-news-title a')
					.eq(i).stop(true,true).fadeIn('slow')
					.siblings('a').hide();
				}
				show_news(index);
				
				$('.roll-news-index li').click(function(){
					index = $('.roll-news-index li').index(this);
					show_news(index);
					flag = false;
				});	
				
				function auto_shows() {
					setInterval(function() {
						if(flag) {
							show_news((index+1) % len);
							index = (index+1)%len;
						}
						flag = true;
					}, 3000);
				}
				
				auto_shows();
				
			});