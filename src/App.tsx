import Routers from "./components/Routers";

import { AuthContextProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthContextProvider>
      <Routers />
    </AuthContextProvider>
  );
}

export default App;
