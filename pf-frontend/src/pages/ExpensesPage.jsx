import { useLoaderData } from 'react-router-dom'
import { deleteItem, fetchData } from '../helpers'
import { Table } from '../components/Table'
import { toast } from 'react-toastify'

// eslint-disable-next-line react-refresh/only-export-components
export async function expensesLoader() {
  // eslint-disable-next-line no-undef
  const expenses = await fetchData('expenses')
  return { expenses }
}

//create action
export async function expensesAction({ request }) {
  const data = await request.formData()
  const { _action, ...values } = Object.fromEntries(data)

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

const ExpensesPage = () => {
  const { expenses } = useLoaderData()
  return (
    <>
      <div className='grid-lg'>
        <h1>All Expenses</h1>
        {expenses && expenses.length > 0 ? (
          <div className='grid-md'>
            <h2>
              Recent Expenses <small>({expenses.length} total)</small>
            </h2>
            <Table expenses={expenses} />
          </div>
        ) : (
          <p>No Expenses to show</p>
        )}
      </div>
    </>
  )
}

export default ExpensesPage
