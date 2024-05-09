import { CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { Form } from 'react-router-dom'

const AddBudgetForm = () => {
  return (
    <>
      <div className='form-wrapper'>
        <h2 className='h3'>Create budget</h2>
        <Form method='post' className='grid-sm'>
          <div className='grid-xs'>
            <label htmlFor='newBudget'>Budget Name</label>
            <input
              type='text'
              name='newBudget'
              id='newBudget'
              placeholder='e.g., Groceries'
              required
            />
          </div>
          <div className='grid-sx'>
            <label htmlFor='newBudgetAmount'>Amount</label>
            <input
              type='number'
              step='0.01'
              name='newBudgetAmount'
              id='newBudgetAmount'
              placeholder='e.g., $350.10'
              inputMode='decimal'
              required
            />
          </div>
          <input type='hidden' name='_action' value='createBudget' />
          <button type='submit' className='btn btn--dark btn-mt'>
            <span>Create budget</span>
            <CurrencyDollarIcon width={20} />
          </button>
        </Form>
      </div>
    </>
  )
}

export default AddBudgetForm
