import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/homepage/Home.page';
import { Dancers } from './pages/dancers/Dancers';

export const hompePageUrl = '/'
export const dancersPageUrl = '/dancers'

const router = createBrowserRouter([
  {
    path: hompePageUrl,
    element: <HomePage />,
  },
  {
    path: dancersPageUrl,
    element: <Dancers />,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
