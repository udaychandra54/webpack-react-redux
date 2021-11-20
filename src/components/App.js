
import React from 'react';
import '../css/main.scss';
import {Routes,Route} from "react-router-dom";
import Home from './Home';
import Navbar from './Navbar';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {
    return (
        <div className='container-fluid px-0'>
            <Navbar/>
            <Routes>
                <Route path='/home' element={<Home/>}/>
                <Route path='/add' element={<AddContact/>}/>
                <Route path='/list' element={<ContactList/>}/>
            </Routes>
        </div>
    )
}

export default App
