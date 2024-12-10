//import React from 'react'
import { useEffect } from 'react';
import { Route, Routes } from 'react-router';
import UserPage from './user';

export default function AdminPage() {

  return (
    <>
    <Routes>
        <Route path="/admin/user" element={<UserPage />} />
    </Routes>
    </>
  )
}
