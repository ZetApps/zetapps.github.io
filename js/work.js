function b64_to_utf8(str) {
   return decodeURIComponent(escape(window.atob(str)));
}
function utf8_to_b64(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function getURLParam(paramName) {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}

function getEl(elName)
{
   return document.getElementById(elName);
}

let tg = window.Telegram.WebApp; //получаем объект webapp телеграма 
let paymethod = 0;
tg.expand(); //расширяем на все окно     
tg.MainButton.textColor = "#000";
tg.MainButton.color = "#47e727";
//tg.MainButton.setParams({"color": "#143F6B"}); //так изменяются все параметры

let btn = getEl("btn"); //получаем кнопку скрыть/показать 
let headText = getEl("main-title");
let reciveUserLogin = getEl("recieve-user-login");
let reciveUserName = getEl("recieve-user-name");
let reciveUserPhoto = getEl("recieve-user-photo");

headText.innerText = "Донат для кого-то";
reciveUserLogin.innerText = "@ASDASD";
reciveUserName.innerText = "Test Name";
reciveUserPhoto.src = "https://gravatar.com/avatar/4fca4deaa3294abc4fbef287fa746bda?s=200&d=identicon&r=x";


reciveUserLogin.innerText = `${tg.initDataUnsafe.user.username}`;
reciveUserName.innerText = `${tg.initDataUnsafe.user.first_name}`;
reciveUserPhoto.src = `${tg.initDataUnsafe.user.photo_url}`;

/*
reciveUser.innerText = `${tg.initDataUnsafe.user.first_name}`;
reciveUserLogin.innerText=`${tg.initDataUnsafe.user.username}`;
reciveUserPhoto.src = `${tg.initDataUnsafe.user.photo_url}`;
*/
btn.addEventListener('click', function(){ //вешаем событие на нажатие html-кнопки
   tg.MainButton.show();
   tg.MainButton.text = "Оплатить ЮКасса";
   paymethod = 1;
});

Telegram.WebApp.onEvent('mainButtonClicked', function(){
   if (paymethod==1)
   {
      tg.sendData("1,100");
   }
   if (paymethod==2)
   {
      tg.sendData("2,100");
   }
   //tg.sendData("some string that we need to send");
   //при клике на основную кнопку отправляем данные в строковом виде
});

/*
let usercard = document.getElementById("usercard"); //получаем блок usercard 

let profName = document.createElement('p'); //создаем параграф
profName.innerText = `${tg.initDataUnsafe.user.first_name}
${tg.initDataUnsafe.user.last_name}
${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
//выдем имя, "фамилию", через тире username и код языка
usercard.appendChild(profName); //добавляем 

let userid = document.createElement('p'); //создаем еще параграф 
userid.innerText = `${tg.initDataUnsafe.user.id}`; //показываем user_id
usercard.appendChild(userid); //добавляем


//работает только в attachment menu
// let pic = document.createElement('img'); //создаем img
// pic.src = tg.initDataUnsafe.user.photo_url; //задаём src 
// usercard.appendChild(pic); //добавляем элемент в карточку 
*/