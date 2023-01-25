import Link from 'next/link';
import { useRouter } from 'next/router'

function SingleReview({ params }) {
    const router = useRouter()
    const {productId , reviewId} = router.query
    return (
        <>
            <div>`Product id {productId} ReviewId Id {reviewId}`</div>
        </>
    )
}

export default SingleReview;