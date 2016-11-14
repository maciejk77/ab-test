function runTest() {

  var baseElements = ['img/b.png','MOVIE','Kevin Adam Curtis','New Documentary!'];
  var toDoElements = baseElements;
  var nodesList = document.getElementsByClassName('tile')[0].children;
  var testsNum = [0,1,2,3];
  var pattern = new RegExp('^img/');
  var randomInt = getRandomInt();
  var test = pattern.test(toDoElements[randomInt]);
  
  // Shows which test has been rendered to the screen
  console.log('changed element at index ' + randomInt + ' to ' + toDoElements[randomInt]);
  // Control array of scenarios 
  console.log(testsNum);

  getScenario();

  if(sessionStorage.length < 1) {
    sessionStorage.setItem('baseArray', baseElements);    
    sessionStorage.setItem('toDoArray', toDoElements);
  }
  
  function getScenario() {
    test ? setImage() : setText();
  }

  function getRandomInt() {
    var result = Math.floor(Math.random() * testsNum.length);
    var number = testsNum[result];
    removeTestNum(result);
    return number;
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

  function removeTestNum(number) {
    for(var i=0; i<testsNum.length; i++) {
      if(testsNum[i] === number) { testsNum.splice(i,1) };
    }
  }

}


