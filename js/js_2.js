void function() {
		var url = '/data.json';

		function processData(data) {
			$('img').each(function(index,m){
			var c = $(m);
			c[0].setAttribute("src",data.news[index].pic_href);			
			})
						
			$('a').each(function(index,m){
			var c = $(m);
			c[0].innerHTML=data.news[index].new_title;
			c[0].setAttribute("href",data.news[index].news_href);
			})
		  }

		  function handler() {
			if (this.readyState == this.DONE) {
			  if (this.status == 200) {
				try {
				  processData(JSON.parse(this.responseText));
				} catch(ex) {
				  console.log(ex.message);
				}
			  }
			}
		  }

		  function ajax() {
			var client = new XMLHttpRequest();
			client.onreadystatechange = handler;
			client.open('GET', url,true);
			client.send();
		  }
		   ajax();
		}();