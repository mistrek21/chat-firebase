import { useState } from 'react'
import ChatScreen from './pages/ChatScreen';
import Login from './pages/Login';
import Sidebar from './pages/Sidebar';

import firebaseApp from './firebase/credentials';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(firebaseApp)

function App() {
  const [user, setUser] = useState(null)
  const [currentChannel, setCurrentChannel] = useState(null)

  onAuthStateChanged(auth, (userFirebase) => {
    // check if we start or finish the session
    if (userFirebase) {
      setUser(userFirebase)
    } else {
      setUser(null)
    }
  })

  return (
    <div className="app">
      {user ? (
        <>
          {" "}
          <Sidebar
            user={user}
            setCurrentChannel={setCurrentChannel}
          />
          <ChatScreen
            currentChannel={currentChannel}
          />{" "}
        </>
      ) : (
        <Login />
      )

      }
    </div>
  );
}

export default App;
