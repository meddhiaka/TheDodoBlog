import { useParams } from "react-router-dom"
import useFetch from "./useFetch"

export default function PostDetails() {
    const {id} = useParams()
    const {data: post, IsPending, error} = useFetch('http://localhost:1337/posts/' + id)

    return (
        <div className="post-details">
                { IsPending && <div>Loading ...</div>}
                { error && <div>{ error }</div>}
                { post && (
                    <article>
                        <h2>{ post.title }</h2>
                        <p>Written by { post.author }</p>
                        <div>{ post.body }</div>
                    </article>
                )}
        </div>
    )
}