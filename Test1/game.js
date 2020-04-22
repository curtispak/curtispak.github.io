var textElement = document.getElementById('text')
var optionButtonsElement = document.getElementById('option-buttons') //allow interactivty between button and javascript
var state = {}

function preload(){
  sound = loadSound("backgroundmusic.mp3");

}
function setup(){
  sound.setVolume(1);
  sound.play();
}

function mousePressed(){
  if(mousePressed){
    sound.play();
  }
}

function startGame() {
  state = {} // state of the game
  showTextNode(1) //the various text in the game
}

function showTextNode(textNodeIndex) {
  var textNode = textNodes.find(textNode => textNode.id === textNodeIndex) //finding the correct texts for the buttons
  textElement.innerText = textNode.text // show text for spoopy skeleton dialogue
  while(optionButtonsElement.firstChild) { // while loop removes the options
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      var button = document.createElement('button') // creating new buttons after the presses of the last one
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option)) // allowing the clinking of the buttons
      optionButtonsElement.appendChild(button)
    }
  })
}

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option) {
  var nextTextNodeId = option.nextText // getting the next set of texts
  if (nextTextNodeId <= 0) {
    return startGame()
  }
  showTextNode(nextTextNodeId)
}

var textNodes = [ //array of the various answers and options
  {
    id: 1,
    text: 'asdf',
    options: [
      {
        text: 'CONTINUE',

        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'asdf?',
    options: [
      {
        text: 'ENTER',

        nextText: 3
      }
    ]
  },

  {
    id: 3,
    text: 'asdf?',
    options: [
      {
        text: 'asdf',

        nextText: 4
      },
      {
        text: 'asdf',
        nextText: 12
      }
    ]
  },
  {
    id: 4,
    text: 'asdf?',
    options: [
      {
        text: 'asdf!',
        nextText: 14
      },
      {
        text: 'asdf!',
        nextText: 5
      },
      {
        text: 'asdf',
        nextText: 10
      }
    ]
  },
  {
    id: 5,
    text: 'asdf',
    options: [
      {
        text: 'asdf',
        nextText: 6
      },
      {
        text: 'asdf',
        nextText: 12
      },
    ]
  },
  {
    id: 6,
    text: 'Tasdf',
    options: [
      {
        text: '2',
        nextText: 7
      },
      {
      text: '11?',
      nextText: 11
    },
    {
      text: 'asdf?',
      nextText: 11
  },
  ]
},
  {
    id: 7,
    text: 'asdf',
    options: [
      {
        text: 'asdf',
        nextText: 10
      },
      {
        text: 'asdf',
        nextText: 8
      },
      {
        text: 'asdf',
        nextText: 12
      }
    ]
  },
  {
    id: 8,
    text: 'asdf? ',
    options: [
      {
        text: 'asdf',
        nextText: 9
      }
    ]
  },
  {
    id: 9,
    text: 'asdf?',
    options: [
      {
        text: 'asdf',
        nextText: 11
      },
      {
        text: 'asdf',
        nextText: 13
      },
      {
        text: 'asdf',
        nextText: 12
      },
    ]
  },
  {
    id: 10,
    text: 'asdf',
    options: [
      {
        text: 'asdf',
        nextText: -1
      }
    ]
  },
  {
    id: 11,
    text: 'asdf.',
    options: [
      {
        text: 'asdf?',
        nextText: -1
      }
    ]
  },
  {
    id: 12,
    text: 'asdf',
    options: [
      {
        text: 'asdf',
        nextText: -1
      }
    ]
  },
  {
    id: 13,
    text: 'asdf',
    options: [
      {
        text: 'asdf',
        nextText: 1
      }
    ]
  },
  {
    id: 14,
    text: 'asdf',
    options: [
      {
        text: 'asdf',
        nextText: -1
      }
    ]
  },
 ]

startGame()
