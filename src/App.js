import React, {useState} from 'react';

import Users from "./components/Users/Users";
import UserDetails from "./components/UserDetails/UserDetails";
import Posts from "./components/Posts/Posts";
import css from './App.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import Post from "./components/Post/Post";
import User from "./components/User/User";
import PostDetails from "./components/PostDetails/PostDetails";

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
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={'users/:id'} element={<User/>}/>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetails/>}/>
                </Route>

            </Route>
        </Routes>
       {/*<div className={css.wrap}>*/}
       {/*    <Users getUser={getUser}/>*/}
       {/*    {user && <UserDetails user={user} getUserId={getUserId}/>}*/}
       {/*</div>*/}
       {/* {postUserId && <Posts userId={postUserId}/>}*/}
    </div>
  );
}

export default App;
