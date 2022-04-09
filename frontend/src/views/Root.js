import { MainTemplate } from 'components/templates/MainTemplate/MainTemplate';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from 'views/Dashboard';
import Clients from 'views/Clients';
import { AddClient } from './AddClient';

const Root = () => {
  return (
    <MainTemplate>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/clients" element={<Clients />}></Route>
        <Route path="clients/add" element={<AddClient />} />
      </Routes>
    </MainTemplate>
  );
};

export default Root;
