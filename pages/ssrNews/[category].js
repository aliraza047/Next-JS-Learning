
function SinglePost({ post }) {
    console.log('post =>', post)
    return (
        post.map(data => {
            return (
                <>
                    <h2>{data.title}</h2>
                    <h3>{data.price}</h3>
                    <h3>{data.catgory}</h3>
                    <hr></hr>
                </>
            )
        })
    )
}
export default SinglePost

export async function getServerSideProps(context) {
    const { params, req, res } = context
    // console.log('Header ==>', req.header.cookie)
    // res.setHeader('Set-Cookie', ['name=Ali Raza'])
    const posts = await fetch(`http://localhost:4000/news?catgory=${params.category}`)
    const response = await posts.json()

    console.log('params.postId ==>', params.category, response)

    return {
        props: {
            post: response
        }
    }
}
