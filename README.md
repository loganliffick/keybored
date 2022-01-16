# keybored.js

![npm](https://badgen.net/npm/v/keyboredjs)
![bundlephobia](https://badgen.net/bundlephobia/min/keyboredjs)
![bundlephobia](https://badgen.net/bundlephobia/minzip/keyboredjs)
![npm](https://badgen.net/npm/dependents/keyboredjs)
![npm](https://badgen.net/npm/dw/keyboredjs)

<p>Your new favorite on-screen keyboard!</p>
<p>Support keybored's creator <a href="https://www.buymeacoffee.com/loganliffick">here</a>.</p>

## Install

```
$ npm i keyboredjs
```

<p>Add the <a href="https://github.com/loganliffick/keybored/blob/main/src/keybored.css">CSS file</a> to your project.</p>

## Basic Usage

```js
import Keybored from 'keyboredjs';
import './keybored.css';

Keybored({
  whatKey: false,
  keyboard: 'std',
  function: (key) => {
    console.log(key); // basic keypress logging function
  },
});

const App = () => {
  return <div className="App"></div>;
};

export default App;
```

## Documentation

<p>View full documentation at <a href="https://www.keyboredjs.com">keyboredjs.com</a></p>
