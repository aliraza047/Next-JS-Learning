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
            <h3>{post.body}</h3>
        </>
    )
}
export default SinglePost

export async function getStaticPaths() {
    // const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    // const postJson = await posts.json()

    // const paths = postJson.map(post => {
    //     return {
    //         params : { postId: `${post.id}`}
    //     }
    // })
    return {
        paths: [
            {
                params: {postId: '1'}
            },
            {
                params: {postId: '2'}
            },
            {
                params: {postId: '3'}
            }
        ],
        // paths,
        // fallback: true
        fallback: blocking
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const postJson = await posts.json()

    console.log('params.postId ==>', params.postId, postJson.id)

    if(!postJson.id){
        return {
            notFound: true
        }
    }

    return {
        props: {
            post: postJson
        }
    }
}