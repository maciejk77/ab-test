function runTest() {

  var baseElements = ['img/b.png','MOVIE','Kevin Adam Curtis','New Documentary!'];
  var toDoElements = baseElements;
  var nodesList = document.getElementsByClassName('tile')[0].children;
  var pattern = new RegExp('^img/');
  var randomInt = getRandomInt();
  var test = pattern.test(toDoElements[randomInt]);
  console.log('changed element at index ' + randomInt + ' to ' + toDoElements[randomInt]);

  getScenario();

  if(sessionStorage.length < 1) {
    sessionStorage.setItem('baseArray', baseElements);    
    sessionStorage.setItem('toDoArray', toDoElements);
  }
  
  function getScenario() {
    test ? setImage() : setText();
  }

  function getRandomInt() {
    return Math.floor(Math.random() * toDoElements.length);
  }

  function setText() {
    document.getElementsByClassName(getKlass(randomInt))[0].textContent = toDoElements[randomInt];
  }

  function setImage() {
    document.getElementsByTagName('img')[0].setAttribute('src', 'img/b.png');
  }

  function getKlass(randomInt) {
    return nodesList[randomInt].getAttribute('class');
  }
}


