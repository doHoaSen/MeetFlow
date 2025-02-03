import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
  isSidebarVisible: boolean;
  toggleSidebar: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isSidebarVisible, toggleSidebar }) => {
  return (
    <div>
      {/* 햄버거 메뉴 버튼 */}
      <button className={`hamburger-menu ${isSidebarVisible ? 'open' : ''}`} onClick={toggleSidebar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      {/* 사이드바 */}
      <div className={`sidebar ${isSidebarVisible ? 'open' : ''}`}>
        <div className="menu">
          <h2 className="logo">Meet Flow</h2>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/createMeeting">모임 만들기</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
