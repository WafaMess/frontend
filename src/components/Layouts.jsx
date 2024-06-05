import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../layouts/Header'

const AdminLayOuts = () => {
  return (
    <div className="container">
        <Header />
        <div className="main-section">
            <Outlet />
        </div>
    </div>
  )
}

export default AdminLayOuts