let btn = document.getElementById("btn");
let change = document.getElementById("change");
let light = document.getElementById("light");
let body = document.querySelector('body');
let audio = document.querySelector('#audio');

btn.onclick = function(){
  if(body.classList.toggle('on')){
    document.documentElement.style.cssText = "--light-color: #24b81f";
    if(change.innerHTML=="OFF"){
      change.innerHTML = "ON";
      document.getElementById("change").style.color = "#24b81f";
      document.getElementById("light").style.color = "#24b81f";
    }
    audio.play();
  }else{
    document.documentElement.style.cssText = "--light-color: #9b1414";
    if(change.innerHTML=="ON"){
      change.innerHTML = "OFF";
      document.getElementById("change").style.color = "#9b1414";
      document.getElementById("light").style.color = "#9b1414";
    }
  }
}