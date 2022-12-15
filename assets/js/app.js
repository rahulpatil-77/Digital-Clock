const cl = console.log;

let d = new Date();

cl(d);

// let  hr = d.getHours();

// cl(hr);

// let min = d.getMinutes();

// cl(min);

// let sec = d.getSeconds();

// cl(sec);

// document.write(hr + ":"  + min + ":" + sec);
// document.write("<br>");

// function digiClock1(){
	// let d = new Date();
	// let hr = d.getHours();
	// let min = d.getMinutes();
	// let sec = d.getSeconds();
	
	// document.write(hr+":"+min+":"+sec);
	// setTimeout(digiClock1, 1000);
	
// }

	// digiClock1();
	
	
	let dclock = document.getElementById("digitalClock");
	
	
	
	function digiClock(){
			let d = new Date();
			let hr = d.getHours();
			let min = d.getMinutes();
			let sec = d.getSeconds();
			let session = 'am';
		
			if(hr >=12){
			session = "pm";
			}
		
			if(hr > 12){
			hr = hr - 12
			};
			
			
 		
			// hr = (hr < 12) ? (hr) : (hr - 12);
	
				hr = setZero(hr);
				min = setZero(min);
				sec = setZero(sec);
		
		
			let result = `${hr} : ${min} : ${sec} ${session}`;
					
				// cl(hr, min, sec);
			
			dclock.innerHTML = result;
			
		setTimeout(digiClock, 1000);
		}
				digiClock();
				
				
		function setZero(num){
			return (num < 10) ? ("0" + num) : num;
		};

			
			
			
			
			
			
			
			
			
			
			
			
