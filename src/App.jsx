import './css/index.css';
import './css/keybored.css';
import Keybored from './components/keybored';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    Keybored({
      whatKey: false,
      keyboard: 'std',
      nestIn: '.orange',
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
  }, []);
  return (
    <>
      <p id="write"></p>
      <div className="orange"></div>
      <div className="blue"></div>
    </>
  );
};

export default App;
