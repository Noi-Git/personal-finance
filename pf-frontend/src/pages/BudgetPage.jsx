import { useLoaderData } from 'react-router-dom'
import { getAllMatchingItems } from '../helpers'
import BudgetItem from '../components/BudgetItem'
import AddExpenseForm from '../components/AddExpenseForm'

//Loader
export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: 'budgets',
    key: 'id',
    value: params.id,
  })[0]
  if (!budget) {
    throw new Error(`The budget you's trying to find doesn't exist`)
  }

  return { budget }
}

const BudgetPage = () => {
  const { budget } = useLoaderData()

  return (
    <>
      <div className='grid-lg'>
        <h1 className='h2'>
          <span className='accent'>{budget.name}</span> Overview
        </h1>
        <div className='flex-lg'>
          <BudgetItem budget={budget} />
          <AddExpenseForm budgets={[budget]} />
        </div>
      </div>
    </>
  )
}

export default BudgetPage
