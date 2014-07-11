			$(document).ready(function slide(){	
						
				var index=0;
				var slideFlag = true;
				var length=$('.roll-news-image img').length;				
				function showImg(i){
					$('.roll-news-image img')
					.eq(i).stop(true,true).fadeIn('slow')
					.siblings("img").hide();

					$('.roll-news-index li').removeClass('roll-news-index-hover');
					$('.roll-news-index li').eq(i).addClass('roll-news-index-hover');

					$('.roll-news-title a')
					.eq(i).stop(true,true).fadeIn('slow')
					.siblings('a').hide();
				}
				showImg(index);
				
				$('.roll-news-index li').click(function(){
					index = $('.roll-news-index li').index(this);
					showImg(index);
					slideFlag = false;
				});	
				
				function autoSlide() {
					setInterval(function() {
						if(slideFlag) {
							showImg((index+1) % length);
							index = (index+1)%length;
						}
						slideFlag = false;
					}, 3000);
				}
				
				autoSlide();
				
			});