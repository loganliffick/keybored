# keybored

![npm](https://badgen.net/npm/v/keybored)
![bundlephobia](https://badgen.net/bundlephobia/min/keybored)
![bundlephobia](https://badgen.net/bundlephobia/minzip/keybored)
![npm](https://badgen.net/npm/dependents/keybored)
![npm](https://badgen.net/npm/dw/keybored)

<p>React-based keyboard UI library</p>
<p><a href="https://www.buymeacoffee.com/loganliffick">Support keybored's creator</a> and help support new feature development</p>

## Install

```
$ npm i keybored
```

<p>Add the <a href="https://github.com/loganliffick/keybored/blob/main/src/css/keybored.css">CSS file</a> to your project</p>

## Basic Usage

```js
import Keybored from 'keybored';
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

## Want to contribute?

<p>keybored is an open-source project, submit a PR! Any help, ideas, etc. is appreciated.</p>
