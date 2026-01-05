import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { login, logout } from './store/authSlice.js';
import { getCurrentUser } from './appwrite/authContext';
import Header from './components/Header.jsx';
import Footer from './components/Footer';

function App() {
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function verifyUser() {
      const userProfile = await getCurrentUser();
      userProfile ? dispatch(login({ userProfile })) : dispatch(logout());
      setIsLoading(false);
    }
    verifyUser();
  }, []);

  if (isLoading) {
    return (
      <>
        {/* <h1 className="text-2xl justify-center text-center p-4">Tech Blog with APPWRITE</h1> */}
        <div className="flex flex-row min-h-screen justify-center items-center">
          Loading...
        </div>
      </>
    );
  }

  return (
    <>
      <Header />
      <h1 className="text-2xl justify-center text-center p-4">Tech Blog with APPWRITE</h1>
      <Footer />
    </>
  )
}

export default App
