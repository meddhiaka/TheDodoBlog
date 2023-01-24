import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Create from './Create'
import PostDetails from './PostDetails'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='/posts/:id' element={<PostDetails />} />
        </Route>
      </Routes>
    </div>
  )
}