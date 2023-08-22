import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';
import Layout from './layout';
import Home from './pages/index.page';
export default function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> }
        // { path: "*", element: "" },
      ]
    }
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}
