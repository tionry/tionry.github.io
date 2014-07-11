	function comments_json(page_num) {
		$('div.comment').remove();
		var url = '/comments'+page_num+'.json';
		localStorage.page_num = page_num; 
		
		function processData(data) {
			var b = $('#span_currcommenttotal0');
			b[0].innerHTML = page_num*3 + 1;
			var c = $('#span_currcommenttotal1');
			c[0].innerHTML = page_num*3 + data.comments.length;					
			for(var a = 0;a < data.comments.length;a++){				
				$('div.comments').append(
				"<div class = 'comment'><div class ='commentcon'><div class = 'userPhoto'><img width = '50' height = '50' src = '"+data.comments[a].pic+"'></img></div><div class = 'bar'><a href='#blank' style = 'text-decoration: none''>"+data.comments[a].name+"</a></div><div class = 'con'><div class = 'text'><p>" + data.comments[a].content+"</p><br></div></div></div></div>");
			}
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
		}