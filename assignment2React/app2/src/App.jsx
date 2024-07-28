import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free';
import './App.css'
import LandingPage from './Component/LandingPage/LandingPage';
import Layout from './Component/Layout/Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Carlist from './Component/Carslist/Carlist';
const routes =createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {index:true, element:<LandingPage/>},
      {path:'/LandingPage', element:<LandingPage/>},
      {path:'/CarList', element:<Carlist/>},
      // {path:'', element:<LandingPage/>},
    ],
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
