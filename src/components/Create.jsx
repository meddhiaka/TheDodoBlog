import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Create() {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('dhia')
    const [isSubmiting, setIsSubmiting] = useState(false)
    const history = useNavigate()
    
    function handleSubmit(e) {
        e.preventDefault()
        const output = {title, body, author}

        setIsSubmiting(true)
        
        setTimeout(() => {
            fetch('http://192.168.1.14:1337/posts', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(output)
            })
            .then(() => {
                console.log('new post added')
                setIsSubmiting(false)
                history('/')
            })
        }, 500)
    }

    return (
        <div className="create">
            
            <h2 style={{
            padding: "3rem 0"
            }}>Create a new Post</h2>
            
            <form onSubmit={handleSubmit}>
                <label>Post title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <label>Post body:</label>
                <textarea
                    required
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />

                <label>Post author</label>
                <div className="form-container">
                    <select 
                        name="" 
                        id=""
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                    >
                        <option value="dhia">Dhia</option>
                        <option value="mario">Mario</option>
                    </select>
                    {!isSubmiting && <button>Add this post</button>}
                    {isSubmiting && <button disabled>Adding post ...</button>}
                </div>

            </form>
        </div>
    )
}