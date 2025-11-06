import React from 'react'
import Link from 'next/link'

export default function Homepage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/dashboard">Go to Login Modal</Link>
    </div>
  )
}
