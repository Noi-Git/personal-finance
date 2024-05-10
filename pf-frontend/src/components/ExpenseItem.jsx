import { Link } from 'react-router-dom'
import {
  formatCurrency,
  formatDateToLocalString,
  getAllMatchingItems,
} from '../helpers'

// eslint-disable-next-line react/prop-types
const ExpenseItem = ({ expense }) => {
  const budget = getAllMatchingItems({
    category: 'budgets',
    key: 'id',
    value: expense.budgetId,
  })[0]
  console.log('budget--', budget)
  // console.log('expense', expense)
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <td className='align-left'>{formatCurrency(expense.name)}</td>
      {/* eslint-disable-next-line react/prop-types */}
      <td>{formatCurrency(expense.amount)}</td>
      {/* eslint-disable-next-line react/prop-types */}
      <td>{formatDateToLocalString(expense.createdAt)}</td>
      {/* eslint-disable-next-line react/prop-types */}
      <td>
        <Link to={`/budget/${budget.id}`}>{budget.name}</Link>
      </td>
    </>
  )
}

export default ExpenseItem
