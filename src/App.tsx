import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext';
import { AdminRoom } from './pages/AdminRoom';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';
import { Room } from './pages/Room';

function App() {

  return (
   
    <BrowserRouter>

      <AuthContextProvider>
        <Switch>
          {/* se o path for vazio o exact não precisa de parametro */}
          <Route path="/" exact component={Home} /> {/*exact verifica se o que foi passado no path é exatamente o que foi escrito. Do contrário ele procuraria se inicia com o que foi passado*/}
          <Route path="/rooms/new" component={NewRoom} />
          <Route path="/rooms/:id" component={Room} />
          <Route path="/admin/rooms/:id" component={AdminRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
      
  );
}

export default App;
