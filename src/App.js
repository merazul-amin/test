
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Header from './components2/Header/Header';

function App() {
  // const router=createBrowserRouter([
  //   {path:'/', element:<div>This is default page.</div>},
  //   {path:'/home', element:<Home></Home>},
  //   {path:'/about', element:<About></About>},
  //   {path:'/products' , element:<Products></Products>}
  // ]);
  return (
    <div className="App">
      {/* <RouterProvider router={router}></RouterProvider> */}
      <Header></Header>
    </div>
  );
}

export default App;
