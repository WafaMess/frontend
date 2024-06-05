import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../layouts/Header'
import AdminHeader from '../../layouts/AdminHeader'

const Layouts = () => {
  return (
    <div className="container">
        <AdminHeader />
        <div className="main-section">
            <Outlet />
        </div>
    </div>
  )
}

export default Layouts