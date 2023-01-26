
import Link from 'next/link'
import { useState } from 'react'
function Posts() {
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const loadPost = async () => {
        const posts = await fetch('/api/posts')
        const res = await posts.json()
        setData(res)
    }
    const addPost = async () => {
        const posts = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({title}),
            'content-type': 'application/json'
        })
        const res = await posts.json()
        console.log('res add ==>', res)
        setTitle('')
        loadPost()
    }
    return (

        <>
            <h1>List Of Post</h1>
            <button onClick={loadPost}>Loads Posts</button>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addPost}>Add Posts</button>

            {
                data.map(user => {
                    return (
                        <div key={user?.id}>
                            <Link href={`/postJson/${user.id}`}>
                                <h2>{user.title}</h2>
                            </Link>
                            <h3>{user.price}</h3>
                            <hr></hr>
                        </div>
                    )
                })
            }
        </>
    )
}
export default Posts
