import React from 'react'
import "@app/globals.css"
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='nav flex justify-between'>
      <h1>
        <Link href="./">Explicit</Link>
      </h1>
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
