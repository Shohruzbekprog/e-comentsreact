/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-undef */
import { Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Servise from './pages/Servise'
import Home from './pages/home'
import Header from './components/Header'
import Footer from './components/Footer'
import SignIn from './components/SignIn'
import Maxfiy from './components/Maxfiy'
import { useEffect, useState } from 'react'
import ProtectedRoute from './components/ProtectedRoute'


const getuser = () => {
  return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null
}

const getLocalStorage = () => {
  return localStorage.getItem('products') ? JSON.parse(localStorage.getItem('products')) : [];
}


function App() {

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [list, setList] = useState(getLocalStorage)

  const navigate = useNavigate()


  const [user, setUser] = useState(getuser());


  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {name: user};
    setUser({...user, newItem});
    if(user) {
      return navigate("/maxfiy")
    }
  }

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/servise' element={<Servise />} />
      <Route path='/signin' element={<SignIn user={user} setUser={setUser} handleSubmit = {handleSubmit} />} />
      <Route path='/maxfiy' element={
        <ProtectedRoute user ={user}>
          <Maxfiy
           title={title} 
           setTitle={setTitle}
           price={price}
           setPrice={setPrice}
           />
        </ProtectedRoute>
      } />
    </Routes>
    <Footer />
    </>
  )
}

export default App
