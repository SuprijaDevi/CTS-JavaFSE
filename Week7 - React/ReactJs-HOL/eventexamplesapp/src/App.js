import React from 'react';
import Counter from './Components/Counter';
import SayWelcome from './Components/SayWelcome';
import SyntheticEvent from './Components/SyntheticEvent';
import CurrencyConvertor from './Components/CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <h1>Event Examples App</h1>
      <Counter />
      <SayWelcome />
      <SyntheticEvent />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
