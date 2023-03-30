import React from "react"
import {Routes, Route, useLocation} from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { NewItem } from '../pages/NewItem';
import { Itens } from '..//pages/Itens';
import { Item } from '../pages/Item';

import {AnimatePresence} from 'framer-motion'

export function AnimatedRoutes(){

    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/itens" element={<Itens/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/newitem" element={<NewItem/>}/>
                <Route path="/item/:id" element={<Item/>}/>
            </Routes>
        </AnimatePresence>
    )
}