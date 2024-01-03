import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import PostDetails from "./components/PostDetails/PostDetails";
import Comments from "./components/Comments/Comments";
import UserDetails from "./components/UserDetails/UserDetails";
import UserPosts from "./components/UserPosts/UserPosts";

function App() {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<Layout/>}>

                <Route index element={<Navigate to={'users'}/>}/>

                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<UserDetails/>}>
                        <Route path={'posts'} element={<UserPosts/>}/>
                    </Route>
                </Route>

                <Route path={'posts'} element={<PostsPage/>}>
                    <Route path={':id'} element={<PostDetails/>}>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                </Route>

            </Route>
        </Routes>
    </div>
  );
}

export default App;
