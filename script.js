function runTest() {

//getImage OR getText => Regex to recognize img/ or not
//array of index number, i.e after deletion od 2 array should be [1,3,4] so not to repeat number

  // Setting an array of B scenarios for test 1-4
  var baseElements = ['img/b.png','MOVIE','Kevin Adam Curtis','New Documentary!'];
  // This array will be changed, removed items after each load, until empty, than will be populated back again
  var toDoElements = baseElements;
  // This is an array with index numbers, with each random number, item will be deleted, so consecutive random choice can only be from these i.e [1,3,4]
  var randomArray = [0,1,2,3];
  // function to get random number
  var random = getRandomInt();
  // With every page load random scenario is set
  var scenario = baseElements[random];

  // This will be called only once, when sessionStorage is = 0 => empty
  if(sessionStorage.length < 1) {
    // Setting baseArray & toDoArray and attaching them to sessionStorage
    sessionStorage.setItem('baseArray', baseElements);
    sessionStorage.setItem('toDoArray', toDoElements);
  } 

  // Shows in console random scenario updated on page
  var el2 = random + 1;
  console.log('random, scenario no. ' + el2 + ' --> ' + scenario);

  // Initiate test
  getScenario(random);

  // ---------------------------------------------

  function getScenario(random) {

    // This was an attempt to use Regex to getImage() if string is matched to img/ otherwise serve getText()
    // but not there yet to be refactored

    // var pattern = new RegExp('^img/');
    // var test = pattern.test(baseElements[random]);
    
    // if(baseElements[random] === test) {
    //   console.log('image has been chosen');
    // }

    // This was a dummy IF statement to get serve correct element of the array
    // The problem is an assumption that order of elements is always the same e.g. image is at index 0 - which is not the case when it was served and deleted from array
    // getText() method also to be refactored not to be fixed to class names
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

  // Helper method which returns random number
  function getRandomInt() {
    // This is to generate number where randomArray.length gives number 0-3, each time changing range when item is deleted from randomArray
    var number =  Math.floor(Math.random() * randomArray.length - 1);
    // console.log('number now is -->' + number); // to be deleted
    
    // The deletion of item from randomArray after random number generation
    for(var i = 0; i < randomArray.length; i++) {
      randomArray.splice(i,1);
    }
    console.log('randomArray now is -->' + randomArray); // to be deleted 
    return number;
  }

  // Helper method to attach certain scenario from baseElements array to DOM node as per given 'klass'
  function getText(klass) {
    document.getElementsByClassName(klass)[0].textContent = scenario;
  }

  // Helper method to change image in this scenario from baseElements
  // To be refactored fixed to the img/b.png not pulled from the array
  function getImage() {
    document.getElementsByTagName('img')[0].setAttribute('src', 'img/b.png');
  }

  // Helper funcation to delete scenario after serving it
  function deleteScenario() {
    // Splitting the session cookie into individual comma separeted strings
    var toDoArray = sessionStorage.getItem('toDoArray').split(',');
    // Removing the one which was served
    toDoArray.splice(random, 1);
    // Merging remaining back again
    var result = toDoArray.join();
    // Overwriting newly updated string in sessionStorage
    sessionStorage.setItem('toDoArray', result);
    // console.log(toDoArray);

    // With each deletion after serving, number of elements in toDoArray is reduced until reach 0.
    if(toDoArray.length < 1) {
      // In that case toDoArray will be populated back again with starting 4 scenarios
      sessionStorage.setItem('toDoArray', toDoElements);
    }
  }
}


