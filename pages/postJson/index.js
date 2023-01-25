
import Link from 'next/link'
function Posts({ posts }) {
    return (
        <>
            {
                posts.map(user => {
                    return (
                        <div key={user?.id}>
                            <Link href={`/postJson/${user.id}`}>
                                <h2>{user.title}</h2>
                                </Link>
                            <h3>{user.price}</h3>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Posts


export async function getStaticProps() {
    const posts = await fetch('http://localhost:4000/posts')
    const postJson = await posts.json()

    return {
        props: {
            posts: postJson
        },
        revalidate: 30
    }
}