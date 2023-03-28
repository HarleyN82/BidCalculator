import React from "react"
import {Routes, Route, useLocation} from 'react-router-dom';

import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { NewProject } from '../pages/NewProject';
import { Projects } from '..//pages/Projects';
import { Project } from '../pages/Project';

import {AnimatePresence} from 'framer-motion'

export function AnimatedRoutes(){

    const location = useLocation();

    return(
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/newproject" element={<NewProject/>}/>
                <Route path="/project/:id" element={<Project/>}/>
            </Routes>
        </AnimatePresence>
    )
}