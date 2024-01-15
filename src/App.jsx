import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/home'
import BookList from './pages/BookList'
import Book from './pages/Book'
import NewBook from './pages/NewBook'
import NotFound from './pages/NotFound'
import BookLayout from './BookLayout'
import BookRoutes from './BookRoutes'
import './styles.css'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation()
  console.log('location', location)

  // Using useRoute for Defining Routes
  /* let element = useRoute([
    {
      path: '/',
      element: '<NavLayout />',
      children: [
        {
          index: true,
          element: '<Home />'
        },
        {
          path: 'about',
          element: '<About />'
        },
        {
          path: 'contact',
          element: '<Contact />'
        }
      ],
    }
  ]); */

  return (
    <>
      <Routes location="/books">
        <Route path="/books" element={<h4>React Routes</h4>} />
      </Routes>

      <nav>
        {location.state}
        <ul>
          <li><Link to="/" /* style={} className={}  children={} */>Home</Link></li>
          {/* <li><Link to="/books">Books</Link></li> */}
          <br />
          <li><NavLink end /* replace reloadDocument state={} */
            state="Hi"
            to="/books/new" 
            style={({ isActive }) => { 
              return isActive ? {color: 'red'} : {} 
            }}
            >
              {({ isActive }) => {
                return isActive ? "Active New Book" : "New Book"
              }}
              </NavLink></li>
        </ul>
      </nav>
      {/* {element} //using UseRoute Hook */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sometext" element={<h1>Some Text</h1>} />
        {/* <Route element={<BookLayout />}> */}
        {/* <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=':id' element={<Book />} />
          <Route path='new' element={<NewBook />} />
        </Route> */}

        <Route path="/books/*" element={<BookRoutes />} />

        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
