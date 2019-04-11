// Задача №1: Дописать условия, если ни у кого нету Дня Рождения. Почему то срабатывает только else. None!

function getBirthday () {
	var birthdayData = {
		"4" : {
			"9" : {
				"Катя" : 1981,
				"Миша" : 1999
	}}},
	    monthBirthday = "4",
		today = new Date(),
		month = today.getMonth() + 1,
		day = today.getDate(),
		year = today.getFullYear(),
		age = 0,
		friendsList = "",
		todayBirthday = birthdayData[month][day];
		console.log("month:",month);
		console.log("day:",day);
		for (var name in todayBirthday){
			if (birthdayData[monthBirthday] == day && monthBirthday == month) {
			age = year - todayBirthday[name];
			friendsList += name + " " + age + "\n";
}
		else {
			console.log("Нету дня рождения!");
}}
	return friendsList;
	}
console.log(getBirthday());


// Задача№2 Расcчитать количество флезилиновых обоив, которые клеются в стык и где не нужно подгонять рисунок. Думаю правильность 50% на 50%.

  function squareWalls (weigthWall1=4,weightWall2=5,heightWall=3,weightWindow=2,weightDoor=1,weightPaper=1,lengthPaper=10){
          return (((2*(weigthWall1*heightWall) + 2*(weightWall2*heightWall))-((weightDoor*heightWall)+(weightWindow*heightWall)))/(weightPaper*lengthPaper)
}
console.log("Общая площадь стены: ",Math.ceil(squareWalls()));

	
