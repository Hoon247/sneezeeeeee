$(document).ready(function(){
  var d = new Date();
  var n = d.getHours();
  if(n > 19 || n < 6){
    document.getElementById('todo_input_textbox').style.color = 'white';
    document.getElementById('todo_input_button').style.borderColor = 'white';
    document.getElementById('menubar').src='img/menubar_n.png';
  }
  else{
    document.getElementById('todo_input_textbox').style.color = 'black';
    document.getElementById('todo_input_button').style.borderColor = 'black';
  }
});
let dat = new Date();
const datY = dat.getFullYear();
const datM = dat.getMonth();
const datD = dat.getDate();
let datDy = dat.getDay();
switch(datDy){
  case 0 : datDy = "일";
  break;
  case 1 : datDy = "월";
  break;
  case 2 : datDy = "화";
  break;
  case 3 : datDy = "수";
  break;
  case 4 : datDy = "목";
  break;
  case 5 : datDy = "금";
  break;
  case 6 : datDy = "토";
  break;
}
var datToday = datY+'/'+(datM+1)+'/'+datD+'('+datDy+')';
const datTarget = document.getElementById('todo_top_header_date');
datTarget.innerHTML=datToday;
//-------야간 모드 및 날짜 업데이트-------//
let itemList = [];
function listAddClick(){
  let item = document.querySelector("#todo_input_textbox").value;
  if(item != null) {
    itemList.push(item);
    document.querySelector("#todo_input_textbox").value="";
    document.querySelector("#todo_input_textbox").focus();
  }
  showList();
}

function showList() {
    let list = "<ul>"
    for (let i = 0; i <itemList.length; i++) {
        list += "<li>" + "<div class='itemFrame'id ='"+i+"_item'>"+
                          "<div class='itemText'>"+itemList[i]+"</div>"+
                          "<div class='itemInfo'>"+"</div>"+
                          "<div class='close' id = '"+i+"'>"+"</div>"+
                          "</div></li>";
    }
    list += "</ul>";
    document.querySelector("#todo_list").innerHTML = list;


    let deleteButtons = document.querySelectorAll(".close");
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", deleteItem);
    }
}
function deleteItem() {
    let id = this.getAttribute("id");
    itemList.splice(id, 1);
    showList();
}
