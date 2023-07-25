import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Link href={'/contact'}><button>Create New Contact</button></Link>
    </div>
  )
}

export default Home
