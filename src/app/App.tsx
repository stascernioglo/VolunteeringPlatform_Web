import './App.css';
import { createContext, useEffect, useState } from 'react';
import authService from 'features/auth/authService';
import { getRole } from 'features/auth/roleDecoder';
import setAuthorizationToken from 'features/auth/setAuthorizationToken';
import Routing from './Routing';

const AuthContext = createContext<{ isLoggedIn: boolean; setLoggedStatus: (isLoggedIn: boolean) => void; role : string | null}>({ isLoggedIn: false, setLoggedStatus: () => {}, role: null });
export {AuthContext}

function App() {

  const [isLoggedIn, setLoggedStatus] = useState<boolean>(false);
  const [role, setRole] = useState<string | null>(null);

  useEffect( ()=> {
    (authService.getCurrentUser()) ? setLoggedStatus(true) : setLoggedStatus(false);
  }, []);

  useEffect( () => {
    setRole(getRole(authService.getCurrentUser()));
    setAuthorizationToken(authService.getCurrentUser());
  }, [isLoggedIn])

  return (
    <>
    <AuthContext.Provider value={{isLoggedIn, setLoggedStatus, role}}>
      <Routing />
    </AuthContext.Provider>
    </>
  );
}

export default App;
