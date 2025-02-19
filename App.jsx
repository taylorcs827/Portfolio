import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '/pages/Home';
import Project from '/pages/Project';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work/:id" element={<Project />} />
            </Routes>
        </Router>
    );
}

export default App;
