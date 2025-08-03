import React, { useState } from 'react';
import Greeting from './Components/Greeting';
import LoginButton from './Components/LoginButton';
import LogoutButton from './Components/LogoutButton';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
  }

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '30px' }}>
      <h1>Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />
      <br />
      {button}
    </div>
  );
}

export default App;
