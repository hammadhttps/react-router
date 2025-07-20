 import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
 import { RouterProvider,Route, createBrowserRouter, createRoutesFromElements } from 'react-router'
import RootLayout from './Layout/RootLayout'
import ContactLayout from './Layout/ContactLayout'
import Info from './components/Info'
import Form from './components/Form'
import NotFound from './components/NotFound'
import JobsLayout from './Layout/JobsLayout'
import Jobs, { jobs_Loader } from './pages/Jobs'
import JobsDetails, { job_Details_Loader } from './components/JobsDetails'
import ErorPage from './components/ErorPage'
 const App = () => {

  const router=createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout/>} >
          <Route index element={<Home/>} />
          <Route path="product" element={<Product/>} />
          <Route path="about" element={<About/>} />
          <Route path="contact" element={<ContactLayout/>} >
                <Route path='info' element={<Info/>}/>
                <Route path='form' element={<Form/>}/>
          </Route>
          
            <Route path='jobs' element={<JobsLayout/>}>
            <Route index element={<Jobs/>} 
            loader={jobs_Loader}/>
            <Route path=':id' element={<JobsDetails/>} loader={job_Details_Loader} errorElement={<ErorPage/>}/>

            </Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      
    )
  )

   return (
    //  <div>
    //   {/* <Navbar/>
    //    <div className='container'>
    //   <Routes>
    //     <Route path='/' element={<Home/>} />
    //     <Route path='/Product' element={<Product/>} />
    //     <Route path='/About' element={<About/>} />
    //     <Route path='/Contact' element={<Contact/>} />
    //   </Routes>
    //   </div> */}
    //  </div>
    <RouterProvider router={router} />
   )
 }
 
 export default App