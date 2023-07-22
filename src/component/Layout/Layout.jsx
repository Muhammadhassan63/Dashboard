import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar/Navbar'
import Data from '../Content/Data'

import style from './layout.module.css'
export default function Layout() {
  return (
    <div className={style.container}>
        <Sidebar/>
        <div className={style.navbar}>
        <Navbar/>
        <Data/>
        </div>

      
    </div>
  )
}
