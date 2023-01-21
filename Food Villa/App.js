import './src/assets/scss/index.scss';
// imported react and reactdom from nodemodule folder
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './src/components/Header';
import { Footer } from './src/components/Footer';
import Body from './src/components/Body';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import About from './src/components/About';
import Error from './src/components/Error';


const AppLayout = () => {
  return (
    <React.Fragment>
      <Header />
       <Outlet/>
      <Footer />
    </React.Fragment>
  );
}
//routing
const appRouter = createBrowserRouter([

  {
    path: '/',
    element: <AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path: '/about',
        element: <About/>
      }
    ]
  }

])
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
root.render(
<RouterProvider router={appRouter}/>
);
