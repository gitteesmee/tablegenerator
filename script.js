		function calculation() { // functie start
			var y; // variabele y
			var number; // variabele number
			var txt; // variabele txt

			y = document.getElementById("num").value; // y is wat er in het input veld staat

			if (isNaN(y)) { //als y is 'not a number/geen nummer' dan
				number = 1; // is het de tafel van 1
				txt = "Input is not valid, put in a number please."; // tekst wordt weergegeven
			} else { // anders
				number = y; // de tafel is gelijk aan y
				txt = ""; // er wordt geen tekst weergegeven
				}

			document.getElementById("txt").innerHTML = txt; // het id txt wordt gekoppeld aan txt

			var x = number; // x is gelijk aan number

			var outcome = ""; // outcome wordt later ingevuld, nu gelijk aan niks
			var i = 0; // variabele i is 0
			while (i<101){ // loop van 0 tot 101, oftewel tot en met 100
				outcome += i + " x " + x + " = " + i * x + "<br>" ; // outcome is enter, '1' x 'x' = 'i*x'
				i++; // er wordt 1 bij i opgeteld 
			}

			document.getElementById("multiply").innerHTML = outcome; // het id mutiply wordt gekoppeld aan multiply

		}