import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import Root from './Components/Root/Root';
import MyResume from './Components/MyResume/MyResume';
import About from './Components/AboutUs/About';
import ResumeTemp from './Components/ResumeTemplates/ResumeTemp';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root />}>
        <Route path='/resumetemp' element={<ResumeTemp />} />
        <Route path='/myresume' element={<MyResume />} />
        <Route path='/about' element={<About />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  );
}

export default App;
