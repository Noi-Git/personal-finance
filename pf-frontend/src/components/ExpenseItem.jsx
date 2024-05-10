import { formatCurrency, formatDateToLocalString } from '../helpers'

// eslint-disable-next-line react/prop-types
const ExpenseItem = ({ expense }) => {
  // console.log('expense', expense)
  return (
    <>
      {/* eslint-disable-next-line react/prop-types */}
      <td className='align-left'>{formatCurrency(expense.name)}</td>
      {/* eslint-disable-next-line react/prop-types */}
      <td>{formatCurrency(expense.amount)}</td>
      {/* eslint-disable-next-line react/prop-types */}
      <td>{formatDateToLocalString(expense.createdAt)}</td>
    </>
  )
}

export default ExpenseItem
