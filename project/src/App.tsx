import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BiddingSystem from './pages/BiddingSystem';
import Logistics from './pages/Logistics';
import Marketplace from './pages/Marketplace';
import EquipmentRental from './pages/EquipmentRental';
import Community from './pages/Community';
import Profile from './pages/Profile';
import Auth from './pages/Auth';
import ListItem from './pages/ListItem';
import ChatBot from './components/ChatBot';
import './App.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bidding" element={<BiddingSystem />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/equipment" element={<EquipmentRental />} />
          <Route path="/community" element={<Community />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/list" element={<ListItem />} />
        </Routes>
        <ChatBot />
      </Layout>
    </Router>
  );
}

export default App;