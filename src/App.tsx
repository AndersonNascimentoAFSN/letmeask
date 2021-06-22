import React, {createContext, useState} from 'react';
import Routers from "./components/Routers";
import { auth, firebase } from './services/firebase';


type User = {
  id: string;
  name: string;
  avatar: string;
}

type AuthContextType = {
  user: User | undefined;
  signInWithGoogle: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

function App() {
  const [user, setUser] = useState<User>();

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();

    const result = await auth.signInWithPopup(provider);
    
    if(result.user) {
      const { displayName, photoURL, uid } = result.user;
      
      if(!displayName || !photoURL) {
        throw new Error("Missing information from google Account.");
    }

    setUser({
      id: uid,
      name: displayName,
      avatar: photoURL,
    });

    }
  }

  return (
    <AuthContext.Provider value={{ user, signInWithGoogle }}>
      <Routers />
    </AuthContext.Provider>
  );
}

export default App;
