import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <Error />
    },
    {
      path: "/menu",
      element: <Menu />
    }
  ])

  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
