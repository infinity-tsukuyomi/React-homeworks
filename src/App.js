import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import CommentsPage from "./pages/CommentsPage/CommentsPage";

function App() {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Layout/>}>

                    <Route index element={<Navigate to={'users'}/>}/>

                    <Route path={'users'} element={<UsersPage/>}/>

                    <Route path={'posts'} element={<PostsPage/>}/>

                    <Route path={'comments'} element={<CommentsPage/>}/>

                </Route>
            </Routes>
        </div>
    );
}

export default App;
