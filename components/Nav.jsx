import React from 'react'
import "@app/globals.css"
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='nav fixed top-0 left-0 right-0 flex justify-between z-10 '>
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
