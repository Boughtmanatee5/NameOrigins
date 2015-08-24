(function() {
  'use strict';
  //data
  var adjectiveArray = ['Fucking', 'Shitty', 'Cum Stained', 'Dickish', 'Infected', 'Stupid', ];
  var pronounArray = ['Moron', 'Cock', 'Douche', 'Dickhead', 'Asshole', 'Donkey Fucker', 'Fister', 'Anal Wart'];
  var languagesArray = ['Latin', 'Greek', 'Egyptian', 'Etheopian'];

  //wrapper elements
  var inputWrapper = document.getElementById('inputWrapper');
  var displayWrapper = document.getElementById('displayWrapper');

  //form elements
  var formEl = document.getElementById('nameForm');
  var inputEl = document.getElementById('nameInput');
  var submitButtons = document.getElementsByClassName('formSubmit');

  // display elements
  var nameDisplay = document.getElementById('nameDisplay');
  var originDisplay = document.getElementById('originDisplay');
  var meaningDisplay = document.getElementById('meaningDisplay');

  //callback
  function onSubmit(e) {
    e.preventDefault();
    if (inputEl.value.length === 0 ){ return };

    var nameArray = [];
    var originArray = selectDisplayValue(languagesArray);
    var meaningArray = selectDisplayValue(adjectiveArray, pronounArray);

    var name = inputEl.value
    var nameLength = name.length;
    var middleIndex = Math.round(nameLength / 2);

    nameArray.push(name.substring(0, middleIndex), name.substring(middleIndex, nameLength));

    setDisplayText(nameDisplay, nameArray);
    setDisplayText(originDisplay, originArray);
    setDisplayText(meaningDisplay, meaningArray)
    inputWrapper.classList.add('hidden');
    displayWrapper.classList.remove('hidden');
  }

  //helper functions
  function setDisplayText(el, textArray) {
    el.firstElementChild.innerHTML = textArray[0];
    el.lastElementChild.innerHTML = textArray[1];
  }

  function selectDisplayValue(arrayOne, arrayTwo) {
    var textArray = [];
    if (arguments.length === 1) {
      for(var i = 0; i <= 1; i++) {
        textArray.push( 'Is a word of ' + arrayOne[getRandomNumber(0, arrayOne.length - 1)] + ' origin, meaning:' );
      }
    } else {
      textArray.push( arrayOne[getRandomNumber(0, arrayOne.length - 1)], arrayTwo[getRandomNumber(0, arrayOne.length - 1)] );
    }
    return textArray;
  }

  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //register callbacks
  formEl.addEventListener('submit', onSubmit)
  for (var i = 0; i <= submitButtons.length - 1; i++) {
    console.log('submitButton', submitButtons[i]);
    submitButtons[i].addEventListener('click', onSubmit);
  }
}());
