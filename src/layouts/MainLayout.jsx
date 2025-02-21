/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from '@/components/Nav'
import { Slot } from '@radix-ui/react-slot'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen pt-16">     
      <Nav />
      <Outlet />
    </div>

  )
}

export default MainLayout