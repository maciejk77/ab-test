function runTest() {

//getImage OR getText => Regex to recognize img/ or not
//array of index number, i.e after deletion od 2 array should be [1,3,4] so not to repeat number


  var baseElements = ['img/b.png','MOVIE','Kevin Adam Curtis','New Documentary!'];
  var toDoElements = baseElements;
  var random = getRandomInt();
  var scenario = baseElements[random];

  if(sessionStorage.length < 1) {
    sessionStorage.setItem('baseArray', baseElements);
    sessionStorage.setItem('toDoArray', toDoElements);
  } 

  // Shows in console random scenario updated on page
  var el2 = random + 1;
  console.log('random, scenario no. ' + el2 + ' --> ' + scenario);

  getScenario(random);

  // ---------------------------------------------

  function getScenario(random) {
    if(random === 0) {
        getImage();
    } else if(random === 1) {
        getText('tile__category');
    } else if(random === 2) {
        getText('tile__brand-title');
    } else if(random === 3) {
        getText('tile__episode-title');
    }
    deleteScenario();
  }

  function getRandomInt() {
    return Math.floor(Math.random() * index.length);
  }

  function getText(klass) {
    document.getElementsByClassName(klass)[0].textContent = scenario;
  }

  function getImage() {
    document.getElementsByTagName('img')[0].setAttribute('src', 'img/b.png');
  }

  function deleteScenario() {
    var toDoArray = sessionStorage.getItem('toDoArray').split(',');
    toDoArray.splice(random, 1);
    var result = toDoArray.join();
    sessionStorage.setItem('toDoArray', result);
    console.log(toDoArray);
    if(toDoArray.length < 1) {
      sessionStorage.setItem('toDoArray', toDoElements);
    }
  }
}


