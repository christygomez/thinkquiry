import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useState } from 'react';
import Home from './components/Home.jsx';
import Room from './components/Room.jsx';
import Navbar from './components/Navbar';

const App = () => {
  const [socket, setSocket] = useState('');

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <Home setSocket={setSocket} />
          </Route>
          <Route path='/:roomName' children={<Room socket={socket} />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
