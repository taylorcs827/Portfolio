import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '/pages/Home';
import ProjectDetail from '/pages/ProjectDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/work/:id" element={<ProjectDetail />} /> {/* This must match the URL structure */}
            </Routes>
        </Router>
    );
}

export default App;
