import React, { useEffect } from 'react';
import Home from './pages/Home';
import { BrowserRouter, createBrowserRouter, RouterProvider, useLocation } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import ProductPage from './pages/ProductPage';
import ServicesPage from './pages/ServicePage';
import ContactPage from './pages/ContactUs';
import AboutPage from './pages/AboutPage';


const routes = createBrowserRouter([
  {
    path:'',
    element: <MainLayout />,
    children:[
      {
        index:true,
        element: <Home />
      },
      {
        path:'about',
        element: <AboutPage />
      },
      {
        path:'products',
        element: <ProductPage />
      },
      {
        path:'services',
        element: <ServicesPage />
      },
      {
        path:'contact',
        element: <ContactPage />
      },
    ]
  }
])



const App = () => {


  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  );
};

export default App;