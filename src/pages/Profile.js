import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

export default function Profile() {

  const [user, setUser] = useState(null);

  const auth = getAuth();

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);


  return user ? <div><h1>{user.displayName}</h1><p>{user.email}</p></div> : 'Not Logged In'
    
}
