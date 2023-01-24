import { Link, Outlet } from "react-router-dom"

export default function Navbar() {
    return (
        <div>
            <div className="nav">
                        <h1>The Dodo Blog</h1>
                        <div className="links">
                            <Link to="/" className="anchor">Home</Link>
                            <Link to="/create" className="anchor">New post</Link>
                        </div>
            </div>
            <Outlet />
        </div>
    )
}