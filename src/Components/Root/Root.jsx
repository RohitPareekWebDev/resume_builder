import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

export default Root
