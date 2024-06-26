import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Dashboard, { dashboardAction, dashboardLoader } from './pages/Dashboard'
import BudgetPage, { budgetAction, budgetLoader } from './pages/BudgetPage'
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from './pages/ExpensesPage'
import Error from './pages/Error'
import Main, { mainLoader } from './layouts/Main'
import { logoutAction } from './actions/logout'
import { deleteBudget } from './actions/deleteBudget'

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
        action: dashboardAction,
        errorElement: <Error />, //show error when go to route that does not exist
      },
      {
        path: 'budget/:id',
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: 'delete',
            action: deleteBudget,
          },
        ], //show error when go to route that does not exist
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
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
        <ToastContainer />
      </div>
    </>
  )
}

export default App
