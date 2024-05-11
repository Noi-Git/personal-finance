import ExpenseItem from './ExpenseItem'

// eslint-disable-next-line react/prop-types
export const Table = ({ expenses, showBudget = true }) => {
  return (
    <>
      <div className='table'>
        <table>
          <thead>
            <tr>
              {[
                'Name',
                'Amount',
                'Date',
                showBudget ? 'Budget Type' : '',
                '',
              ].map((i, index) => (
                <th key={index}>{i}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {/* eslint-disable-next-line react/prop-types */}
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <ExpenseItem expense={expense} showBudget={showBudget} />
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
