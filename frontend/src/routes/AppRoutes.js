// src/routes/AppRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import Dashboard from '../pages/Dashboard';
import BoulderList from '../pages/BoulderList';
import BoulderDetail from '../pages/BoulderDetail';
import RouteDetail from '../pages/RouteDetail';
import CheckInScreen from '../pages/CheckInScreen';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRoute from './PrivateRoute';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/checkins" element={<PrivateRoute><CheckInScreen /></PrivateRoute>} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
      <Route
        path="/boulders"
        element={
          <PrivateRoute>
            <BoulderList />
          </PrivateRoute>
        }
      />
      <Route
        path="/boulders/:id"
        element={
          <PrivateRoute>
            <BoulderDetail />
          </PrivateRoute>
        }
      />
      <Route
        path="/routes/:id"
        element={
          <PrivateRoute>
            <RouteDetail />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
