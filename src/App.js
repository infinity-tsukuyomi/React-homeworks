import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UsersDetails from "./components/UsersDetails/UsersDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'

function App() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);

    const getUser = (user) => {
      setUser(user)
        setUserId(null)
    }

    const getUserId = (id) => {
        setUserId(id)
    }

  return (
    <div>
       <div className={css.wrap}>
           <Users getUser={getUser}/>
           {user && <UsersDetails user={user} getUserId={getUserId}/>}
       </div>
        {userId && <Posts userId={userId}/>}
    </div>
  );
}

export default App;
