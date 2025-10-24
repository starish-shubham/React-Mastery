import React from 'react'

const Header = () => {
  return (
    <div>
      <h1>Welcome to my website!</h1>
      <nav>
        <ul>
            <a href="/">Home</a> | 
            <a href="/about">About</a> |
            <a href="/contact">Contact</a>
        </ul>
      </nav>
    </div>
  )
}

export default Header
