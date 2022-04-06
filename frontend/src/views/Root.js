import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';

const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  );
};

export default Root;
