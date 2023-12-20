import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UsersDetails from "./components/UsersDetails/UsersDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'

function App() {
    const [user, setUser] = useState(null);
    const [postUserId, setPostUserId] = useState(null);

    const getUser = (user) => {
      setUser(user)
        setPostUserId(null)
    }

    const getUserId = (id) => {
        setPostUserId(id)
    }

  return (
    <div>
       <div className={css.wrap}>
           <Users getUser={getUser}/>
           {user && <UsersDetails user={user} getUserId={getUserId}/>}
       </div>
        {postUserId && <Posts userId={postUserId}/>}
    </div>
  );
}

export default App;
