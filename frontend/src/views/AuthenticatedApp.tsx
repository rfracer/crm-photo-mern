import React from 'react';
import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'views/Dashboard/Dashboard';
import Clients from 'views/Clients/Clients';
import AddClient from 'views/Clients/AddClient';
import EditClient from 'views/Clients/EditClient';
import Tasks from 'views/Tasks/Tasks';
import Settings from 'views/Settings/Settings';
import NotFound from 'views/NotFound/NotFound';

const AuthenticatedApp = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="clients">
          <Route path="edit/:id" element={<EditClient />} />
          <Route path="add" element={<AddClient />} />
          <Route index element={<Clients />} />
        </Route>
        <Route path="tasks">
          <Route index element={<Tasks />} />
        </Route>
        <Route path="settings" element={<Settings />} />
        <Route path="login" element={<Dashboard />} />
        <Route path="register" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </MainTemplate>
  );
};

export default AuthenticatedApp;
