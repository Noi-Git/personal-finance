import { Link, useLoaderData } from 'react-router-dom'
import {
  createBudget,
  createExpense,
  deleteItem,
  fetchData,
  wait,
} from '../helpers'
import { Intro } from '../components/Intro'
import { toast } from 'react-toastify'
import AddBudgetForm from '../components/AddBudgetForm'
import AddExpenseForm from '../components/AddExpenseForm'
import BudgetItem from '../components/BudgetItem'
import { Table } from '../components/Table'

//loader
// eslint-disable-next-line react-refresh/only-export-components
export function dashboardLoader() {
  //look in localStorage if there are keys below
  const userName = fetchData('userName')
  const budgets = fetchData('budgets')
  const expenses = fetchData('expenses')

  return { userName, budgets, expenses }
}

// action
// eslint-disable-next-line react-refresh/only-export-components
export async function dashboardAction({ request }) {
  await wait()
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
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      })
      return toast.success('Budget created!')
    } catch (error) {
      throw new Error('There was a problem creating your budget.')
    }
  }

  if (_action === 'createExpense') {
    try {
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      })
      // console.log('values.newExpense', values)
      return toast.success(`Expense ${values.newExpense} created!`)
    } catch (error) {
      throw new Error('There was a problem creating your expense.')
    }
  }

  if (_action === 'deleteExpense') {
    try {
      deleteItem({
        key: 'expenses',
        id: values.expenseId,
      })
      // console.log('values.newExpense', values)
      return toast.success(`Expense deleted!`)
    } catch (error) {
      throw new Error('There was a problem deleting your expense.')
    }
  }
}

const Dashboard = () => {
  //allow to access the dashboardLoader function above
  //the dashboardLoader function is connected to loader inside a specific path
  const { userName, budgets, expenses } = useLoaderData()
  return (
    <>
      {userName ? (
        <>
          <h1>
            Welcome back, <span className='accent'>{userName}</span>
          </h1>
          <div className='grid-sm'>
            {budgets && budgets.length > 0 ? (
              <div className='grid-lg'>
                <div className='flex-lg'>
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
                <h2>Existing Budgets</h2>
                <div className='budgets'>
                  {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
                {expenses.length === 0 && (
                  <div className='grid-md'>
                    <h2>No expense!</h2>
                  </div>
                )}
                {expenses && expenses.length > 0 && (
                  <div className='grid-md'>
                    <h2>Recent Expenses</h2>
                    <Table
                      expenses={expenses
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .slice(0, 8)}
                    />
                    {expenses.length > 8 && (
                      <Link to='expenses' className='btn btn--dark'>
                        View all expenses
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className='grid-sm'>
                <p>Personal budgeting is the secret to financial freedom.</p>
                <p>Create a budget to get started!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </>
      ) : (
        <Intro />
      )}
    </>
  )
}

export default Dashboard
