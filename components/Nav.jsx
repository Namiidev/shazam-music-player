import React from 'react'
import "@app/globals.css"
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='nav flex justify-between z-10'>
        <Link href="./">
          <img src="./explicitlogo.png" alt="logo" />
        </Link>
      <ul className=' mr-28'>
        <li className='list'>
          <Link href="./about">About</Link>
        </li>
        <li></li>
      </ul>
    </div>
  )
}

export default Nav
