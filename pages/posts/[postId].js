import React from 'react'

function Post({ post }) {
    return (
        <>
            <h2>{post.title}</h2>
            <h3>{post.body}</h3>
        </>
    )
}
export default Post

export async function getStaticPaths() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postJson = await posts.json()

    const paths = postJson.map(post => {
        return {
            params : { postId: `${post.id}`}
        }
    })
    return {
        // paths: [
        //     {
        //         params: {postId: '1'}
        //     },
        //     {
        //         params: {postId: '2'}
        //     },
        //     {
        //         params: {postId: '3'}
        //     }
        // ],
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const postJson = await posts.json()

    return {
        props: {
            post: postJson
        }
    }
}