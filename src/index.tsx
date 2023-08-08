import React from 'react';

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import MainLayout from './components/Layout/MainLayout';
import MentorProfile from './components/MentorProfile/MentorProfile';

const App: React.FC = () => (
  <BrowserRouter>
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor/:mentorId" element={<MentorProfile />} />
      </Routes>
    </MainLayout>
  </BrowserRouter>
);
const rootElement = createRoot(document.getElementById('root'));
rootElement.render(<App />);
