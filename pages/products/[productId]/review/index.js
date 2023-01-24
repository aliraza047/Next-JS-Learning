import Link from 'next/link'
import React from 'react'

export default function index() {
  return (
    <>
    <div>Product Review</div>
    <Link href={"/products/1/review/23"}><li>Review 1st</li></Link>
      <li>Review 2st</li>
      <li>Review 3st</li>
      </>
  )
}
