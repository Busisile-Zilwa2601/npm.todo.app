import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { RootLayout } from './layout/RootLayout';

// Pages
import { Home } from './pages/Home';
import {UserPage} from './pages/UserPage';
import { TodoPage } from './pages/TodoPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home />}/>
        <Route path='/users' element={<UserPage />} />
        <Route path='/todos' element={<TodoPage />} />
    </Route>
  )
)


function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
