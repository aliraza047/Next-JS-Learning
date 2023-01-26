import { useRouter } from "next/router"

function SinglePost({ post }) {
    console.log('post =>',post)
    const router = useRouter()
    if(router.isFallback) {
        return <h1>Loading....</h1>
    }

    return (
        <>
            <h2>{post.title}</h2>
            <h3>{post.author}</h3>
            <h3>{post.price}</h3>
        </>
    )
}
export default SinglePost

export async function getStaticProps(context) {
    const { params } = context
    const posts = await fetch(`http://localhost:4000/posts/${params.postJson}`)
    const response = await posts.json()

    console.log('params.postId ==>', params.postJson, response)

    return {
        props: {
            post: response
        },
        revalidate: 30
        
    }
}

export async function getStaticPaths() {
    return {
        paths: [{ params: {postJson: '1'} }],
        fallback: true
    }
}