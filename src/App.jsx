import './assets/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Create from './components/Create'
import PostDetails from './components/PostDetails'
import NotFound from './components/404'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path='create' element={<Create />} />
          <Route path='/posts/:id' element={<PostDetails />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  )
}