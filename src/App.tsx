import { BrowserRouter, Route } from 'react-router-dom'
import { AuthContextProvider } from './contexts/AuthContext';

import { Home } from './pages/Home';
import { NewRoom } from './pages/NewRoom';

function App() {

  return (
   
    <BrowserRouter>

      <AuthContextProvider>
      {/* se o path for vazio o exact não precisa de parametro */}
        <Route path="/" exact component={Home} /> {/*exact verifica se o que foi passado no path é exatamente o que foi escrito. Do contrário ele procuraria se inicia com o que foi passado*/}
        <Route path="/rooms/new" component={NewRoom} />
      </AuthContextProvider>
    </BrowserRouter>
      
  );
}

export default App;
