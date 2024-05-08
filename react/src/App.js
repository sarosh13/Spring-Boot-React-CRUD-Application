// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import ListItems from './components/ListItems';
import ViewItem from './components/ViewItem';
import EditItem from './components/EditItem';
import AddItem from './components/AddItem';

function App() {
  return (
    <>
      <Router>
        <Navbar></Navbar>
        <div className='container mt-3'>
          <Routes>
            <Route path='/' element={<ListItems/>}></Route>
            <Route path='/products' element={<ListItems/>}></Route>
            <Route path='/products/:id' element={<ViewItem />}></Route>
            <Route path='/products/:id/edit' element={<EditItem />}></Route>
            <Route path='/products/add' element={<AddItem />}></Route>
          </Routes>
        </div>
      </Router>
    </>

  );
}

export default App;
