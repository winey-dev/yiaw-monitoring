
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Page, PageHeader, PageSidebar  } from '@patternfly/react-core';
import Header from './layouts/Header';
import Menu from './layouts/Menu';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    // 쿠키나 세션에서 Authorization 정보를 확인하여 로그인 상태를 설정하는 로직을 수행합니다.
    const checkAuthorization = () => {

      return true;
    };

    const loggedIn = checkAuthorization();
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <Router>
      {isLoggedIn ? (
        <Page header={<Header isNavOpen={isNavOpen} onNavToggle={handleNavToggle} />} sidebar={<Menu isNavOpen={isNavOpen} />}>
          <Routes>
            <Route path="/main" element={<MainPage />} />
            <Route path="/" element={<Navigate to="/main" replace />} />
          </Routes>
        </Page>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
