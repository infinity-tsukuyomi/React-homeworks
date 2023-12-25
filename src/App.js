import React from 'react';
import {Routes, Route, Link, Navigate} from 'react-router-dom';

import css from './App.module.css';
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Layout from "./components/Layout/Layout";
import SinglePostPage from "./pages/SinglePostPage/SinglePostPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RequireAuth from "./hoc/RequireAuth";
import AuthProvider from "./hoc/AuthProvider";

function App() {

  return (
    <AuthProvider>
      <Routes>
          <Route path={'/'} element={<Layout/>}>
{/* Когда хотим сделать какую-то страницу главной, то можно дать ей параметр - index */}
            <Route index element={<HomePage/>}/>
{/* При роуте на юзерс, отрисуй RequireAuth и в середину него children (UserPage) */}
              <Route path={'users'} element={
                  <RequireAuth>
                      <UsersPage/>
                  </RequireAuth>
              }/>
            <Route path={'posts'} element={<PostsPage/>}>
{/* Динамичная страница, любое, что введем после слеш постс - кинет на эту стр(id - рандомное название) */}
                <Route path={':id'} element={<SinglePostPage/>}/>
            </Route>
            <Route path={'about'} element={<AboutPage/>}/>
{/* Допустим создали новую компоненту, не хотим прописывать ее, для этого есть Navigate */}
            <Route path={'about-us'} element={<Navigate to={'/about'}/>}/>
            <Route path={'login'} element={<LoginPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>
          </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
