import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'views/Login';
import Register from 'views/Register';

const UnauthenticatedApp = () => {
  return (
    <AuthTemplate>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthTemplate>
  );
};

export default UnauthenticatedApp;
