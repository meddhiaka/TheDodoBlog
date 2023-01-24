import { useParams } from "react-router-dom"
import useFetch from "./useFetch"
import { useNavigate } from "react-router-dom"

export default function PostDetails() {
    const {id} = useParams()
    const {data: post, IsPending, error} = useFetch('http://192.168.1.14:1337/posts/' + id)
    const history = useNavigate()
    function handleDelete() {
        fetch('http://192.168.1.14:1337/posts/' + post.id, {
            method: 'DELETE'
        })
        .then(() => {
            console.log('deleted')
            history('/')
        })
    }

    return (
        <div className="post-details">
                { IsPending && <div>Loading ...</div>}
                { error && <div>{ error }</div>}
                { post && (
                    <article>
                        <h2>{ post.title }</h2>
                        <p>Written by { post.author }</p>
                        <div>{ post.body }</div>
                        <button className="btn" onClick={handleDelete}>Delete</button>
                    </article>
                )}
        </div>
    )
}