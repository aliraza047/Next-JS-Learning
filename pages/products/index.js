import Link from 'next/link'

 function Products() {
  return (
    <div>
      <ul>
      <Link href={"/products/1"}><li>Product 1st</li></Link>
      <li>Product 2st</li>
      <li>Product 3st</li>
      </ul>
    </div>
  )
}


export default Products
