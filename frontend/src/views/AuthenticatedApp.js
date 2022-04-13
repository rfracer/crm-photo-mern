import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Clients from 'views/Clients';
import AddClient from 'views/AddClient';
import EditClient from 'views/EditClient';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/clients">
          <Route path="edit/:id" element={<EditClient />} />
          <Route path="add" element={<AddClient />} />
          <Route index element={<Clients />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
