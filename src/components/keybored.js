const Keybored = (props) => {
  const output = props.function;

  const buildKeyboard = () => {
    let keys;
    let gridArea;
    const container = document.createElement('div');
    if (props.keyboard === 'std') {
      keys = [
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        'Space',
        'Enter',
        'Backspace',
      ];
      gridArea = [
        '"Q W E R T Y U I O P" "A S D F G H J K L ⏎" ". Z X C V B N M ⌫ ⏎" ". . ⎵ ⎵ ⎵ ⎵ ⎵ . . ."',
      ];
      container.classList.add('stdContainer');
    } else if (props.keyboard === 'wasd') {
      keys = ['W', 'A', 'S', 'D', 'Space'];
      gridArea = ['". W . . ." "A S D . ." ". ⎵ ⎵ ⎵ ."'];
      container.classList.add('wasdContainer');
    }

    document.body.appendChild(container);
    container.style.gridTemplateAreas = gridArea[0];

    const keyCreate = (key) => {
      const element = document.createElement('button');
      if (key === 'Space') {
        element.classList.add('keyButton', key);
        element.innerHTML = '⎵';
        element.style.gridArea = '⎵';
      } else if (key === 'ShiftRight' || key === 'ShiftLeft') {
        element.classList.add('keyButton', key);
        element.innerHTML = '⇧';
        element.style.gridArea = '⇧';
      } else if (key === 'Backspace') {
        element.classList.add('keyButton', key);
        element.innerHTML = '⌫';
        element.style.gridArea = '⌫';
      } else if (key === 'Enter') {
        element.classList.add('keyButton', key);
        element.innerHTML = '⏎';
        element.style.gridArea = '⏎';
      } else {
        element.classList.add('keyButton', 'Key' + key);
        element.innerHTML = '' + key + '';
        element.style.gridArea = key;
      }
      element.ariaLabel = key + ' key input';
      container.appendChild(element);
    };
    for (let e = 0; e < keys.length; e++) {
      keyCreate(keys[e]);
    }
  };
  buildKeyboard();

  const keyButton = document.querySelectorAll('.keyButton');

  // add keystroke animation
  const playAnimation = (i) => {
    keyButton[i].classList.add('keyPress');
    setTimeout(() => {
      keyButton[i].classList.remove('keyPress');
    }, 150);
  };

  // add click input
  for (let i = 0; i < keyButton.length; i++) {
    keyButton[i].addEventListener('click', () => {
      if (props.function === undefined) {
      } else {
        output(document.activeElement.classList[1]);
      }
    });
  }

  // add keystroke input
  const keyStroke = (e) => {
    const active = document.activeElement;
    const pressedKey = e.code;
    if (props.whatKey === true) {
      console.log(pressedKey);
    }
    for (let i = 0; i < keyButton.length; i++) {
      if (
        (keyButton[i].classList.contains(pressedKey) &&
          pressedKey !== 'Space' &&
          pressedKey === active) ||
        (keyButton[i].classList.contains(pressedKey) &&
          active.classList.length === 0)
      ) {
        playAnimation(i);
        if (props.function === undefined) {
        } else {
          output(pressedKey);
        }
      } else if (
        (keyButton[i] === active && pressedKey === 'Enter') ||
        (keyButton[i] === active && pressedKey === 'Space')
      ) {
        playAnimation(i); // no output trigger, this is done via click function
      }
    }
  };
  document.addEventListener('keydown', keyStroke);
};

export default Keybored;
