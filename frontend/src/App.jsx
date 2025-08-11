import React, { lazy } from 'react';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layout/MainLayout';

const ProductPage = lazy(() => import('./pages/ProductPage'));
const ServicesPage = lazy(() => import('./pages/ServicePage'));
const ContactPage = lazy(() => import('./pages/ContactUs'));
const AboutPage = lazy(() => import('./pages/AboutPage'));


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