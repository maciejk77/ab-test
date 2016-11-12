function getTest() {

  var el = ['b.png','MOVIE','Kevin Adam Curtis','New Documentary!'];

  var random = getRandomInt();
  var scenario = el[random];

  // Shows in console which random scenario was picked and updated on page
  console.log('random, scenario no. ' + random + ' --> ' + scenario);
  
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
    return Math.floor(Math.random() * 4);
  }

  function getText(klass) {
    document.getElementsByClassName(klass)[0].textContent = scenario;
  }

  function getImage() {
    document.getElementsByTagName('img')[0].setAttribute('src', 'img/b.png');
  }

}


