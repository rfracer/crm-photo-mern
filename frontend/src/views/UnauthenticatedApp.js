import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'views/Login';
import Register from 'views/Register';

const UnauthenticatedApp = () => {
  const [message, setMessage] = useState('');

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <AuthTemplate>
      <Routes>
        <Route path="/login" element={<Login message={message} />} />
        <Route
          path="/register"
          element={<Register handleMessage={handleMessage} />}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </AuthTemplate>
  );
};

export default UnauthenticatedApp;
