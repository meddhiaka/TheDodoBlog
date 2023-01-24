import { useParams } from "react-router-dom"

export default function PostDetails() {
    const {id} = useParams()
    return (
        <div className="post-details">
            <h2>Post Details, {id}</h2>
        </div>
    )
}