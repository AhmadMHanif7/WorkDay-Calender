document.getElementById("currentDay").innerHTML = new Date().toDateString();

checkHour = new Date().getHours();

console.log(checkHour);


for(let i = 9; i <= 17; i++){
    if(i < checkHour){
        document.getElementById("hour" + i).classList.add("past");
    }
    else if (i === checkHour){
        document.getElementById("hour" + i).classList.add("present");
    }
    else if (i > checkHour){
        document.getElementById("hour" + i).classList.add("future");
    }
    document.getElementById("hour" + i).classList.remove("hour");
};