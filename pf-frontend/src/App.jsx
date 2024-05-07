import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Dashboard, { dashboardLoader } from './pages/Dashboard'
import Error from './pages/Error'
import Main, { mainLoader } from './layouts/Main'
import { logoutAction } from './actions/logout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        //these are <Outlet/>
        // path: '/', //can be write it as index: true
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />, //show error when go to route that does not exist
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
])
const App = () => {
  return (
    <>
      <div className='App'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
