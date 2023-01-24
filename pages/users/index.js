
import UserCard from '@/component/userCard'

function Users({ users }) {
  return (
    <>{
      users.map(user => {
        return (
          <div key={user?.id}>
            <UserCard user={user} />
          </div>
        )
      })
    }
    </>
  )
}
export default Users


export async function getStaticProps() {
  const users = await fetch('https://jsonplaceholder.typicode.com/users')
  const userJson = await users.json()

  return {
    props: {
      users: userJson
    }
  }
}