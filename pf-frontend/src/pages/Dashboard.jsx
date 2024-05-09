import { useLoaderData } from 'react-router-dom'
import { fetchData } from '../helpers'
import { Intro } from '../components/Intro'
import { toast } from 'react-toastify'
import AddBudgetForm from '../components/AddBudgetForm'

//loader
// eslint-disable-next-line react-refresh/only-export-components
export function dashboardLoader() {
  //look in localStorage if there are keys below
  const userName = fetchData('userName')
  const budgets = fetchData('budgets')

  return { userName, budgets }
}

// action
// eslint-disable-next-line react-refresh/only-export-components
export async function dashboardAction({ request }) {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)
  // console.log(formData)
  // console.log('_action', _action)

  if (_action === 'newUser') {
    try {
      // throw new Error('You are done!') //will be use with custom error message -- for testing error page
      localStorage.setItem('userName', JSON.stringify(values.userName))
      return toast.success(`Welcome, ${values.userName}`)
    } catch (error) {
      throw new Error('There was a problem creating your account.')
    }
  }

  if (_action === 'createBudget') {
    try {
      // create budget
      return toast.success('Budget created!')
    } catch (error) {
      throw new Error('There was a problem creating your budget.')
    }
  }
}

const Dashboard = () => {
  //allow to access the dashboardLoader function above
  //the dashboardLoader function is connected to loader inside a specific path
  const { userName, budgets } = useLoaderData()
  return (
    <>
      {userName ? (
        <>
          <h1>
            Welcome back, <span className='accent'>{userName}</span>
          </h1>
          <div className='grid-sm'>
            {/* {budgets ? () : ()} */}
            <div className='grid-lg'>
              <div className='flex-lg'>
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </>
      ) : (
        <Intro />
      )}
    </>
  )
}

export default Dashboard
