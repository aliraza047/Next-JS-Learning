import { useRouter } from 'next/router'

function MultiParams() {
    const router = useRouter()
    const { params =[]} = router.query
    console.log('parma ==>', params)
    if (params.length == 2) {
        return <h2>2 params</h2>
    }
    if (params.length == 1) {
        return <h2>1 params</h2>
    }else{
        return  <h2>No params</h2>
    }
}

export default MultiParams