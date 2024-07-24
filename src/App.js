import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar';
import AllTasks from './pages/AllTasks';
import ActiveTasks from './pages/ActiveTasks';
import CompletedTasks from './pages/CompletedTasks';
import './App.css';
const App = () => {
  return (
    <Router>
      <div className='container'>
        <div className='header'>
          <h1 style={{textAlign: 'center'}}>#todo</h1>
        </div>
        <div className='body'>
          <Topbar />
          <Routes>
            <Route path="/" element={<AllTasks />} />
            <Route path="/active" element={<ActiveTasks />} />
            <Route path="/completed" element={<CompletedTasks />} />
          </Routes>
        </div>
        <div className='footer'>
          <h5>created by Văn Hậu-devChallenges.io</h5>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
