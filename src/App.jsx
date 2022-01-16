import './keybored.css';
import Keybored from './keybored';

Keybored({
  whatKey: false,
  keyboard: 'std',
  function: (key) => {
    let writer = document.getElementById('write');
    let script = writer.innerHTML.split('');

    if (key === 'Backspace') {
      script.pop();
      writer.innerHTML = script.join('');
    } else if (key === 'Space') {
      writer.innerHTML = writer.innerHTML + ' ';
    } else if (key === 'Enter') {
    } else {
      writer.innerHTML = writer.innerHTML + key.charAt(3).toLowerCase();
    }
  },
});

const App = () => {
  return (
    <>
      <p id="write"></p>
    </>
  );
};

export default App;
