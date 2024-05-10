// eslint-disable-next-line react/prop-types
export const Table = ({ expenses }) => {
  return (
    <>
      <div className='table'>
        <table>
          <thead>
            <tr></tr>
          </thead>

          <tbody>
            {/* eslint-disable-next-line react/prop-types */}
            {expenses.map((expense) => (
              <tr key={expense.id}>
                {expense.name}
                {/* <ExpenseItem/> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
