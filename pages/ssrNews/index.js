
import Link from 'next/link'

function Posts({ posts }) {
    return (
        <>
            {
                posts.map(user => {
                    return (
                        <div key={user?.id}>
                            {/* <Link href={`/ssrNews/${user.id}`}> */}
                                <h2>{user.title}</h2>
                                {/* </Link> */}
                            <h3>{user.price}</h3>
                            <Link href={`/ssrNews/${user.catgory}`}>
                            <h3>{user.catgory}</h3>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Posts


export async function getServerSideProps() {
    const posts = await fetch('http://localhost:4000/news')
    const postJson = await posts.json()

    return {
        props: {
            posts: postJson
        }
    }
}