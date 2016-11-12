function getTest() {

  var el = ['1-image','2-category','3-brand-title','4-episode-title'];

  var random = getRandomInt(1, 4);
  var scenario = el[random-1];
  
  if(random === 1) {
      getScenario('js-image');
  } else if(random === 2) {
      getScenario('js-category');
  } else if(random === 3) {
      getScenario('js-brand-title');
  } else {
      getScenario('js-episode-title');
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function getScenario(klass) {
    document.getElementsByClassName(klass)[0].textContent = scenario;
  }

}


