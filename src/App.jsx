import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Project from "./pages/projects.jsx";
import Resume from "./pages/resume.jsx";
import "./styles/app.css";
import { useState,useEffect } from "react";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
const router=createBrowserRouter([
  {
    path:"/",
    element:<Header/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"resume",
        element:<Resume/>
      }
      ,
      {
        path:"projects",
        element:<Project/>
      }
    ]
  },
]);
export default function App(){
  const [isLoading,setIsLoading]=useState(true);
  useEffect(()=>{
    const timer=()=>{
      setTimeout(() =>setIsLoading(false), 3000);
    }
    timer();
    return()=>clearTimeout(timer);
  },[]);
  if(isLoading){
    return(
      <div className="loader-wrapper">
        <div className="spinner"></div>
      </div>
    );
  }
  return(
    <RouterProvider router={router}>

    </RouterProvider>
  );
}