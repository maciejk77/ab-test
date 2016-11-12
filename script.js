function getTest() {

  var el = ['1-image','2-title','3-tags','4-description'];

  var random = getRandomInt(1, 4);
  var scenario = el[random-1];
  
  var para = document.createElement("p"); 
  var t = document.createTextNode(scenario);
  para.appendChild(t); 
  document.getElementsByTagName('body')[0].appendChild(para);  
  
  // if(scenario === 1) {
  //   document.getElementsByClassName('image')[0].textContent = 1;
  // } else if(scenario === 2) {
  //   document.getElementsByClassName('title')[0].textContent = 2;
  // } else if(scenario === 3) {
  //   document.getElementsByClassName('tags')[0].textContent = 3;
  // } else {
  //   document.getElementsByClassName('description')[0].textContent = 4;
  // }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}


