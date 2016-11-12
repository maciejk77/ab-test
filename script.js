function getTest() {

  var altElements = ['b.png','MOVIE','Kevin Adam Curtis','New Documentary!'];

  var random = getRandomInt();
  var scenario = altElements[random];

  // Shows in console random scenario updated on page
  var el2 = random + 1;
  console.log('random, scenario no. ' + el2 + ' --> ' + scenario);
  
  if(random === 0) {
      getImage();
  } else if(random === 1) {
      getText('tile__category');
  } else if(random === 2) {
      getText('tile__brand-title');
  } else {
      getText('tile__episode-title');
  }

  function getRandomInt() {
    return Math.floor(Math.random() * altElements.length);
  }

  function getText(klass) {
    document.getElementsByClassName(klass)[0].textContent = scenario;
  }

  function getImage() {
    document.getElementsByTagName('img')[0].setAttribute('src', 'img/b.png');
  }

}


