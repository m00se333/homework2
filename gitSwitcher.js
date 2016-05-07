

function commentary(day) {

	switch(day.toLowerCase()) {
		case "monday":
			console.log("I actually don't mind Mondays, dunno why it gets a bad wrap.");
			break;
		case "tuesday":
			console.log("Tuesday is alright, I guess. Sometimes an excuse to drink beer and eat tacos.");
			break;
		case "wednesday":
			console.log("Wed-nes-day, is my most misspelled day.");
			break;
		case "thursday":
			console.log("Thursday is fun");
			break;
		case "friday":
			console.log("Friday is the day I always want to go out and do something, but normally I have to work /sadface.");
			break;
		case "saturday":
			console.log("Another day where I find myself envious of those who Mon-Fri.")
			break;
		case "sunday":
			console.log("My favorite day probably, I just want to do nothing and drink mimosas on Sunday.");
			break;
		default: 
			console.log("That isn't a day of the week.");
		}
		
}

var response = prompt("what day do you want to know more about?")

commentary(response);