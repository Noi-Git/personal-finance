import { Link, useFetcher } from 'react-router-dom'
import {
  formatCurrency,
  formatDateToLocalString,
  getAllMatchingItems,
} from '../helpers'
import { TrashIcon } from '@heroicons/react/24/solid'
// eslint-disable-next-line react/prop-types
const ExpenseItem = ({ expense }) => {
  const fetcher = useFetcher()
  const budget = getAllMatchingItems({
    category: 'budgets',
    key: 'id',
    // eslint-disable-next-line react/prop-types
    value: expense.budgetId,
  })[0]
  // console.log('budget--', budget)
  // console.log('expense', expense)
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <td>{formatCurrency(expense.name)}</td>
      {/* eslint-disable-next-line react/prop-types */}
      <td>{formatCurrency(expense.amount)}</td>
      {/* eslint-disable-next-line react/prop-types */}
      <td>{formatDateToLocalString(expense.createdAt)}</td>
      {/* eslint-disable-next-line react/prop-types */}
      <td>
        <Link
          to={`/budget/${budget.id}`}
          style={{
            '--accent': budget.color,
          }}
        >
          {budget.name}
        </Link>
      </td>
      <td>
        <fetcher.Form method='post'>
          <input type='hidden' name='_action' value='deleteExpense' />
          {/* eslint-disable-next-line react/prop-types */}
          <input type='hidden' name='expenseId' value={expense.id} />
          <button
            className='btn btn--warning'
            // eslint-disable-next-line react/prop-types
            aria-label={`Delete ${expense.name} expense`}
          >
            <TrashIcon width={20} />
          </button>
        </fetcher.Form>
      </td>
    </>
  )
}

export default ExpenseItem
