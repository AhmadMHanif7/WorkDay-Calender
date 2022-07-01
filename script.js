document.getElementById("currentDay").innerHTML = new Date().toDateString();

checkHour = new Date().getHours();

for(let k = 9; k <= 17; k++){
    document.getElementById("textarea" + k).innerHTML = localStorage.getItem("textarea"+k);
}

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

document.getElementById("saveBtn9").onclick = function() {saveText(9)};
document.getElementById("saveBtn10").onclick = function() {saveText(10)};
document.getElementById("saveBtn11").onclick = function() {saveText(11)};
document.getElementById("saveBtn12").onclick = function() {saveText(12)};
document.getElementById("saveBtn13").onclick = function() {saveText(13)};
document.getElementById("saveBtn14").onclick = function() {saveText(14)};
document.getElementById("saveBtn15").onclick = function() {saveText(15)};
document.getElementById("saveBtn16").onclick = function() {saveText(16)};
document.getElementById("saveBtn17").onclick = function() {saveText(17)};



function saveText(j){
    currentInput = document.getElementById("textarea"+ j).value;
    console.log(currentInput);
    localStorage.setItem("textarea"+ j, currentInput);

}