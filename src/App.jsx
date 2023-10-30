// Import necessary components and styles
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Root from './Components/Root/Root';
import MyResume from './Components/MyResume/MyResume';
import About from './Components/AboutUs/About';
import HomePage from './Components/HomePage/HomePage';
import DetailFillingPages from './Components/Detail/DetailFillingPages';
// Define the main 'App' component
function App() {
  // Create a router using 'createBrowserRouter' and define routes using 'createRoutesFromElements'
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route path='' element={<HomePage />}></Route>
        <Route path='/detailfilling/*' element={<DetailFillingPages />}>
        </Route>
        <Route path='/myresume' element={<MyResume />} />
        <Route path='/about' element={<About />} />
      </Route>
    )
  );

  // Render the 'RouterProvider' component with the created router
  return (
    <RouterProvider router={router} />
  );
}

// Export the 'App' component to make it available for use in other parts of the application
export default App;
