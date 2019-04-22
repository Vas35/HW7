// Задача №1: Дописать условия, если ни у кого нету Дня Рождения. Done!

function getBirthday () {
	var birthdayData = {
		"4" : {
			"20" : {
				"Катя" : 1981
			},
			"21" : {
				"Миша" : 1999
	}}},
	   	today = new Date(),
		month = today.getMonth() + 1,
		day = today.getDate(),
		year = today.getFullYear(),
		age = 0,
		friendsList = "",
		todayBirthday = birthdayData[month][day];
		if (todayBirthday){		
		     for (var name in todayBirthday){
				age = year - todayBirthday[name];
			           friendsList += name + " " + age + "\n";
		}}
		else {
			console.log("Нету дня рождения!");
}
	return friendsList;
	}
console.log(getBirthday());


// Задача№2 Расcчитать количество флезилиновых обоив. Done!
function getRolls (sizeApartmentPaper) {
        var sizeApartmentPaper = {
	                 "room" : { 
	                         "weightWall1" : 4,
							 "weightWall2" : 5,
							 "height" : 3
					 },
					 "door" : {
						     "weightDoor" : 1
					 },
					 "window" : {
						     "weightWindow" : 2
					 }, 
					 "wallPaper" : {
						     "weightPaper" : 1,
                             "lengthPaper" : 10
                   }};
				  
     numRolls = Math.ceil(((2*(sizeApartmentPaper["room"]["weightWall1"]*sizeApartmentPaper["room"]["height"]) + 2*(sizeApartmentPaper["room"]["weightWall2"]*sizeApartmentPaper["room"]["height"]))-((sizeApartmentPaper["door"]["weightDoor"]*sizeApartmentPaper["room"]["height"])+(sizeApartmentPaper["window"]["weightWindow"]*sizeApartmentPaper["room"]["height"])))/(sizeApartmentPaper["wallPaper"]["weightPaper"]*sizeApartmentPaper["wallPaper"]["lengthPaper"]));
	 	return numRolls; 
}
console.log("Количество рулонов: ",getRolls());