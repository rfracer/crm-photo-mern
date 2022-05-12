import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Login from 'views/Auth/Login';
import Register from 'views/Auth/Register';

const UnauthenticatedApp = () => {
  const [message, setMessage] = useState('');

  const handleMessage = (msg: string) => {
    setMessage(msg);
  };

  return (
    <AuthTemplate>
      <Routes>
        <Route path="*" element={<Login message={message} />} />
        <Route
          path="/register"
          element={<Register handleMessage={handleMessage} />}
        />
      </Routes>
    </AuthTemplate>
  );
};

export default UnauthenticatedApp;
