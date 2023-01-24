
import Link from 'next/link'
function Posts({ posts }) {
    return (
        <>
            {
                posts.map(user => {
                    return (
                        <div key={user?.id}>
                            <Link href={`/posts/${user.id}`}><h2>{user.title}</h2></Link>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Posts


export async function getStaticProps() {
    const posts = await fetch('https://jsonplaceholder.typicode.com/posts')
    const postJson = await posts.json()

    return {
        props: {
            posts: postJson
        }
    }
}