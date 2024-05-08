import { Form, NavLink } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/24/solid'
import logomark from '../assets/logomark.svg'
// eslint-disable-next-line react/prop-types
const Nav = ({ userName }) => {
  return (
    <>
      <nav>
        {/* NavLink will set area equal to current page  */}
        <NavLink to='/' aria-label='Go to home page'>
          <img src={logomark} alt='' height={30} />
          <span>Personal Finance</span>
        </NavLink>
        {/* if there is user -- show form */}
        {userName && (
          <Form
            method='post'
            action='/logout'
            onSubmit={(event) => {
              if (!confirm('Delete user and all data?')) event.preventDefault()
              //send confirm message to prevent accidentally delete the account
            }}
          >
            <button type='submit' className='btn btn--warning'>
              <span>Delete User</span>
              <TrashIcon width={20} />
            </button>
          </Form>
        )}
      </nav>
    </>
  )
}

export default Nav
