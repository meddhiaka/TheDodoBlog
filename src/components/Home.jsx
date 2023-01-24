import PostList from './PostList'
import useFetch from './useFetch'

export default function Home() {

    const { data, IsPending, error } = useFetch('http://192.168.1.14:1337/posts/')

    return (
        <div className="Home">
            {error && <span>{error}</span>}
            {IsPending && <span >Is Loading ...</span>}
            {
                data && 
                <PostList 
                    posts={data} 
                    title='some testing titles'
                />
            }
        </div>
    )
}