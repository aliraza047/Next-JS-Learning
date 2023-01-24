import Link from 'next/link';
import { useRouter } from 'next/router'

function SingleProduct({ params }) {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <>
            <div>`Product 1st {productId}`</div>
            <Link href={"/products/1/review"}>
            <div>`Product Review path`</div>
                </Link>
        </>
    )
}

export default SingleProduct;