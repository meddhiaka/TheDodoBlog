export default function PostList({posts, handleDelete}) {
    return (
        <div className="blog-list">
            <h2>All Blogs</h2>
            {
                posts.map(
                    (post) => (
                        <div className='post-preview' key={ post.id }>
                            <h2>{ post.title }</h2>

                            <p style={{
                                padding: "1em 0",
                                fontWeight: "bold"
                            }}>Written by { post.author }</p>
                        </div>
                    )
                )
            }
        </div>  
    )
}