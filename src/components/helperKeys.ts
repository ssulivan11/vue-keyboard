export const vortexKeyboard = {
  keyboardRowFunctionalArr: [
    { key: 'Escape', classes: 'key key--color-red key--oneandhalf' },
    { key: 'F1', classes: 'key' },
    { key: 'F2', classes: 'key' },
    { key: 'F3', classes: 'key' },
    { key: 'F4', classes: 'key' },
    { key: 'F5', classes: 'key key--color-gray' },
    { key: 'F6', classes: 'key key--color-gray' },
    { key: 'F7', classes: 'key key--color-gray' },
    { key: 'F8', classes: 'key key--color-gray' },
    { key: 'F9', classes: 'key' },
    { key: 'F10', classes: 'key' },
    { key: 'F11', classes: 'key' },
    { key: 'F12', classes: 'key' },
    { key: 'Pn', classes: 'key key--color-gray' },
    { key: 'Delete', classes: 'key key--color-gray key--oneandhalf' },
  ],
  keyboardRowNumericArr: [
    { key: '`', subKey: '~', classes: 'key' },
    { key: '1', subKey: '!', classes: 'key' },
    { key: '2', subKey: '@', classes: 'key' },
    { key: '3', subKey: '#', classes: 'key' },
    { key: '4', subKey: '$', classes: 'key' },
    { key: '5', subKey: '%', classes: 'key' },
    { key: '6', subKey: '^', classes: 'key' },
    { key: '7', subKey: '&', classes: 'key' },
    { key: '8', subKey: '*', classes: 'key' },
    { key: '9', subKey: '(', classes: 'key' },
    { key: '0', subKey: ')', classes: 'key' },
    { key: '-', subKey: '_', classes: 'key' },
    { key: '=', subKey: '+', classes: 'key' },
    { key: 'Backspace', classes: 'key key--delete key--color-gray' },
    { key: 'Home', classes: 'key key--color-gray' },
  ],
  keyboardRowAlphaOneArr: [
    { key: 'Tab', classes: 'key key--oneandhalf key--color-gray' },
    { key: 'q', classes: 'key' },
    { key: 'w', classes: 'key' },
    { key: 'e', classes: 'key' },
    { key: 'r', classes: 'key' },
    { key: 't', classes: 'key' },
    { key: 'y', classes: 'key' },
    { key: 'u', classes: 'key' },
    { key: 'i', classes: 'key' },
    { key: 'o', classes: 'key' },
    { key: 'p', classes: 'key' },
    { key: '[', subKey: '{', classes: 'key' },
    { key: ']', subKey: '}', classes: 'key' },
    { key: '\\', subKey: '|', classes: 'key key--oneandhalf' },
    { key: 'PageUp', classes: 'key key--color-gray' },
  ],
  keyboardRowAlphaTwoArr: [
    { key: 'CapsLock', classes: 'key key--caps key--color-gray' },
    { key: 'a', classes: 'key' },
    { key: 's', classes: 'key' },
    { key: 'd', classes: 'key' },
    { key: 'f', classes: 'key' },
    { key: 'g', classes: 'key' },
    { key: 'h', classes: 'key' },
    { key: 'j', classes: 'key' },
    { key: 'k', classes: 'key' },
    { key: 'l', classes: 'key' },
    { key: ';', subKey: ':', classes: 'key' },
    { key: "'", subKey: '"', classes: 'key' },
    { key: 'Enter', classes: 'key key--enter' },
    { key: 'PageDown', classes: 'key key--color-gray' },
  ],
  keyboardRowAlphaThreeArr: [
    { key: 'Left Shift', classes: 'key key--shift-left key--color-green' },
    { key: 'z', classes: 'key' },
    { key: 'x', classes: 'key' },
    { key: 'c', classes: 'key' },
    { key: 'v', classes: 'key' },
    { key: 'b', classes: 'key' },
    { key: 'n', classes: 'key' },
    { key: 'm', classes: 'key' },
    { key: ',', classes: 'key' },
    { key: '.', classes: 'key' },
    { key: '/', subKey: ':', classes: 'key' },
    { key: 'Right Shift', classes: 'key key--oneandhalf key--color-green' },
    { key: 'ArrowUp', icon: 'arrow-up', classes: 'key key--color-yellow' },
    { key: 'End', classes: 'key key--color-gray' },
  ],
  keyboardRowControlArr: [
    { key: 'Left Control', classes: 'key key--bottom-funct key--color-red' },
    { key: 'Left Alt', subKey: 'option', classes: 'key key--bottom-funct key--color-grey' },
    {
      key: 'Left Meta',
      icon: 'command',
      subKey: 'command',
      classes: 'key key--bottom-funct key--color-grey',
    },
    { key: ' ', classes: 'key key--spacebar' },
    {
      key: 'Right Meta',
      icon: 'command',
      subKey: 'cmd',
      classes: 'key key--color-grey',
    },
    { key: 'Right Alt', subKey: 'option', classes: 'key key--color-grey' },
    { key: 'Right Control', classes: 'key key--color-red' },
    { key: 'ArrowLeft', icon: 'arrow-left', classes: 'key key--color-yellow' },
    { key: 'ArrowDown', icon: 'arrow-down', classes: 'key key--color-yellow' },
    { key: 'ArrowRight', icon: 'arrow-right', classes: 'key key--color-yellow' },
  ],
};
const keyboardRowFunctionalObj = vortexKeyboard.keyboardRowFunctionalArr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: false }),
  {},
);
const keyboardRowNumericObj = vortexKeyboard.keyboardRowNumericArr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: false }),
  {},
);
const keyboardRowAlphaOneObj = vortexKeyboard.keyboardRowAlphaOneArr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: false }),
  {},
);
const keyboardRowAlphaTwoObj = vortexKeyboard.keyboardRowAlphaTwoArr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: false }),
  {},
);

const keyboardRowAlphaThreeObj = vortexKeyboard.keyboardRowAlphaThreeArr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: false }),
  {},
);

const keyboardRowControlObj = vortexKeyboard.keyboardRowControlArr.reduce(
  (obj, item) => Object.assign(obj, { [item.key]: false }),
  {},
);

export const keyboardObject = {
  ...keyboardRowFunctionalObj,
  ...keyboardRowNumericObj,
  ...keyboardRowAlphaOneObj,
  ...keyboardRowAlphaTwoObj,
  ...keyboardRowAlphaThreeObj,
  ...keyboardRowControlObj,
};

console.warn(keyboardObject);
