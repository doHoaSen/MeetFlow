import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation.tsx';
import Calendar from './components/Calendar/Calendar.tsx';
import CreateMeeting from './pages/CreateMeeting.tsx';
import EventPage from './pages/EventPage.tsx'; // 추가된 페이지 컴포넌트
import './App.css';

const App: React.FC = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };

  return (
    
      <div className="App">
        <Navigation isSidebarVisible={isSidebarVisible} toggleSidebar={toggleSidebar} />
        <div className={`main-content ${isSidebarVisible ? 'sidebar-open' : ''}`}>
          <Routes>
            {/* exact 속성 제거 (v6 기본 동작) */}
            <Route path="/" element={<Calendar />} />
            <Route path="/createMeeting" element={<CreateMeeting />} />
            <Route path="/event/:eventId" element={<EventPage />} />
          </Routes>
        </div>
      </div>
   
  );
};

export default App;
