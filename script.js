function runTest() {

  var baseElements = ['img/b.png','MOVIE','Kevin Adam Curtis','New Documentary!'];
  var toDoElements = baseElements;
  var nodesList = document.getElementsByClassName('tile')[0].children;
  var testsNum = [0,1,2,3];
  var pattern = new RegExp('^img/');
  var randomInt = getRandomInt();
  var test = pattern.test(toDoElements[randomInt]);
  
  // Shows which test has been rendered to the screen
  console.log('changed element at index ------> ' + randomInt + ' to ' + toDoElements[randomInt]);

  if(sessionStorage.length < 1) {
    sessionStorage.setItem('baseArray', baseElements);    
    sessionStorage.setItem('testsNumElements', testsNum);
    sessionStorage.setItem('toDoArray', toDoElements);
  }

  // Control array of scenarios 
  console.log('toDoArray is now ====>' + sessionStorage.getItem('toDoArray'));

  getScenario();
  
  function getScenario() {
    test ? setImage() : setText();
    deleteScenario();
  }

  function getRandomInt() {
    var result = Math.floor(Math.random() * testsNum.length);
    var number = testsNum[result];
    removeTestNum(result);
    return number;
  }

  function setText() {
    document.getElementsByClassName(getClass(randomInt))[0].textContent = toDoElements[randomInt];
  }

  function setImage() {
    document.getElementsByTagName('img')[0].setAttribute('src', baseElements[0]);
  }

  function getClass(randomInt) {
    return nodesList[randomInt].getAttribute('class');
  }

  function removeTestNum(number) {
    for(var i=0; i<testsNum.length; i++) {
      if(testsNum[i] === number) { testsNum.splice(i,1) };
    }
  }

  function deleteScenario() {
    var scenarios = sessionStorage.getItem('testsNumElements').split(',');
    scenarios.splice(randomInt, 1);
    var result = scenarios.join();
    sessionStorage.setItem('testsNumElements', result);

    // var elements = sessionStorage.getItem('toDoArray').split(',');
    // elements.splice(randomInt, 1);
    // var res = elements.join();
    // sessionStorage.setItem('toDoArray', res);

    console.log(sessionStorage.getItem('testsNumElements') + ' <--- testsNum array');
    // console.log(sessionStorage.getItem('toDoArray'));

    if(scenarios.length < 1) {
      sessionStorage.setItem('testsNumElements', testsNum);
    }
  }

}


