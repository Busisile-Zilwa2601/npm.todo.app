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
import {HomePage} from './pages/Home';
import { TodoPage } from './pages/Todo';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<HomePage />} />
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
