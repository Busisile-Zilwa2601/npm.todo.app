import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom';
import { AppProvider } from './context/AppContext';

// Layout
import { RootLayout } from './layout/RootLayout';
import { UsersLayout } from './layout/UsersLayout';

// Pages
import { Home } from './pages/Home';
import {UserPage} from './pages/UserPage';
import { TodoPage } from './pages/TodoPage';
import { UserDetails } from './pages/UserDetails';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
        <Route path='/' element={<Home />}/>
        <Route path='users' element={<UsersLayout />} >
          <Route index element={<UserPage />} />
          <Route path=':id' element={<UserDetails/>} />
        </Route>
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
